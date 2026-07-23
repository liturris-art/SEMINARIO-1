import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

export interface Preferencias {
  biometria:       boolean;
  notificaciones:  boolean;
  modoOscuro:      boolean;
  gpsAlta:         boolean;
  unidadDistancia: 'km' | 'mi';
  idioma:          'es' | 'en';
}

export const PREFS_KEY = 'appPreferencias';

export const PREFS_DEFAULT: Preferencias = {
  biometria:       false,
  notificaciones:  true,
  modoOscuro:      false,
  gpsAlta:         true,
  unidadDistancia: 'km',
  idioma:          'es',
};

const KM_A_MI = 0.621371;

// Fuente única de las preferencias guardadas en configuracion.page — el
// resto de la app (mapa, GPS del recorrido, unidades) lee de aquí en vez
// de duplicar la clave/los valores por defecto en cada página.
@Injectable({ providedIn: 'root' })
export class PreferenciasService {

  async obtener(): Promise<Preferencias> {
    const { value } = await Preferences.get({ key: PREFS_KEY });
    return value ? { ...PREFS_DEFAULT, ...JSON.parse(value) } : { ...PREFS_DEFAULT };
  }

  async guardar(prefs: Preferencias): Promise<void> {
    await Preferences.set({ key: PREFS_KEY, value: JSON.stringify(prefs) });
  }

  // Convierte una distancia en km a la unidad preferida por el usuario.
  convertirDistancia(km: number, unidad: 'km' | 'mi'): number {
    return unidad === 'mi' ? km * KM_A_MI : km;
  }
}
