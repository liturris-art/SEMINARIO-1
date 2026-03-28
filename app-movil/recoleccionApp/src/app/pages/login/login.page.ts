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
  IonText,
  IonNote,
  ToastController,
} from '@ionic/angular/standalone';

import { AuthService } from '../../services/auth.service';
import { BiometricService } from '../../services/biometric.service';
import { LoggerService } from '../../services/logger.service';
import {
  AppUser,
  BiometricCredentials,
  UserMetadata,
} from '../../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    IonSpinner,
    IonText,
    IonNote,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  biometricAvailable: boolean = false;
  loginForm: FormGroup;
  isLoading: boolean = false;
  loginAttempts: number = 0;
  maxAttempts: number = 5;
  isBlocked: boolean = false;
  blockTimeRemaining: number = 0;
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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async ngOnInit() {
    this.biometricAvailable = await this.biometricService.isAvailable();
  }

  // 🔐 LOGIN MEJORADO CON VALIDACIONES
  async login() {
    // Verificar si está bloqueado por intentos fallidos
    if (this.isBlocked) {
      this.showToast(
        `Cuenta bloqueada. Intenta en ${this.blockTimeRemaining} segundos.`,
        'warning',
      );
      return;
    }

    // Validar formulario
    if (this.loginForm.invalid) {
      this.showToast(
        'Por favor completa todos los campos correctamente.',
        'warning',
      );
      return;
    }

    this.isLoading = true;

    try {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      const response = await this.authService.login(email, password);

      if (!response?.user) {
        throw new Error('No se pudo obtener la información del usuario');
      }

      // Extraer rol del user_metadata con tipado seguro
      const user: AppUser = {
        id: response.user.id,
        email: response.user.email || '',
        user_metadata: response.user.user_metadata as UserMetadata,
        created_at: response.user.created_at,
        updated_at: response.user.updated_at,
      };
      const rol = user.user_metadata?.rol;

      if (!rol) {
        this.showToast(
          'Usuario sin rol asignado. Contacta al administrador.',
          'danger',
        );
        return;
      }

      // Resetear contador de intentos en login exitoso
      this.loginAttempts = 0;

      // Redirigir según rol
      if (rol === 'conductor') {
        this.router.navigate(['/menu']);
      } else {
        this.router.navigate(['/home']);
      }

      this.showToast('¡Sesión iniciada correctamente!', 'success');
    } catch (error: any) {
      this.logger.error('Error en login', error);
      this.loginAttempts++;

      if (this.loginAttempts >= this.maxAttempts) {
        this.blockAccount();
      } else {
        const remainingAttempts = this.maxAttempts - this.loginAttempts;
        this.showToast(
          `Credenciales incorrectas. ${remainingAttempts} intentos restantes.`,
          'danger',
        );
      }
    } finally {
      this.isLoading = false;
    }
  }

  // � LOGIN BIOMÉTRICO MEJORADO
  async loginBiometric() {
    if (!this.biometricAvailable) {
      this.showToast('Biometría no disponible en este dispositivo.', 'warning');
      return;
    }

    try {
      const verified = await this.biometricService.verifyIdentity();
      if (!verified) {
        this.showToast('Verificación biométrica fallida.', 'danger');
        return;
      }

      const credentials = await this.biometricService.getCredentials();
      if (!credentials) {
        this.showToast('No hay credenciales biométricas guardadas.', 'warning');
        return;
      }

      // Actualizar el formulario con las credenciales biométricas
      this.loginForm.patchValue({
        email: credentials.username,
        password: credentials.password,
      });

      await this.login(); // Reutiliza el login normal
    } catch (error: any) {
      this.logger.error('Error en login biométrico', error);
      this.showToast('Error en autenticación biométrica.', 'danger');
    }
  }

  // 🔒 BLOQUEAR CUENTA POR INTENTOS FALLIDOS
  private blockAccount() {
    this.isBlocked = true;
    this.blockTimeRemaining = 300; // 5 minutos en segundos

    this.showToast(
      'Cuenta bloqueada por múltiples intentos fallidos. Espera 5 minutos.',
      'danger',
    );

    this.blockTimer = setInterval(() => {
      this.blockTimeRemaining--;
      if (this.blockTimeRemaining <= 0) {
        this.unblockAccount();
      }
    }, 1000);
  }

  // 🔓 DESBLOQUEAR CUENTA
  private unblockAccount() {
    this.isBlocked = false;
    this.loginAttempts = 0;
    if (this.blockTimer) {
      clearInterval(this.blockTimer);
    }
    this.showToast(
      'Cuenta desbloqueada. Puedes intentar iniciar sesión nuevamente.',
      'success',
    );
  }

  // 📢 MOSTRAR TOAST (MEJOR QUE ALERT)
  private async showToast(
    message: string,
    color: 'success' | 'warning' | 'danger' = 'success',
  ) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000,
      position: 'top',
    });
    await toast.present();
  }

  // 🚀 NAVEGACIÓN
  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  // �👁️ TOGGLE VISIBILIDAD CONTRASEÑA (PENDIENTE IMPLEMENTAR)
  togglePasswordVisibility() {
    // TODO: Implementar toggle de visibilidad de contraseña
    console.log('Toggle password visibility - pendiente');
  }
}
