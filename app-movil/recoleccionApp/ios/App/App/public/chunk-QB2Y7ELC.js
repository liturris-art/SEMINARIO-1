import {
  HttpClient,
  Injectable,
  SupabaseService,
  environment,
  firstValueFrom,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-L4S7MW2T.js";
import {
  __async
} from "./chunk-Q3N56TRI.js";

// src/app/services/recorridos/recorridos.service.ts
var _RecorridosService = class _RecorridosService {
  constructor(http, supabase) {
    this.http = http;
    this.supabase = supabase;
    this.apiUrl = environment.apiUrl;
    this.perfilId = environment.perfilUrl;
  }
  // ── 1. INICIAR RECORRIDO ──────────────────────────────────
  iniciarRecorrido(rutaId, vehiculoId) {
    return __async(this, null, function* () {
      const rec = yield firstValueFrom(this.http.post(`${this.apiUrl}/recorridos/iniciar`, {
        ruta_id: rutaId,
        vehiculo_id: vehiculoId,
        perfil_id: this.perfilId
      }));
      try {
        const db = this.supabase.getClient();
        yield db.from("recorridos_app").upsert({
          recorrido_id: rec.id,
          ruta_id: rutaId,
          vehiculo_id: vehiculoId,
          perfil_id: this.perfilId,
          estado: "activo",
          inicio_en: (/* @__PURE__ */ new Date()).toISOString()
        });
      } catch (e) {
        console.warn("Supabase iniciar:", e);
      }
      return rec;
    });
  }
  // ── 2. REGISTRAR POSICIÓN (doble persistencia) ────────────
  registrarPosicion(recorridoId, lat, lon, foto) {
    return __async(this, null, function* () {
      yield firstValueFrom(this.http.post(`${this.apiUrl}/recorridos/${recorridoId}/posiciones`, { lat, lon, perfil_id: this.perfilId }));
      try {
        const db = this.supabase.getClient();
        yield db.from("posiciones").insert({
          recorrido_id: recorridoId,
          perfil_id: this.perfilId,
          lat,
          lon,
          foto_base64: foto ?? null,
          creado_en: (/* @__PURE__ */ new Date()).toISOString()
        });
      } catch (e) {
        console.warn("Supabase posicion:", e);
      }
    });
  }
  // ── 3. FINALIZAR RECORRIDO → guarda en historial ──────────
  // Recibe distancia, nombre de ruta y placa para que se refleje
  // en el historial y las estadísticas sin necesidad de una llamada extra.
  // `estado` permite distinguir un cierre normal de uno forzado por la
  // regla de caducidad de 24 h ('suspendido'), para que historial y
  // reportes no traten un recorrido "fantasma" como uno completado.
  finalizarRecorrido(recorridoId, distanciaKm = 0, nombreRuta, placa, estado = "finalizado") {
    return __async(this, null, function* () {
      const finEn = (/* @__PURE__ */ new Date()).toISOString();
      const cambios = {
        estado,
        fin_en: finEn,
        distancia_km: parseFloat(distanciaKm.toFixed(2))
      };
      if (nombreRuta)
        cambios["nombre_ruta"] = nombreRuta;
      if (placa)
        cambios["placa"] = placa;
      try {
        const db = this.supabase.getClient();
        yield db.from("recorridos_app").update(cambios).eq("recorrido_id", recorridoId);
      } catch (e) {
        console.warn("Supabase finalizar:", e);
      }
    });
  }
  // ── 4. REGISTRAR RUTA PROGRAMADA (al pulsar "Guardar ruta") ──
  // Crea un registro en recorridos_app con estado 'programada'
  // para que aparezca en el historial como ruta del día incluso
  // si el conductor aún no ha iniciado el recorrido.
  registrarRutaProgramada(datos) {
    return __async(this, null, function* () {
      try {
        const db = this.supabase.getClient();
        yield db.from("recorridos_programados").upsert({
          ruta_id: datos.rutaId,
          nombre_ruta: datos.nombreRuta,
          vehiculo_id: datos.vehiculoId,
          placa: datos.placa,
          perfil_id: this.perfilId,
          conductor: datos.conductor,
          fecha: datos.fechaRegistro,
          estado: "programada"
        }, { onConflict: "ruta_id,perfil_id" });
      } catch (e) {
        console.warn("Supabase rutaProgramada:", e);
      }
    });
  }
  // ── 5. OBTENER RECORRIDOS (API docente) ───────────────────
  getRecorridos() {
    return this.http.get(`${this.apiUrl}/recorridos?perfil_id=${this.perfilId}`);
  }
  // ── 6. OBTENER RECORRIDOS LOCALES (Supabase) ──────────────
  // Combina recorridos_app (completados/activos) y recorridos_programados
  // para el historial y los reportes.
  getRecorridosLocales() {
    return __async(this, null, function* () {
      try {
        const db = this.supabase.getClient();
        const { data: completados } = yield db.from("recorridos_app").select("*").eq("perfil_id", this.perfilId).order("inicio_en", { ascending: false });
        const { data: programados } = yield db.from("recorridos_programados").select("*").eq("perfil_id", this.perfilId).order("fecha", { ascending: false });
        const toRecorrido = (r) => ({
          id: r.recorrido_id || r.id,
          ruta_id: r.ruta_id,
          vehiculo_id: r.vehiculo_id,
          perfil_id: r.perfil_id,
          inicio: r.inicio_en || r.fecha,
          fin: r.fin_en || void 0,
          nombre_ruta: r.nombre_ruta,
          placa: r.placa,
          distancia_km: r.distancia_km,
          estado: r.estado
        });
        return [
          ...(completados || []).map(toRecorrido),
          ...(programados || []).map(toRecorrido)
        ];
      } catch (e) {
        console.warn("getRecorridosLocales:", e);
        return [];
      }
    });
  }
};
_RecorridosService.\u0275fac = function RecorridosService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecorridosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(SupabaseService));
};
_RecorridosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecorridosService, factory: _RecorridosService.\u0275fac, providedIn: "root" });
var RecorridosService = _RecorridosService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecorridosService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: SupabaseService }], null);
})();

export {
  RecorridosService
};
//# sourceMappingURL=chunk-QB2Y7ELC.js.map
