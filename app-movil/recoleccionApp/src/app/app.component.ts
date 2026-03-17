import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { AuthService } from './services/auth.service';
import { BiometricService } from './services/biometric.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet]
})
export class AppComponent {

  constructor(
    private authService: AuthService,
    private biometricService: BiometricService,
    private router: Router
  ) {
    //this.initializeApp();
  }

  async initializeApp() {

    try {

      const currentUrl = this.router.url;

      // 🚫 NO redirigir si está en login o register
      if (
        currentUrl.includes('login') ||
        currentUrl.includes('register')
      ) {
        return;
      }

      // 🔐 verificar sesión
      const user = await this.authService.getUser();

      if (user) {

        const rol = user.user_metadata?.['rol'];

        if (rol === 'conductor') {
          this.router.navigate(['/conductor']);
        } else {
          this.router.navigate(['/ciudadano']);
        }

        return;

      }

      // 👁 biometría
      const biometricAvailable = await this.biometricService.isAvailable();

      if (biometricAvailable) {

        const verified = await this.biometricService.verifyIdentity();

        if (verified) {

          const credentials = await this.biometricService.getCredentials();

          if (credentials) {

            const response = await this.authService.login(
              credentials.username,
              credentials.password
            );

            const rol = response.user?.user_metadata?.['rol'];

            if (rol === 'conductor') {
              this.router.navigate(['/conductor']);
            } else {
              this.router.navigate(['/ciudadano']);
            }

            return;

          }

        }

      }

      // 🚪 si no hay nada → login
      this.router.navigate(['/login']);

    } catch (error) {

      console.log("Error init:", error);
      this.router.navigate(['/login']);

    }

  }

}