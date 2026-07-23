import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {

  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseAnonKey,
      {
        auth: {
          persistSession:    true,
          autoRefreshToken:  true,
          // No hay flujo de OAuth por URL en una app Capacitor — dejar esto
          // en true (su default) hace que intente leer window.location al
          // iniciar, innecesario aquí y evitable.
          detectSessionInUrl: false,
        },
      },
    );
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }
}
