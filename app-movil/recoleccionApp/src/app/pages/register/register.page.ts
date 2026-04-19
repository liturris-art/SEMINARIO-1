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

import { AuthService } from '../../services/auth.service'; // ✅ CORRECTO

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

  registerForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
  ) {

    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      documento: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rol: ['', [Validators.required]],
    });

  }

  async register() {

    if (this.registerForm.invalid) {
      this.showToast('Completa todos los campos correctamente', 'warning');
      return;
    }

    this.isLoading = true;

    try {

      const {
        nombre,
        documento,
        telefono,
        email,
        password,
        rol
      } = this.registerForm.value;

      // 🔥 usamos AuthService correctamente
      await this.auth.register(email, password, {
        nombre,
        documento,
        telefono,
        rol
      });

      this.showToast('Usuario registrado correctamente', 'success');

      this.registerForm.reset();

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1500);

    } catch (error: any) {

      // 🔥 manejo limpio de errores
      if (error.message?.includes('already registered')) {
        this.showToast('Este correo ya está registrado', 'warning');
      } else if (error.message?.includes('Invalid email')) {
        this.showToast('Email inválido', 'warning');
      } else {
        this.showToast(error.message || 'Error en registro', 'danger');
      }

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
      duration: 3000,
      position: 'top',
    });
    await toast.present();
  }
}