import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonLabel, IonButton, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

import { supabase } from '../services/supabase.service';
import { NativeBiometric } from 'capacitor-native-biometric';

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
    IonLabel,
    IonButton,
    IonSelect,
    IonSelectOption,
    CommonModule,
    FormsModule
  ]
})
export class LoginPage implements OnInit {

  email = "";
  password = "";
  rol = "";

  constructor(private router: Router) {}

  ngOnInit() {}

  // LOGIN NORMAL
  async login(){

    const { data, error } = await supabase.auth.signInWithPassword({
      email: this.email,
      password: this.password
    });

    if(error){
      alert("Credenciales incorrectas");
      return;
    }

    const { data: usuario } = await supabase
      .from('usuarios')
      .select('*')
      .eq('email', this.email)
      .single();

    if(usuario?.rol === "conductor"){
      this.router.navigateByUrl('/conductor');
    }

    if(usuario?.rol === "ciudadano"){
      this.router.navigateByUrl('/ciudadano');
    }

  }

  // LOGIN BIOMÉTRICO
  async loginBiometrico(){

    try{

      const result = await NativeBiometric.isAvailable();

      if(!result.isAvailable){
        alert("Biometría no disponible");
        return;
      }

      await NativeBiometric.verifyIdentity({
        reason: "Confirme su identidad",
        title: "Autenticación biométrica"
      });

      alert("Identidad verificada");

      this.router.navigateByUrl('/home');

    }catch(error){
      alert("Autenticación fallida");
    }

  }

  irRegistro(){
    this.router.navigateByUrl('/registro');
  }

}