import { Injectable } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { Router } from '@angular/router';
import { BiometricService } from './biometric.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private router: Router,
    private biometricService: BiometricService,
    private supabaseService: SupabaseService,
  ) {}

  private get supabase() {
    return this.supabaseService.getClient();
  }

  async register(email: string, password: string, dataExtra: Record<string, unknown>) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
      options: { data: dataExtra },
    });
    if (error) throw error;
    return data;
  }

  async login(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    await this.biometricService.saveCredentials(email, password);
    return data;
  }

  async logout() {
    try { await this.supabase.auth.signOut(); } catch(e) { console.warn('signOut error:', e); }
    this.router.navigate(['/login']);
  }

  async getUser(): Promise<User | null> {
    const { data, error } = await this.supabase.auth.getUser();
    if (error) {
      console.error('Error obteniendo usuario:', error);
      return null;
    }
    return data.user;
  }

  async getUserProfile() {
    const user = await this.getUser();
    if (!user) return null;
    return {
      id:        user.id,
      email:     user.email,
      nombre:    user.user_metadata?.['nombre']    || '',
      documento: user.user_metadata?.['documento'] || '',
      telefono:  user.user_metadata?.['telefono']  || '',
      rol:       user.user_metadata?.['rol']       || '',
    };
  }

  async isLoggedIn(): Promise<boolean> {
    const { data } = await this.supabase.auth.getSession();
    return !!data.session;
  }

  async getUserRole(): Promise<string> {
    const user = await this.getUser();
    return user?.user_metadata?.['rol'] || '';
  }

  async resetPassword(email: string) {
    const { error } = await this.supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'recoleccionapp://reset-password',
    });
    if (error) throw error;
  }

  async updatePassword(newPassword: string) {
    const { error } = await this.supabase.auth.updateUser({ password: newPassword });
    if (error) throw error;
    return true;
  }

  async handlePasswordRecoverySession() {
    const { data } = await this.supabase.auth.getSession();
    return !!data.session;
  }
}
