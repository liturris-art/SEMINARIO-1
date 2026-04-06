import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonIcon
} from '@ionic/angular/standalone';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonButton,
    IonItem,
    IonIcon,
    FormsModule,
    CommonModule,
    RouterModule
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