import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { BiometricService } from './biometric.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  supabase: SupabaseClient;

  constructor(
    private router: Router,
    private biometricService: BiometricService,
  ) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseAnonKey,
    );
  }

  // REGISTRO
  async register(email: string, password: string, rol: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
      options: {
        data: { rol },
      },
    });

    if (error) throw error;

    return data;
  }

  // LOGIN
  async login(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log('[AUTH] signInWithPassword data', data, 'error', error);

    if (error) throw error;

    // 🔥 guardar para biometría
    await this.biometricService.saveCredentials(email, password);

    return data;
  }

  // LOGOUT
  async logout() {
    await this.supabase.auth.signOut();
    this.router.navigate(['/login']);
  }

  // USUARIO ACTUAL
  async getUser(): Promise<User | null> {
    const { data } = await this.supabase.auth.getUser();
    return data.user;
  }

  // VERIFICAR SI ESTÁ LOGUEADO
  async isLoggedIn(): Promise<boolean> {
    const user = await this.getUser();
    return user !== null;
  }

  // ROL
  async getUserRole() {
    const user = await this.getUser();
    return user?.user_metadata?.['rol'];
  }

  // RECUPERAR CONTRASEÑA
  async resetPassword(email: string) {
    const { error } = await this.supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/reset-password',
    });

    if (error) throw error;
  }
}
