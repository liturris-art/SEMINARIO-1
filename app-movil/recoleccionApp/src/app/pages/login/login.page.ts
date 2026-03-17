import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';

import { AuthService } from '../../services/auth.service';
import { BiometricService } from '../../services/biometric.service';

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
    CommonModule,
    FormsModule
  ]
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  biometricAvailable: boolean = false;

  constructor(
    private authService: AuthService,
    private biometricService: BiometricService,
    private router: Router
  ) {}

  async ngOnInit() {

    this.biometricAvailable = await this.biometricService.isAvailable();

  }

  // 🔐 LOGIN NORMAL
  async login() {

    if (!this.email || !this.password) {
      alert("Ingrese email y contraseña");
      return;
    }

    try {

      const response = await this.authService.login(
        this.email,
        this.password
      );

      // 🔥 GUARDAR PARA BIOMETRÍA
      await this.biometricService.saveCredentials(
        this.email,
        this.password
      );

      const rol = response.user?.user_metadata?.['rol'];

      if (rol === 'conductor-mapa') {
        this.router.navigate(['/conductor-mapa']);
      } else {
        this.router.navigate(['/ciudadano']);
      }

    } catch (error: any) {

      alert(error.message || "Error al iniciar sesión");

    }

  }

  // 👁 LOGIN BIOMÉTRICO
  async loginBiometric() {

    try {

      const verified = await this.biometricService.verifyIdentity();

      if (!verified) return;

      const credentials = await this.biometricService.getCredentials();

      if (!credentials) {
        alert("No hay credenciales guardadas");
        return;
      }

      this.email = credentials.username;
      this.password = credentials.password;

      await this.login();

    } catch (error) {

      console.log(error);
      alert("Error con autenticación biométrica");

    }

  }

  // 🚀 NAVEGACIÓN
  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

}