import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonButton,
  IonItem,
  IonIcon,
  AlertController,
  LoadingController
} from '@ionic/angular/standalone';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonInput,
    IonButton,
    IonItem,
    IonIcon,
    FormsModule,
    CommonModule
  ]
})
export class ResetPasswordPage {

  password: string = '';
  confirmPassword: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  async showAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Información',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async updatePassword() {

    if (!this.password || !this.confirmPassword) {
      this.showAlert("Debe completar los campos");
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.showAlert("Las contraseñas no coinciden");
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Actualizando contraseña...'
    });

    await loading.present();

    try {

      // ✅ CORREGIDO: SIN { error }
      await this.auth.updatePassword(this.password);

      await loading.dismiss();

      const alert = await this.alertCtrl.create({
        header: 'Éxito',
        message: 'Contraseña actualizada correctamente',
        buttons: [{
          text: 'Ir al login',
          handler: () => {
            this.router.navigate(['/login']);
          }
        }]
      });

      await alert.present();

    } catch (error: any) {

      await loading.dismiss();
      this.showAlert(error.message || "Error al actualizar");

    }

  }

}