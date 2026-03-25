// Interfaces tipadas para mejorar la seguridad y evitar uso de 'any'

export interface UserMetadata {
  rol: 'conductor' | 'ciudadano';
  [key: string]: any; // Para otros campos que pueda agregar Supabase
}

export interface AppUser {
  id: string;
  email: string;
  user_metadata: UserMetadata;
  created_at: string;
  updated_at?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface BiometricCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  user: AppUser;
  session: any; // Supabase session object
  error?: any;
}

export interface RouteData {
  id: number;
  nombre_ruta: string;
  color_hex: string;
  coordenadas?: Array<{ lat: number; lng: number }>;
  activo: boolean;
}

export interface StreetData {
  id: number;
  nombre_calle: string;
  zona?: string;
  lat?: number;
  lng?: number;
}
