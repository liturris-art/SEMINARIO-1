import {
  Component, OnInit, OnDestroy, ViewChild,
  ChangeDetectorRef, DestroyRef, inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Preferences } from '@capacitor/preferences';

import { environment }         from '../../../environments/environment';
import { AuthService }         from '../../services/auth.service';
import { FaceRecognitionService } from '../../services/face-recognition.service';
import { RutasService }        from '../../services/rutas/rutas';
import { CallesService }       from '../../services/calles/calles';
import { RecorridosService }   from '../../services/recorridos/recorridos.service';
import { OfflineSqliteService } from '../../services/offline-sqlite.service';
import { MapViewComponent }    from '../../components/map-view/map-view.component';

export type Paso = 1 | 2 | 3 | 4;

const KEY_ACTIVO = 'recorridoActivoId';
const KEY_INICIO = 'recorridoInicioTimestamp';
const LIMITE_24H = 24 * 60 * 60 * 1000;
const CHECK_5MIN =  5 * 60 * 1000;

@Component({
  selector: 'app-home-conductor',
  templateUrl: './home-conductor.page.html',
  styleUrls:  ['./home-conductor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MapViewComponent],
})
export class HomeConductorPage implements OnInit, OnDestroy {

  @ViewChild(MapViewComponent) mapView!: MapViewComponent;

  // ── Perfil ────────────────────────────────────────────────
  nombreUsuario  = '';
  inicialUsuario = '?';

  // ── Datos del mapa ────────────────────────────────────────
  rutas:  any[] = [];
  calles: any[] = [];

  // ── Flujo de 4 pasos ──────────────────────────────────────
  vehiculos:            any[]  = [];
  vehiculoSeleccionado: any    = null;
  rutaSeleccionada:     any    = null;
  identidadValidada           = false;
  tracking                    = false;
  pasoActual: Paso            = 1;
  panelAbierto                = true;

  // ── Ruta guardada en mapa ─────────────────────────────────
  rutaGuardada  = false;
  guardandoRuta = false;

  // ── GPS ───────────────────────────────────────────────────
  lat = 0; lng = 0; velocidad = 0;
  watchId:           string | null = null;
  ultimaLat:         number | null = null;
  ultimaLng:         number | null = null;
  distanciaAcumulada = 0;
  distanciaTotal     = 0;
  recorridoActivoId: string | null = null;
  inicioRecorridoMs: number | null = null;

  // ── Caducidad y hito ─────────────────────────────────────
  private timerCaducidad: any = null;
  private hitoEnCurso        = false;

  // ── Listener online con referencia estable ────────────────
  private readonly _onOnline = () => this.sincronizarDatos();
  private destroyRef = inject(DestroyRef);

  constructor(
    private http:            HttpClient,
    private authService:     AuthService,
    private faceService:     FaceRecognitionService,
    private rutasService:    RutasService,
    private callesService:   CallesService,
    private recorridosService: RecorridosService,
    private offlineService:  OfflineSqliteService,
    private router:          Router,
    private toastCtrl:       ToastController,
    private alertCtrl:       AlertController,
    private cdr:             ChangeDetectorRef,
  ) {}

  async ngOnInit() {
    const perfil       = await this.authService.getUserProfile();
    this.nombreUsuario = perfil?.nombre || perfil?.email?.split('@')[0] || 'Conductor';
    this.inicialUsuario = this.nombreUsuario[0].toUpperCase();

    this.rutasService.getRutas().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(r => { this.rutas = r?.data || []; });
    this.callesService.getCalles().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(c => { this.calles = c?.data || []; });

    this.http.get<any>(`${environment.apiUrl}/vehiculos?perfil_id=${environment.perfilUrl}`)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({ next: r => (this.vehiculos = r?.data || r), error: () => {} });

    await this.verificarRecorridoGuardado();
    window.addEventListener('online', this._onOnline);
  }

  ngOnDestroy() {
    if (this.watchId) Geolocation.clearWatch({ id: this.watchId });
    if (this.timerCaducidad) clearInterval(this.timerCaducidad);
    window.removeEventListener('online', this._onOnline);
  }

  volver()      { this.router.navigateByUrl('/menu'); }
  togglePanel() { this.panelAbierto = !this.panelAbierto; }

  pasoCompletado(p: number) {
    if (p === 1) return !!this.vehiculoSeleccionado;
    if (p === 2) return !!this.rutaSeleccionada;
    if (p === 3) return this.identidadValidada;
    if (p === 4) return this.tracking;
    return false;
  }
  avanzarPaso() { if (this.pasoActual < 4) this.pasoActual = (this.pasoActual + 1) as Paso; }

  onVehiculoChange() { if (this.vehiculoSeleccionado && this.pasoActual === 1) this.avanzarPaso(); }
  onRutaChange()     { this.rutaGuardada = false; if (this.rutaSeleccionada && this.pasoActual === 2) this.avanzarPaso(); }

  // ── Guardar ruta en mapa + historial ─────────────────────
  async guardarRutaSeleccionada() {
    if (!this.rutaSeleccionada) { this.showToast('Selecciona una ruta primero', 'warning'); return; }
    this.guardandoRuta = true;
    try {
      const registro = {
        rutaId:        this.rutaSeleccionada.id,
        nombreRuta:    this.rutaSeleccionada.nombre_ruta,
        vehiculoId:    this.vehiculoSeleccionado?.id   || null,
        placa:         this.vehiculoSeleccionado?.placa || null,
        fechaRegistro: new Date().toISOString(),
        conductor:     this.nombreUsuario,
        estado:        'programada',
      };
      await Preferences.set({ key: 'rutaRegistrada', value: JSON.stringify(registro) });

      // Guardar también en Supabase para que aparezca en historial y reportes
      await this.recorridosService.registrarRutaProgramada(registro);

      this.mapView?.destacarRuta(this.rutaSeleccionada);
      this.rutaGuardada = true;
      this.showToast(`✅ Ruta "${this.rutaSeleccionada.nombre_ruta}" guardada`, 'success');
    } catch (e) {
      console.error(e);
      this.showToast('Error al guardar la ruta', 'danger');
    } finally {
      this.guardandoRuta = false;
    }
  }

  // ── Validar identidad facial ──────────────────────────────
  async validarIdentidad() {
    const tieneRef = await this.faceService.tieneDescriptorGuardado();
    if (!tieneRef) { this.showToast('⚠️ No hay foto de referencia. Vuelve a registrarte.', 'warning'); return; }
    try {
      this.showToast('📸 Toma la foto mirando de frente', 'warning');
      const foto = await Camera.getPhoto({
        quality: 85, resultType: CameraResultType.Base64,
        source: CameraSource.Camera, saveToGallery: false,
      });
      if (!foto.base64String) { this.showToast('No se pudo obtener la foto', 'danger'); return; }
      this.showToast('🔍 Verificando identidad...', 'warning');
      const resultado = await this.faceService.verificarIdentidad(foto.base64String);
      if (resultado.error) { this.showToast(`❌ ${resultado.error}`, 'danger'); return; }
      if (resultado.verificado) {
        this.identidadValidada = true; this.avanzarPaso();
        this.showToast(`✅ Identidad verificada (${resultado.confianza}%)`, 'success');
      } else {
        this.showToast(`❌ Rostro no reconocido (${resultado.confianza}%). Mejor iluminación.`, 'danger');
      }
    } catch { this.showToast('Verificación cancelada', 'warning'); }
  }

  // ── Iniciar recorrido ─────────────────────────────────────
  async iniciarRecorrido() {
    if (!this.vehiculoSeleccionado) return this.showToast('Seleccione un vehículo', 'warning');
    if (!this.rutaSeleccionada)     return this.showToast('Seleccione una ruta', 'warning');
    if (!this.identidadValidada)    return this.showToast('Valide su identidad', 'warning');
    try {
      const rec = await this.recorridosService.iniciarRecorrido(
        this.rutaSeleccionada?.id, this.vehiculoSeleccionado?.id,
      );
      this.recorridoActivoId = rec.id;
      this.inicioRecorridoMs = Date.now();
      this.tracking = true; this.pasoActual = 4; this.panelAbierto = false;
      this.distanciaTotal = 0; this.distanciaAcumulada = 0;
      this.ultimaLat = null; this.ultimaLng = null; this.hitoEnCurso = false;

      await Preferences.set({ key: KEY_ACTIVO, value: rec.id });
      await Preferences.set({ key: KEY_INICIO, value: Date.now().toString() });
      this._iniciarTimerCaducidad();

      const pos = await Geolocation.getCurrentPosition();
      this.lat = pos.coords.latitude; this.lng = pos.coords.longitude;

      await this.sincronizarDatos();

      this.watchId = await Geolocation.watchPosition({ enableHighAccuracy: true }, pos => {
        if (!pos) return;
        this.lat       = pos.coords.latitude;
        this.lng       = pos.coords.longitude;
        this.velocidad = Math.round((pos.coords.speed || 0) * 3.6);
        this.mapView?.actualizarCamion(this.lat, this.lng, this.velocidad);
        this.procesarDistancia();
        this.cdr.detectChanges();
      });

      this.showToast('🚛 Recorrido iniciado', 'success');
    } catch (e: any) {
      this.showToast(`❌ ${e?.error?.message || e?.message || 'Error al iniciar'}`, 'danger');
    }
  }

  // ── Detener recorrido → guarda en historial ───────────────
  async detenerRecorrido() {
    if (!this.tracking) return;
    try {
      if (this.recorridoActivoId) {
        await this.recorridosService.finalizarRecorrido(
          this.recorridoActivoId,
          this.distanciaTotal,
          this.rutaSeleccionada?.nombre_ruta,
          this.vehiculoSeleccionado?.placa,
        );
      }
    } catch (e) { console.warn('Error finalizando recorrido:', e); }

    this.tracking = false; this.recorridoActivoId = null;
    this.hitoEnCurso = false; this.inicioRecorridoMs = null;
    if (this.watchId) { Geolocation.clearWatch({ id: this.watchId }); this.watchId = null; }
    if (this.timerCaducidad) { clearInterval(this.timerCaducidad); this.timerCaducidad = null; }
    await Preferences.remove({ key: KEY_ACTIVO });
    await Preferences.remove({ key: KEY_INICIO });
    this.panelAbierto = true; this.pasoActual = 1;
    this.showToast('✅ Recorrido finalizado y guardado en historial', 'success');
  }

  // ── GPS ───────────────────────────────────────────────────
  procesarDistancia() {
    if (this.ultimaLat == null || this.ultimaLng == null) {
      this.ultimaLat = this.lat; this.ultimaLng = this.lng;
      this.enviarPosicion(this.lat, this.lng); return;
    }
    const d = this.calcHaversine(this.ultimaLat, this.ultimaLng, this.lat, this.lng);
    if (d >= 0.005) this.enviarPosicion(this.lat, this.lng);
    this.distanciaAcumulada += d; this.distanciaTotal += d;
    if (this.distanciaAcumulada >= 1 && !this.hitoEnCurso) {
      this.dispararHito(); this.distanciaAcumulada = 0;
    }
    this.ultimaLat = this.lat; this.ultimaLng = this.lng;
  }

  calcHaversine(la1: number, lo1: number, la2: number, lo2: number) {
    const R = 6371, dL = this.rad(la2 - la1), dO = this.rad(lo2 - lo1);
    const a = Math.sin(dL/2)**2 + Math.cos(this.rad(la1)) * Math.cos(this.rad(la2)) * Math.sin(dO/2)**2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  rad(v: number) { return v * Math.PI / 180; }

  async enviarPosicion(lat: number, lon: number, foto?: string | null) {
    if (!this.recorridoActivoId) return;
    if (navigator.onLine) {
      try { await this.recorridosService.registrarPosicion(this.recorridoActivoId, lat, lon, foto); }
      catch { await this.offlineService.guardar({ recorridoId: this.recorridoActivoId, lat, lon, foto: foto ?? null, timestamp: Date.now() }); }
    } else {
      await this.offlineService.guardar({ recorridoId: this.recorridoActivoId, lat, lon, foto: foto ?? null, timestamp: Date.now() });
    }
  }

  async sincronizarDatos() {
    if (!navigator.onLine) return;
    const pendientes = await this.offlineService.obtenerTodos();
    if (!pendientes.length) return;
    let ok = true;
    for (const item of pendientes) {
      try { await this.recorridosService.registrarPosicion(item.recorridoId, item.lat, item.lon, item.foto); }
      catch { ok = false; break; }
    }
    if (ok) await this.offlineService.limpiar();
  }

  // ── Hito fotográfico ──────────────────────────────────────
  async dispararHito() {
    if (this.hitoEnCurso) return;
    this.hitoEnCurso = true;
    const alert = await this.alertCtrl.create({
      header:  '📍 Hito de control — 1 km',
      message: '¿Deseas capturar una fotografía de evidencia?',
      buttons: [
        { text: 'Omitir', role: 'cancel', handler: () => { this.enviarPosicion(this.lat, this.lng, null); this.hitoEnCurso = false; } },
        { text: '📸 Foto', handler: async () => {
          try {
            const img = await Camera.getPhoto({ quality: 50, resultType: CameraResultType.Base64, source: CameraSource.Camera, saveToGallery: false });
            if (img.base64String) { await this.enviarPosicion(this.lat, this.lng, img.base64String); this.showToast('✅ Foto registrada', 'success'); }
            else { await this.enviarPosicion(this.lat, this.lng, null); }
          } catch { await this.enviarPosicion(this.lat, this.lng, null); }
          this.hitoEnCurso = false;
        }},
      ],
    });
    await alert.present();
  }

  // ── Caducidad 24 h ────────────────────────────────────────
  private _iniciarTimerCaducidad() {
    if (this.timerCaducidad) clearInterval(this.timerCaducidad);
    this.timerCaducidad = setInterval(async () => {
      if (!this.inicioRecorridoMs || !this.tracking) return;
      if (Date.now() - this.inicioRecorridoMs >= LIMITE_24H) {
        clearInterval(this.timerCaducidad); this.timerCaducidad = null;
        await this.detenerRecorrido();
        const a = await this.alertCtrl.create({
          header: '⏰ Recorrido suspendido',
          message: 'El recorrido superó 24 h y fue guardado automáticamente.',
          buttons: [{ text: 'Entendido' }],
        });
        await a.present();
      }
    }, CHECK_5MIN);
  }

  // ── Verificar recorrido activo al volver a la app ─────────
  private async verificarRecorridoGuardado() {
    const { value: id }    = await Preferences.get({ key: KEY_ACTIVO });
    if (!id) return;
    const { value: tsStr } = await Preferences.get({ key: KEY_INICIO });
    const inicioMs         = tsStr ? parseInt(tsStr, 10) : 0;
    if (!inicioMs || Date.now() - inicioMs >= LIMITE_24H) {
      await Preferences.remove({ key: KEY_ACTIVO });
      await Preferences.remove({ key: KEY_INICIO });
      this.showToast('Recorrido anterior suspendido por superar 24 h.', 'warning');
      return;
    }
    const mins = Math.floor((LIMITE_24H - (Date.now() - inicioMs)) / 60000);
    const alert = await this.alertCtrl.create({
      header:  'Recorrido en curso',
      message: `Tienes un recorrido activo con ${mins} min restantes. ¿Retomar?`,
      buttons: [
        { text: 'Descartar', role: 'cancel', handler: async () => {
          await Preferences.remove({ key: KEY_ACTIVO });
          await Preferences.remove({ key: KEY_INICIO });
        }},
        { text: 'Retomar', handler: () => {
          this.recorridoActivoId = id; this.inicioRecorridoMs = inicioMs;
          this.tracking = true; this.pasoActual = 4; this.panelAbierto = false;
          this._iniciarTimerCaducidad();
          Geolocation.watchPosition({ enableHighAccuracy: true }, pos => {
            if (!pos) return;
            this.lat = pos.coords.latitude; this.lng = pos.coords.longitude;
            this.velocidad = Math.round((pos.coords.speed || 0) * 3.6);
            this.mapView?.actualizarCamion(this.lat, this.lng, this.velocidad);
            this.procesarDistancia(); this.cdr.detectChanges();
          }).then(id => { this.watchId = id; });
        }},
      ],
    });
    await alert.present();
  }

  private async showToast(msg: string, color: 'success' | 'warning' | 'danger') {
    const t = await this.toastCtrl.create({ message: msg, color, duration: 3000, position: 'top' });
    await t.present();
  }

  get latStr()  { return this.lat  ? this.lat.toFixed(6)  : '—'; }
  get lngStr()  { return this.lng  ? this.lng.toFixed(6)  : '—'; }
  get distStr() { return this.distanciaTotal.toFixed(2); }
}
