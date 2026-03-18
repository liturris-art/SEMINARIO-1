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
    //this.initializeApp(); // 🔥 ACTIVADO
  }

  async initializeApp() {

    try {

      const currentUrl = this.router.url;

      if (
        currentUrl.includes('login') ||
        currentUrl.includes('register')
      ) {
        return;
      }

      const user = await this.authService.getUser();

      if (user) {
        return;
      }

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

            if (response.user) {
              return;
            }
          }
        }
      }

      this.router.navigate(['/login']);

    } catch (error) {

      console.log(error);
      this.router.navigate(['/login']);

    }

  }

}
