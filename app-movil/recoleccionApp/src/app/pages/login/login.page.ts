import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonSpinner,
  IonNote,
  ToastController,
} from '@ionic/angular/standalone';

import { AuthService } from '../../services/auth.service';
import { BiometricService } from '../../services/biometric.service';
import { LoggerService } from '../../services/logger.service';
import { AppUser, UserMetadata } from '../../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonItem, IonInput, IonButton, IonIcon, IonSpinner, IonNote,
    CommonModule, FormsModule, ReactiveFormsModule,
  ],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  isLoading = false;
  biometricAvailable = false;
  showPassword = false;   // ✅ toggle visibilidad contraseña

  loginAttempts = 0;
  maxAttempts = 5;
  isBlocked = false;
  blockTimeRemaining = 0;
  blockTimer: any;

  constructor(
    private authService: AuthService,
    private biometricService: BiometricService,
    private router: Router,
    private formBuilder: FormBuilder,
    private logger: LoggerService,
    private toastController: ToastController,
  ) {
    this.loginForm = this.formBuilder.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async ngOnInit() {
    this.biometricAvailable = await this.biometricService.isAvailable();
  }

  async login() {
    if (this.isBlocked) {
      this.showToast(`Cuenta bloqueada. Intenta en ${this.blockTimeRemaining}s.`, 'warning');
      return;
    }
    if (this.loginForm.invalid) {
      this.showToast('Completa todos los campos correctamente.', 'warning');
      return;
    }

    this.isLoading = true;
    try {
      const { email, password } = this.loginForm.value;
      const response = await this.authService.login(email, password);

      if (!response?.user) throw new Error('No se pudo obtener la información del usuario');

      const user: AppUser = {
        id: response.user.id,
        email: response.user.email || '',
        user_metadata: response.user.user_metadata as UserMetadata,
        created_at: response.user.created_at,
        updated_at: response.user.updated_at,
      };

      const rol = user.user_metadata?.rol;
      if (!rol) {
        this.showToast('Usuario sin rol asignado. Contacta al administrador.', 'danger');
        return;
      }

      this.loginAttempts = 0;
      this.showToast('¡Sesión iniciada correctamente!', 'success');

      if (rol === 'conductor') {
        this.router.navigate(['/menu']);
      } else {
        this.router.navigate(['/home']);
      }

    } catch (error: any) {
      this.logger.error('Error en login', error);
      this.loginAttempts++;
      if (this.loginAttempts >= this.maxAttempts) {
        this.blockAccount();
      } else {
        const restantes = this.maxAttempts - this.loginAttempts;
        this.showToast(`Credenciales incorrectas. ${restantes} intentos restantes.`, 'danger');
      }
    } finally {
      this.isLoading = false;
    }
  }

  async loginBiometric() {
    if (!this.biometricAvailable) {
      this.showToast('Biometría no disponible en este dispositivo.', 'warning');
      return;
    }
    try {
      const verified = await this.biometricService.verifyIdentity();
      if (!verified) { this.showToast('Verificación biométrica fallida.', 'danger'); return; }

      const credentials = await this.biometricService.getCredentials();
      if (!credentials) { this.showToast('No hay credenciales biométricas guardadas.', 'warning'); return; }

      this.loginForm.patchValue({ email: credentials.username, password: credentials.password });
      await this.login();
    } catch (error: any) {
      this.logger.error('Error en login biométrico', error);
      this.showToast('Error en autenticación biométrica.', 'danger');
    }
  }

  /** ✅ Toggle visibilidad de contraseña — implementado */
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  private blockAccount() {
    this.isBlocked = true;
    this.blockTimeRemaining = 300;
    this.showToast('Cuenta bloqueada por múltiples intentos. Espera 5 minutos.', 'danger');
    this.blockTimer = setInterval(() => {
      this.blockTimeRemaining--;
      if (this.blockTimeRemaining <= 0) this.unblockAccount();
    }, 1000);
  }

  private unblockAccount() {
    this.isBlocked = false;
    this.loginAttempts = 0;
    if (this.blockTimer) clearInterval(this.blockTimer);
    this.showToast('Cuenta desbloqueada. Puedes iniciar sesión nuevamente.', 'success');
  }

  private async showToast(message: string, color: 'success' | 'warning' | 'danger' = 'success') {
    const toast = await this.toastController.create({ message, color, duration: 3000, position: 'top' });
    await toast.present();
  }

  goToRegister()       { this.router.navigate(['/register']); }
  // FIX #4: ciudadano puede entrar sin loguearse
  entrarComoCiudadano() { this.router.navigate(['/home'], { replaceUrl: true }); }
  goToForgotPassword() { this.router.navigate(['/forgot-password']); }
}
