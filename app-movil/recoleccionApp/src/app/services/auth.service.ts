import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { BiometricService } from './biometric.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private supabase: SupabaseClient;

  constructor(
    private router: Router,
    private biometricService: BiometricService,
  ) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseAnonKey,
    );
  }

  /* ===============================
     REGISTRO (🔥 COMPLETO)
  =============================== */
  async register(email: string, password: string, dataExtra: any) {

    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
      options: {
        data: dataExtra
      }
    });

    if (error) throw error;

    return data;
  }

  /* ===============================
     LOGIN
  =============================== */
  async login(email: string, password: string) {

    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    // 🔥 guardar biometría
    await this.biometricService.saveCredentials(email, password);

    return data;
  }

  /* ===============================
     LOGOUT
  =============================== */
  async logout() {
    await this.supabase.auth.signOut();
    this.router.navigate(['/login']);
  }

  /* ===============================
     USUARIO ACTUAL
  =============================== */
  async getUser(): Promise<User | null> {
    const { data, error } = await this.supabase.auth.getUser();

    if (error) {
      console.error('Error obteniendo usuario:', error);
      return null;
    }

    return data.user;
  }

  /* ===============================
     PERFIL COMPLETO 🔥
  =============================== */
  async getUserProfile() {
    const user = await this.getUser();

    if (!user) return null;

    return {
      id: user.id,
      email: user.email,
      nombre: user.user_metadata?.['nombre'] || '',
      documento: user.user_metadata?.['documento'] || '',
      telefono: user.user_metadata?.['telefono'] || '',
      rol: user.user_metadata?.['rol'] || ''
    };
  }

  /* ===============================
     VALIDAR SESIÓN 🔐
  =============================== */
  async isLoggedIn(): Promise<boolean> {
    const { data } = await this.supabase.auth.getSession();
    return !!data.session;
  }

  /* ===============================
     OBTENER ROL
  =============================== */
  async getUserRole(): Promise<string> {
    const user = await this.getUser();
    return user?.user_metadata?.['rol'] || '';
  }

  /* ===============================
     RECUPERAR PASSWORD (🔥 APP)
  =============================== */
  async resetPassword(email: string) {

    const { error } = await this.supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'recoleccionapp://reset-password'
    });

    if (error) throw error;
  }

  /* ===============================
     ACTUALIZAR PASSWORD
  =============================== */
  async updatePassword(newPassword: string) {

    const { error } = await this.supabase.auth.updateUser({
      password: newPassword
    });

    if (error) throw error;

    return true;
  }

  /* ===============================
     🔥 AUTO LOGIN DESPUÉS DE RESET
  =============================== */
  async handlePasswordRecoverySession() {

    const { data } = await this.supabase.auth.getSession();

    if (data.session) {
      // 🔥 ya tiene sesión activa desde el link
      return true;
    }

    return false;
  }
}