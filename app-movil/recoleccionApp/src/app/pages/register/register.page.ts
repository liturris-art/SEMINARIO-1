import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonIcon,
  IonSpinner,
  IonNote,
  ToastController,
} from '@ionic/angular/standalone';

import { SupabaseService } from '../../services/supabase.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonIcon,
    IonSpinner,
    IonNote,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  rol: string = '';
  registerForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private supabaseService: SupabaseService,
    private router: Router,
    private formBuilder: FormBuilder,
    private logger: LoggerService,
    private toastController: ToastController,
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rol: ['', [Validators.required]],
    });
  }

  async register() {
    if (this.registerForm.invalid) {
      this.showToast(
        'Por favor completa todos los campos correctamente.',
        'warning',
      );
      return;
    }

    this.isLoading = true;

    try {
      const { email, password, rol } = this.registerForm.value;

      this.logger.log(`Intentando registrar usuario: ${email} con rol: ${rol}`);

      const { data, error } = await this.supabaseService.supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            rol: rol,
          },
        },
      });

      if (error) {
        this.logger.error('Error en registro de Supabase', error);

        // Manejar errores específicos de Supabase
        if (error.message.includes('already registered')) {
          this.showToast(
            'Este email ya está registrado. Intenta iniciar sesión.',
            'warning',
          );
        } else if (error.message.includes('Invalid email')) {
          this.showToast('Email inválido. Verifica el formato.', 'warning');
        } else if (
          error.message.includes('network') ||
          error.message.includes('fetch')
        ) {
          this.showToast('Error de conexión. Verifica tu internet.', 'danger');
        } else {
          this.showToast(`Error en registro: ${error.message}`, 'danger');
        }
        return;
      }

      this.logger.log(
        `Usuario registrado exitosamente: ${data.user?.email || 'unknown'}`,
      );

      if (data.user && !data.user.email_confirmed_at) {
        this.showToast(
          'Usuario registrado. Confirma tu email antes de iniciar sesión.',
          'success',
        );
      } else {
        this.showToast('Usuario registrado correctamente.', 'success');
      }

      // Limpiar formulario
      this.registerForm.reset();

      // Redirigir al login después de un breve delay
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    } catch (error: any) {
      this.logger.error('Error inesperado en registro', error);
      this.showToast(
        'Error inesperado al registrar usuario. Intenta nuevamente.',
        'danger',
      );
    } finally {
      this.isLoading = false;
    }
  }

  private async showToast(
    message: string,
    color: 'success' | 'warning' | 'danger' = 'success',
  ) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 4000,
      position: 'top',
    });
    await toast.present();
  }
}
