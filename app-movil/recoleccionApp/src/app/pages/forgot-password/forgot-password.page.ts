import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonInput, IonButton, IonItem, IonIcon, IonSpinner,
  ToastController,
} from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonInput, IonButton, IonItem, IonIcon, IonSpinner,
    FormsModule, CommonModule, RouterModule,
  ],
})
export class ForgotPasswordPage {
  email     = '';
  isLoading = false;
  enviado   = false;

  constructor(private auth: AuthService, private toastCtrl: ToastController) {}

  async reset() {
    if (!this.email || !this.email.includes('@'))
      return this.showToast('Ingresa un correo válido', 'warning');

    this.isLoading = true;
    try {
      await this.auth.resetPassword(this.email);
      this.enviado = true;
      this.showToast('📧 Revisa tu correo', 'success');
    } catch (error: any) {
      this.showToast(error.message || 'Error al enviar el correo', 'danger');
    } finally {
      this.isLoading = false;
    }
  }

  private async showToast(message: string, color: 'success' | 'warning' | 'danger') {
    const toast = await this.toastCtrl.create({ message, color, duration: 4000, position: 'top' });
    await toast.present();
  }
}
