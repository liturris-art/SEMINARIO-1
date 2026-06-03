import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SupabaseService } from '../supabase.service';

export interface Recorrido {
  id:           string;
  ruta_id:      string;
  vehiculo_id:  string;
  perfil_id:    string;
  inicio:       string;
  fin?:         string;
  // Campos extra para historial y reportes
  nombre_ruta?: string;
  placa?:       string;
  distancia_km?: number;
  estado?:      string;
}

@Injectable({ providedIn: 'root' })
export class RecorridosService {

  private apiUrl   = environment.apiUrl;
  private perfilId = environment.perfilUrl;

  constructor(
    private http:     HttpClient,
    private supabase: SupabaseService,
  ) {}

  // ── 1. INICIAR RECORRIDO ──────────────────────────────────
  async iniciarRecorrido(rutaId: string, vehiculoId: string): Promise<Recorrido> {
    const rec = await firstValueFrom(
      this.http.post<Recorrido>(`${this.apiUrl}/recorridos/iniciar`, {
        ruta_id: rutaId, vehiculo_id: vehiculoId, perfil_id: this.perfilId,
      }),
    );

    try {
      const db = this.supabase.getClient();
      await db.from('recorridos_app').upsert({
        recorrido_id: rec.id,
        ruta_id:      rutaId,
        vehiculo_id:  vehiculoId,
        perfil_id:    this.perfilId,
        estado:       'activo',
        inicio_en:    new Date().toISOString(),
      });
    } catch (e) { console.warn('Supabase iniciar:', e); }

    return rec;
  }

  // ── 2. REGISTRAR POSICIÓN (doble persistencia) ────────────
  async registrarPosicion(
    recorridoId: string, lat: number, lon: number, foto?: string | null,
  ): Promise<void> {
    await firstValueFrom(
      this.http.post<void>(`${this.apiUrl}/recorridos/${recorridoId}/posiciones`,
        { lat, lon, perfil_id: this.perfilId }),
    );
    try {
      const db = this.supabase.getClient();
      await db.from('posiciones').insert({
        recorrido_id: recorridoId, perfil_id: this.perfilId,
        lat, lon, foto_base64: foto ?? null, creado_en: new Date().toISOString(),
      });
    } catch (e) { console.warn('Supabase posicion:', e); }
  }

  // ── 3. FINALIZAR RECORRIDO → guarda en historial ──────────
  // Recibe distancia, nombre de ruta y placa para que se refleje
  // en el historial y las estadísticas sin necesidad de una llamada extra.
  async finalizarRecorrido(
    recorridoId: string,
    distanciaKm: number   = 0,
    nombreRuta:  string   = '',
    placa:       string   = '',
  ): Promise<void> {
    const finEn = new Date().toISOString();
    try {
      const db = this.supabase.getClient();
      await db.from('recorridos_app')
        .update({
          estado:       'finalizado',
          fin_en:       finEn,
          distancia_km: parseFloat(distanciaKm.toFixed(2)),
          nombre_ruta:  nombreRuta,
          placa:        placa,
        })
        .eq('recorrido_id', recorridoId);
    } catch (e) { console.warn('Supabase finalizar:', e); }
  }

  // ── 4. REGISTRAR RUTA PROGRAMADA (al pulsar "Guardar ruta") ──
  // Crea un registro en recorridos_app con estado 'programada'
  // para que aparezca en el historial como ruta del día incluso
  // si el conductor aún no ha iniciado el recorrido.
  async registrarRutaProgramada(datos: {
    rutaId: string; nombreRuta: string;
    vehiculoId: string | null; placa: string | null;
    fechaRegistro: string; conductor: string;
  }): Promise<void> {
    try {
      const db = this.supabase.getClient();
      // Usar upsert con constraint en ruta_id + perfil_id + fecha para evitar duplicados
      await db.from('recorridos_programados').upsert({
        ruta_id:      datos.rutaId,
        nombre_ruta:  datos.nombreRuta,
        vehiculo_id:  datos.vehiculoId,
        placa:        datos.placa,
        perfil_id:    this.perfilId,
        conductor:    datos.conductor,
        fecha:        datos.fechaRegistro,
        estado:       'programada',
      }, { onConflict: 'ruta_id,perfil_id' });
    } catch (e) { console.warn('Supabase rutaProgramada:', e); }
  }

  // ── 5. OBTENER RECORRIDOS (API docente) ───────────────────
  getRecorridos() {
    return this.http.get<{ data: Recorrido[] }>(
      `${this.apiUrl}/recorridos?perfil_id=${this.perfilId}`,
    );
  }

  // ── 6. OBTENER RECORRIDOS LOCALES (Supabase) ──────────────
  // Combina recorridos_app (completados/activos) y recorridos_programados
  // para el historial y los reportes.
  async getRecorridosLocales(): Promise<Recorrido[]> {
    try {
      const db = this.supabase.getClient();

      // Recorridos completados/activos/suspendidos
      const { data: completados } = await db
        .from('recorridos_app')
        .select('*')
        .eq('perfil_id', this.perfilId)
        .order('inicio_en', { ascending: false });

      // Recorridos programados (guardados con botón "Guardar ruta")
      const { data: programados } = await db
        .from('recorridos_programados')
        .select('*')
        .eq('perfil_id', this.perfilId)
        .order('fecha', { ascending: false });

      const toRecorrido = (r: any): Recorrido => ({
        id:           r.recorrido_id || r.id,
        ruta_id:      r.ruta_id,
        vehiculo_id:  r.vehiculo_id,
        perfil_id:    r.perfil_id,
        inicio:       r.inicio_en || r.fecha,
        fin:          r.fin_en    || undefined,
        nombre_ruta:  r.nombre_ruta,
        placa:        r.placa,
        distancia_km: r.distancia_km,
        estado:       r.estado,
      });

      return [
        ...(completados || []).map(toRecorrido),
        ...(programados || []).map(toRecorrido),
      ];
    } catch (e) {
      console.warn('getRecorridosLocales:', e);
      return [];
    }
  }
}
