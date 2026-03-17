import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  IonSelectOption
} from '@ionic/angular/standalone';

import { SupabaseService } from '../../services/supabase.service';

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
    CommonModule,
    FormsModule,
    RouterLink
  ]
})
export class RegisterPage {

  email: string = '';
  password: string = '';
  rol: string = 'ciudadano';

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  async register() {

    if (!this.email || !this.password) {
      alert("Por favor completa todos los campos");
      return;
    }

    try {

      const { data, error } = await this.supabaseService.supabase.auth.signUp({
        email: this.email,
        password: this.password,
        options: {
          data: {
            rol: this.rol
          }
        }
      });

      if (error) {
        alert(error.message);
        return;
      }

      console.log("Usuario creado:", data);

      alert("Usuario registrado correctamente");

      this.router.navigate(['/login']);

    } catch (error) {

      console.error("Error al registrar:", error);
      alert("Error al registrar usuario");

    }

  }

}