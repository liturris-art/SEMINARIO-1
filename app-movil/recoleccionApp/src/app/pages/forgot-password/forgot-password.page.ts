import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonInput,
  IonButton,
  IonItem
} from '@ionic/angular/standalone';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  standalone: true,
  imports: [
    IonContent,
    IonInput,
    IonButton,
    IonItem,
    FormsModule,
    CommonModule
  ]
})
export class ForgotPasswordPage {

  email: string = '';

  constructor(private auth: AuthService) {}

  async reset() {

    try {

      await this.auth.resetPassword(this.email);

      alert("Revisa tu correo para cambiar la contraseña");

    } catch (error: any) {

      alert(error.message);

    }

  }

}