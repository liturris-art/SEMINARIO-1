import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonToggle,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  LoadingController
} from '@ionic/angular/standalone';

import { AuthService } from '../../services/auth.service';
import { BiometricService } from '../../services/biometric.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  standalone: true,
  imports: [
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonToggle,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    CommonModule
  ]
})
export class ConfiguracionPage {

  biometricEnabled = false;

  constructor(
    private auth: AuthService,
    private biometric: BiometricService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  async toggleBiometric(event: any) {

    this.biometricEnabled = event.detail.checked;

    if (this.biometricEnabled) {
      console.log("Biometría activada");
    } else {
      await this.biometric.deleteCredentials();
      console.log("Biometría desactivada");
    }

  }

  goResetPassword() {
    this.router.navigate(['/forgot-password']);
  }

  async logout() {

    const loading = await this.loadingCtrl.create({
      message: 'Cerrando sesión...',
      spinner: 'crescent',
      duration: 1500
    });

    await loading.present();

    await this.auth.logout();

    await loading.dismiss();

    this.router.navigate(['/login']);
  }

}