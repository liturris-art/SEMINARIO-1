import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
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

  // perfil_id identifica el proyecto/instalación completa ante la API del
  // docente (es el MISMO valor para todos los conductores) — no sirve para
  // separar los datos de un conductor de los de otro dentro de la app.
  // usuario_id (el id de Supabase Auth del conductor logueado) es lo que
  // realmente aísla "mis recorridos" de los de los demás.
  // getSession() (local, casi instantánea) en vez de getUser() (siempre
  // hace una llamada de red) — este método se llama en cada inicio de
  // recorrido, cada posición GPS y cada carga de historial, así que usar
  // getUser() aquí multiplicaba llamadas de red innecesarias.
  private async usuarioIdActual(): Promise<string | null> {
    const { data } = await this.supabase.getClient().auth.getSession();
    return data.session?.user?.id ?? null;
  }

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
        usuario_id:   await this.usuarioIdActual(),
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
    const pos = await firstValueFrom(
      this.http.post<{ id: string }>(`${this.apiUrl}/recorridos/${recorridoId}/posiciones`,
        { lat, lon, perfil_id: this.perfilId }),
    );

    // Foto del hito fotográfico → subirla al API del docente asociada a
    // esta posición (POST /recorridos/posiciones/{posicion_id}/imagen,
    // confirmado contra /docs). Antes la foto solo se guardaba en
    // Supabase (nuestra copia local) y nunca llegaba al backend real
    // que el profesor revisa.
    if (foto && pos?.id) {
      try {
        await firstValueFrom(
          this.http.post(`${this.apiUrl}/recorridos/posiciones/${pos.id}/imagen`,
            { imagen_base64: foto }),
        );
      } catch (e) { console.warn('API subir imagen del hito:', e); }
    }

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
  // `estado` permite distinguir un cierre normal de uno forzado por la
  // regla de caducidad de 24 h ('suspendido'), para que historial y
  // reportes no traten un recorrido "fantasma" como uno completado.
  async finalizarRecorrido(
    recorridoId: string,
    distanciaKm: number   = 0,
    nombreRuta?: string,
    placa?:      string,
    estado:      'finalizado' | 'suspendido' = 'finalizado',
  ): Promise<void> {
    const finEn = new Date().toISOString();

    // Cerrar el recorrido en el API del docente — sin esta llamada, el
    // recorrido queda "activo" para siempre del lado del backend, y el
    // próximo POST /recorridos/iniciar para el mismo vehículo lo rechaza
    // con 409 Conflict (esto solo actualizaba Supabase antes, que es
    // nuestra copia local para historial/reportes, no la fuente de
    // verdad que valida "¿hay un recorrido activo?").
    // Body exacto según /docs (OpenAPI): { perfil_id } — el API no admite
    // ni requiere distancia_km, solo Supabase la guarda.
    try {
      await firstValueFrom(
        this.http.post<void>(
          `${this.apiUrl}/recorridos/${recorridoId}/finalizar`,
          { perfil_id: this.perfilId },
        ),
      );
    } catch (e) { console.warn('API finalizar recorrido:', e); }

    // Solo incluir nombre_ruta/placa si vienen informados: cuando se
    // suspende un recorrido detectado al reabrir la app (sin que el
    // conductor haya vuelto a pasar por el flujo de selección), no hay
    // que sobrescribir esos campos con vacío.
    const cambios: Record<string, unknown> = {
      estado,
      fin_en:       finEn,
      distancia_km: parseFloat(distanciaKm.toFixed(2)),
    };
    if (nombreRuta) cambios['nombre_ruta'] = nombreRuta;
    if (placa)      cambios['placa']       = placa;

    try {
      const db = this.supabase.getClient();
      await db.from('recorridos_app').update(cambios).eq('recorrido_id', recorridoId);
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
      // onConflict incluye usuario_id: sin eso, dos conductores programando
      // la misma ruta se pisaban el registro guardado el uno al otro.
      await db.from('recorridos_programados').upsert({
        ruta_id:      datos.rutaId,
        nombre_ruta:  datos.nombreRuta,
        vehiculo_id:  datos.vehiculoId,
        placa:        datos.placa,
        perfil_id:    this.perfilId,
        usuario_id:   await this.usuarioIdActual(),
        conductor:    datos.conductor,
        fecha:        datos.fechaRegistro,
        estado:       'programada',
      }, { onConflict: 'ruta_id,perfil_id,usuario_id' });
    } catch (e) { console.warn('Supabase rutaProgramada:', e); }
  }

  // ── 5. OBTENER RECORRIDOS (API docente) ───────────────────
  // GET /api/recorridos (sin más) no existe en el API — el endpoint real,
  // confirmado contra el Swagger (/docs), es /api/misrecorridos. La ruta
  // vieja daba 404 siempre, y quedaba oculto porque cada llamador cae a
  // getRecorridosLocales() (Supabase) en el catch.
  // El API devuelve los campos con otros nombres (ts_inicio/ts_fin en vez
  // de inicio/fin) — sin este mapeo, historial/reportes mostraban
  // "Sin fecha" para cualquier dato que llegara por este respaldo.
  getRecorridos() {
    return this.http.get<{ data: any[] }>(
      `${this.apiUrl}/misrecorridos?perfil_id=${this.perfilId}`,
    ).pipe(
      map(res => ({
        data: (res?.data || []).map((r: any): Recorrido => ({
          id:          r.id,
          ruta_id:     r.ruta_id,
          vehiculo_id: r.vehiculo_id,
          perfil_id:   r.perfil_id,
          inicio:      r.ts_inicio || r.inicio,
          fin:         r.ts_fin    || r.fin || undefined,
          estado:      r.ts_fin ? 'finalizado' : 'activo',
        })),
      })),
    );
  }

  // ── 5b. ÚLTIMA POSICIÓN CONOCIDA DE UN RECORRIDO ──────────
  // Usada por el ciudadano para ubicar el camión en el mapa y calcular
  // distancia/ETA reales, en vez de datos inventados.
  async obtenerUltimaPosicion(recorridoId: string): Promise<{ lat: number; lon: number } | null> {
    try {
      const db = this.supabase.getClient();
      const { data, error } = await db
        .from('posiciones')
        .select('lat, lon, creado_en')
        .eq('recorrido_id', recorridoId)
        .order('creado_en', { ascending: false })
        .limit(1)
        .maybeSingle();
      if (error || !data) return null;
      return { lat: data['lat'], lon: data['lon'] };
    } catch (e) {
      console.warn('obtenerUltimaPosicion:', e);
      return null;
    }
  }

  // ── 6. OBTENER RECORRIDOS LOCALES (Supabase) ──────────────
  // Combina recorridos_app (completados/activos) y recorridos_programados
  // para el historial y los reportes.
  async getRecorridosLocales(): Promise<Recorrido[]> {
    try {
      const db = this.supabase.getClient();
      const usuarioId = await this.usuarioIdActual();

      // Recorridos completados/activos/suspendidos — filtrado también por
      // usuario_id: perfil_id solo no basta, es compartido por todos los
      // conductores de esta instalación (ver comentario en usuarioIdActual).
      let queryCompletados = db.from('recorridos_app').select('*').eq('perfil_id', this.perfilId);
      if (usuarioId) queryCompletados = queryCompletados.eq('usuario_id', usuarioId);
      const { data: completados } = await queryCompletados.order('inicio_en', { ascending: false });

      // Recorridos programados (guardados con botón "Guardar ruta")
      let queryProgramados = db.from('recorridos_programados').select('*').eq('perfil_id', this.perfilId);
      if (usuarioId) queryProgramados = queryProgramados.eq('usuario_id', usuarioId);
      const { data: programados } = await queryProgramados.order('fecha', { ascending: false });

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
