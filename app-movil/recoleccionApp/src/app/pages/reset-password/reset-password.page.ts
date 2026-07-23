import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonTitle,
  IonInput, IonButton, IonItem, IonIcon, IonSpinner,
  ToastController,
} from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonInput, IonButton, IonItem, IonIcon, IonSpinner,
    FormsModule, CommonModule,
  ],
})
export class ResetPasswordPage implements OnInit {

  password        = '';
  confirmPassword = '';
  showPassword    = false;
  sesionActiva    = false;
  verificando     = true;
  guardando       = false;

  constructor(
    private auth: AuthService,
    private supabaseService: SupabaseService,
    private router: Router,
    private toastCtrl: ToastController,
  ) {}

  async ngOnInit() {
    await this.verificarSesion();
  }

  private async verificarSesion() {
    this.verificando = true;
    try {
      const { data } = await this.supabaseService.getClient().auth.getSession();
      this.sesionActiva = !!data.session;
      if (!this.sesionActiva) {
        await this.showToast('El enlace expiró o ya fue usado. Solicita uno nuevo.', 'warning');
        this.router.navigate(['/forgot-password'], { replaceUrl: true });
      }
    } catch {
      this.router.navigate(['/login'], { replaceUrl: true });
    } finally {
      this.verificando = false;
    }
  }

  togglePassword() { this.showPassword = !this.showPassword; }

  async updatePassword() {
    if (!this.password || !this.confirmPassword)
      return this.showToast('Completa ambos campos', 'warning');
    if (this.password.length < 6)
      return this.showToast('La contraseña debe tener al menos 6 caracteres', 'warning');
    if (this.password !== this.confirmPassword)
      return this.showToast('Las contraseñas no coinciden', 'danger');

    // No se usa LoadingController/ion-loading: ver nota en
    // configuracion.page.ts (cerrarSesion) — su overlay no llega a
    // aparecer en el WebView nativo de Android.
    this.guardando = true;
    try {
      await this.auth.updatePassword(this.password);
      await this.showToast('✅ Contraseña actualizada correctamente', 'success');
      setTimeout(() => this.router.navigate(['/login'], { replaceUrl: true }), 1500);
    } catch (error: any) {
      this.showToast(error.message || 'Error al actualizar la contraseña', 'danger');
    } finally {
      this.guardando = false;
    }
  }

  private async showToast(message: string, color: 'success' | 'warning' | 'danger') {
    const toast = await this.toastCtrl.create({ message, color, duration: 3500, position: 'top' });
    await toast.present();
  }
}
