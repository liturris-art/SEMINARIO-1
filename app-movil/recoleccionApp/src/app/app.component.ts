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
    this.initializeApp(); // 🔥 ACTIVADO
  }

  async initializeApp() {

    try {

      const currentUrl = this.router.url;

      // 🔥 NO INTERFERIR CON LOGIN / REGISTER / RESET
      if (
        currentUrl.includes('login') ||
        currentUrl.includes('register') ||
        currentUrl.includes('reset-password')
      ) {
        return;
      }

      // 🔥 1. VERIFICAR SESIÓN
      const isLogged = await this.authService.isLoggedIn();

      if (isLogged) {
        console.log('Usuario ya logueado');
        return;
      }

      // 🔥 2. BIOMETRÍA
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

            if (response?.user) {
              console.log('Login automático exitoso');
              this.router.navigate(['/home']); // 🔥 redirige al dashboard
              return;
            }
          }
        }
      }

      // 🔥 3. SI TODO FALLA → LOGIN
      this.router.navigate(['/login']);

    } catch (error) {

      console.error('Error en initializeApp:', error);
      this.router.navigate(['/login']);

    }

  }

}