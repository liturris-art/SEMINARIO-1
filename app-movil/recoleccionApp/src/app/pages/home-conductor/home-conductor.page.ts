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
import { NotificacionesService } from '../../services/notificaciones.service';
import { PreferenciasService } from '../../services/preferencias.service';
import { MapViewComponent }    from '../../components/map-view/map-view.component';
import { FaceScanComponent }   from '../../components/face-scan/face-scan.component';

export type Paso = 1 | 2 | 3 | 4;

const KEY_ACTIVO = 'recorridoActivoId';
const KEY_INICIO = 'recorridoInicioTimestamp';
// Caducidad del recorrido: en producción sería 24h, pero se bajó a 5 min
// para poder demostrar la suspensión automática en la sustentación sin
// tener que esperar un día completo.
const LIMITE_CADUCIDAD = 5 * 60 * 1000;
const CHECK_CADUCIDAD  = 15 * 1000;
// Distancia del hito fotográfico: en producción sería 1 km, pero se bajó
// a 100 m para poder demostrarlo en la sustentación sin tener que
// recorrer un kilómetro completo.
const DISTANCIA_HITO_KM = 0.1;

@Component({
  selector: 'app-home-conductor',
  templateUrl: './home-conductor.page.html',
  styleUrls:  ['./home-conductor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MapViewComponent, FaceScanComponent],
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

  // ── Preferencias (Configuración) ──────────────────────────
  gpsAlta         = true;
  unidadDistancia: 'km' | 'mi' = 'km';

  // ── Caducidad y hito ─────────────────────────────────────
  private timerCaducidad: any = null;
  private hitoEnCurso        = false;

  // ── Listener online con referencia estable ────────────────
  private readonly _onOnline = () => this.sincronizarDatos();
  private destroyRef = inject(DestroyRef);
  private destruido = false;

  constructor(
    private http:            HttpClient,
    private authService:     AuthService,
    private faceService:     FaceRecognitionService,
    private rutasService:    RutasService,
    private callesService:   CallesService,
    private recorridosService: RecorridosService,
    private offlineService:  OfflineSqliteService,
    private notificaciones:  NotificacionesService,
    private prefsService:    PreferenciasService,
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

    const prefs = await this.prefsService.obtener();
    this.gpsAlta = prefs.gpsAlta;
    this.unidadDistancia = prefs.unidadDistancia;

    await this.verificarRecorridoGuardado();
    window.addEventListener('online', this._onOnline);
  }

  ngOnDestroy() {
    this.destruido = true;
    if (this.watchId) Geolocation.clearWatch({ id: this.watchId });
    if (this.timerCaducidad) clearInterval(this.timerCaducidad);
    window.removeEventListener('online', this._onOnline);
    window.removeEventListener('mousemove', this._onHudMouseMove);
    window.removeEventListener('mouseup', this._onHudMouseUp);
  }

  // Refuerza el recálculo de tamaño del mapa una vez termina la
  // transición de entrada de la página (ver comentario en
  // MapViewComponent.invalidateSize) — la misma causa del mapa "gris"
  // aplica aquí, y este flujo además vuelve del plugin nativo Camera
  // (verificación facial, hito fotográfico) que puede dejar el WebView
  // necesitando un repintado.
  ionViewDidEnter() { this.mapView?.invalidateSize(); }

  volver()      { this.router.navigateByUrl('/menu'); }
  togglePanel() { this.panelAbierto = !this.panelAbierto; }

  // ── Arrastrar el HUD de GPS ─────────────────────────────────
  // Antes quedaba fijo abajo-izquierda y podía tapar controles del mapa
  // en pantallas chicas — se deja que el conductor lo mueva a donde quiera.
  hudPos: { x: number; y: number } | null = null;
  hudArrastrando = false;
  private hudInicio = { x: 0, y: 0, hudX: 0, hudY: 0 };
  private readonly _onHudMouseMove = (e: MouseEvent) => this.moverHud(e);
  private readonly _onHudMouseUp   = () => this.soltarHud();

  private puntoEvento(e: TouchEvent | MouseEvent): { x: number; y: number } {
    if ('touches' in e && e.touches.length)        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    if ('changedTouches' in e && e.changedTouches.length) return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    const me = e as MouseEvent;
    return { x: me.clientX, y: me.clientY };
  }

  agarrarHud(e: TouchEvent | MouseEvent, el: HTMLElement) {
    this.hudArrastrando = true;
    const p    = this.puntoEvento(e);
    const rect = el.getBoundingClientRect();
    this.hudInicio = { x: p.x, y: p.y, hudX: this.hudPos?.x ?? rect.left, hudY: this.hudPos?.y ?? rect.top };
    if (!('touches' in e)) {
      window.addEventListener('mousemove', this._onHudMouseMove);
      window.addEventListener('mouseup', this._onHudMouseUp);
    }
  }

  moverHud(e: TouchEvent | MouseEvent) {
    if (!this.hudArrastrando) return;
    e.preventDefault();
    const p  = this.puntoEvento(e);
    const dx = p.x - this.hudInicio.x;
    const dy = p.y - this.hudInicio.y;

    // No dejar que se salga de la pantalla.
    const margen = 8;
    const maxX = window.innerWidth  - margen - 60;
    const maxY = window.innerHeight - margen - 40;
    const x = Math.max(margen, Math.min(this.hudInicio.hudX + dx, maxX));
    const y = Math.max(margen, Math.min(this.hudInicio.hudY + dy, maxY));
    this.hudPos = { x, y };
  }

  soltarHud() {
    this.hudArrastrando = false;
    window.removeEventListener('mousemove', this._onHudMouseMove);
    window.removeEventListener('mouseup', this._onHudMouseUp);
  }

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
  // Antes usaba Camera.getPhoto() (cámara nativa del sistema, sin forma de
  // guiar el encuadre). FaceScanComponent muestra la cámara en vivo dentro
  // de la app y ya entrega los landmarks extraídos junto con la foto.
  mostrarScanIdentidad = false;

  async validarIdentidad() {
    const tieneRef = await this.faceService.tieneDescriptorGuardado();
    if (!tieneRef) { this.showToast('⚠️ No hay foto de referencia. Vuelve a registrarte.', 'warning'); return; }
    this.mostrarScanIdentidad = true;
  }

  cancelarScanIdentidad() { this.mostrarScanIdentidad = false; }

  async onIdentidadCapturada(resultado: { base64: string; landmarks: number[] }) {
    this.mostrarScanIdentidad = false;
    const verificacion = await this.faceService.verificarIdentidadConLandmarks(resultado.landmarks);
    if (verificacion.error) { this.showToast(`❌ ${verificacion.error}`, 'danger'); return; }
    if (verificacion.verificado) {
      this.identidadValidada = true; this.avanzarPaso();
      this.showToast(`✅ Identidad verificada (${verificacion.confianza}%)`, 'success');
    } else {
      this.showToast(`❌ Rostro no reconocido (${verificacion.confianza}%). Intenta de nuevo.`, 'danger');
    }
  }

  // ── Iniciar recorrido ─────────────────────────────────────
  iniciandoRecorrido = false;
  confirmandoInicio  = false;

  // No se usa AlertController/ion-alert: es otro componente de Ionic con
  // shadow DOM y, dado el mismo problema ya visto con ion-toggle/ion-select
  // /ion-loading en este WebView, se prefiere un overlay propio en HTML/CSS
  // que sabemos que sí funciona en el dispositivo.
  confirmarIniciarRecorrido() {
    if (!this.vehiculoSeleccionado) { this.showToast('Seleccione un vehículo', 'warning'); return; }
    if (!this.rutaSeleccionada)     { this.showToast('Seleccione una ruta', 'warning');     return; }
    if (!this.identidadValidada)    { this.showToast('Valide su identidad', 'warning');     return; }
    this.confirmandoInicio = true;
  }

  cancelarInicio() { this.confirmandoInicio = false; }

  async aceptarIniciarRecorrido() {
    this.confirmandoInicio = false;
    // Evita doble envío si el usuario toca el botón varias veces mientras
    // la primera llamada sigue en curso (esto disparaba un 409 Conflict
    // en el backend: el segundo POST /recorridos/iniciar llegaba cuando
    // el primero ya había dejado el vehículo con un recorrido activo).
    if (this.iniciandoRecorrido) return;
    this.iniciandoRecorrido = true;

    try {
      await this._iniciarRecorridoInterno();
    } finally {
      this.iniciandoRecorrido = false;
    }
  }

  private async _iniciarRecorridoInterno() {
    // Confirmar GPS ANTES de comprometer cualquier estado local o del
    // backend — si el GPS está apagado o el permiso fue denegado, no
    // queremos dejar un recorrido "activo" a medias.
    let pos;
    try {
      pos = await Geolocation.getCurrentPosition({ enableHighAccuracy: this.gpsAlta });
    } catch {
      this.showToast('❌ No se pudo obtener la ubicación. Verifica que el GPS esté activado.', 'danger');
      return;
    }

    let rec;
    try {
      rec = await this.recorridosService.iniciarRecorrido(
        this.rutaSeleccionada?.id, this.vehiculoSeleccionado?.id,
      );
    } catch (e: any) {
      this.showToast(`❌ ${e?.error?.message || e?.message || 'Error al iniciar'}`, 'danger');
      return;
    }

    this.recorridoActivoId = rec.id;
    this.inicioRecorridoMs = Date.now();
    this.tracking = true; this.pasoActual = 4; this.panelAbierto = false;
    this.distanciaTotal = 0; this.distanciaAcumulada = 0;
    this.ultimaLat = null; this.ultimaLng = null; this.hitoEnCurso = false;
    this.lat = pos.coords.latitude; this.lng = pos.coords.longitude;

    try {
      await Preferences.set({ key: KEY_ACTIVO, value: rec.id });
      await Preferences.set({ key: KEY_INICIO, value: Date.now().toString() });
      this._iniciarTimerCaducidad();

      await this.sincronizarDatos();

      const watchId = await Geolocation.watchPosition({ enableHighAccuracy: this.gpsAlta }, pos => {
        if (!pos) return;
        this.lat       = pos.coords.latitude;
        this.lng       = pos.coords.longitude;
        this.velocidad = Math.round((pos.coords.speed || 0) * 3.6);
        this.mapView?.actualizarCamion(this.lat, this.lng, this.velocidad);
        this.procesarDistancia();
        this.cdr.detectChanges();
      });

      // Si el componente se destruyó mientras watchPosition resolvía,
      // no adoptar el watcher: hay que limpiarlo de inmediato.
      if (this.destruido) { Geolocation.clearWatch({ id: watchId }); return; }
      this.watchId = watchId;

      this.showToast('🚛 Recorrido iniciado', 'success');
      this.notificaciones.notificar('Recorrido iniciado', `Ruta ${this.rutaSeleccionada?.nombre_ruta || ''} en curso`);
    } catch (e: any) {
      // El recorrido ya quedó abierto en el backend: revertirlo por
      // completo en vez de dejar el estado local a medias.
      await this._revertirInicioFallido();
      this.showToast(`❌ ${e?.error?.message || e?.message || 'No se pudo iniciar el seguimiento GPS'}`, 'danger');
    }
  }

  private async _revertirInicioFallido() {
    try {
      if (this.recorridoActivoId) {
        await this.recorridosService.finalizarRecorrido(
          this.recorridoActivoId, 0,
          this.rutaSeleccionada?.nombre_ruta, this.vehiculoSeleccionado?.placa,
        );
      }
    } catch (e) { console.warn('Error revirtiendo recorrido:', e); }
    await this._resetEstadoTracking();
  }

  private async _resetEstadoTracking() {
    this.tracking = false; this.recorridoActivoId = null;
    this.hitoEnCurso = false; this.inicioRecorridoMs = null;
    if (this.watchId) { Geolocation.clearWatch({ id: this.watchId }); this.watchId = null; }
    if (this.timerCaducidad) { clearInterval(this.timerCaducidad); this.timerCaducidad = null; }
    await Preferences.remove({ key: KEY_ACTIVO });
    await Preferences.remove({ key: KEY_INICIO });
    this.panelAbierto = true; this.pasoActual = 1;
  }

  // ── Detener recorrido → guarda en historial ───────────────
  confirmandoDetener = false;

  confirmarDetenerRecorrido() {
    if (!this.tracking) return;
    this.confirmandoDetener = true;
  }

  cancelarDetener() { this.confirmandoDetener = false; }

  async aceptarDetenerRecorrido() {
    this.confirmandoDetener = false;
    await this.detenerRecorrido();
  }

  // estado='suspendido' lo usa el timer de caducidad (ver
  // _iniciarTimerCaducidad) para que el recorrido quede marcado como
  // inválido en vez de "finalizado" normalmente.
  async detenerRecorrido(estado: 'finalizado' | 'suspendido' = 'finalizado') {
    if (!this.tracking) return;
    try {
      if (this.recorridoActivoId) {
        await this.recorridosService.finalizarRecorrido(
          this.recorridoActivoId,
          this.distanciaTotal,
          this.rutaSeleccionada?.nombre_ruta,
          this.vehiculoSeleccionado?.placa,
          estado,
        );
      }
    } catch (e) { console.warn('Error finalizando recorrido:', e); }

    await this._resetEstadoTracking();
    // A diferencia de _revertirInicioFallido() (donde conviene mantener la
    // selección para reintentar rápido tras un fallo de GPS), un recorrido
    // que sí terminó debe dejar todo limpio para preparar el siguiente —
    // antes el vehículo/ruta/identidad de la vez anterior se quedaban ahí.
    this.vehiculoSeleccionado = null;
    this.rutaSeleccionada     = null;
    this.identidadValidada    = false;
    this.rutaGuardada         = false;
    this.distanciaTotal       = 0;
    this.distanciaAcumulada   = 0;

    if (estado === 'suspendido') {
      this.showToast('⏰ Recorrido suspendido por superar el tiempo límite', 'warning');
      this.notificaciones.notificar('Recorrido suspendido', 'Se suspendió automáticamente por superar el tiempo límite');
    } else {
      this.showToast('✅ Recorrido finalizado y guardado en historial', 'success');
      this.notificaciones.notificar('Recorrido finalizado', `${this.distStr} ${this.unidadDistancia} recorridos — guardado en historial`);
    }
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
    if (this.distanciaAcumulada >= DISTANCIA_HITO_KM && !this.hitoEnCurso) {
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
      header:  `📍 Hito de control — ${DISTANCIA_HITO_KM * 1000} m`,
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

  // ── Caducidad del recorrido ────────────────────────────────
  private _iniciarTimerCaducidad() {
    if (this.timerCaducidad) clearInterval(this.timerCaducidad);
    this.timerCaducidad = setInterval(async () => {
      if (!this.inicioRecorridoMs || !this.tracking) return;
      if (Date.now() - this.inicioRecorridoMs >= LIMITE_CADUCIDAD) {
        clearInterval(this.timerCaducidad); this.timerCaducidad = null;
        await this.detenerRecorrido('suspendido');
        const a = await this.alertCtrl.create({
          header: '⏰ Recorrido suspendido',
          message: 'El recorrido superó el tiempo límite y fue guardado automáticamente.',
          buttons: [{ text: 'Entendido' }],
        });
        await a.present();
      }
    }, CHECK_CADUCIDAD);
  }

  // ── Verificar recorrido activo al volver a la app ─────────
  private async verificarRecorridoGuardado() {
    const { value: id }    = await Preferences.get({ key: KEY_ACTIVO });
    if (!id) return;
    const { value: tsStr } = await Preferences.get({ key: KEY_INICIO });
    const inicioMs         = tsStr ? parseInt(tsStr, 10) : 0;
    if (!inicioMs || Date.now() - inicioMs >= LIMITE_CADUCIDAD) {
      // Antes solo se limpiaba localmente: el recorrido quedaba
      // "activo" para siempre en el backend (recorrido fantasma).
      // Hay que marcarlo como suspendido allá también.
      try {
        await this.recorridosService.finalizarRecorrido(id, 0, undefined, undefined, 'suspendido');
      } catch (e) { console.warn('Error suspendiendo recorrido vencido:', e); }
      await Preferences.remove({ key: KEY_ACTIVO });
      await Preferences.remove({ key: KEY_INICIO });
      this.showToast('Recorrido anterior suspendido por superar el tiempo límite.', 'warning');
      return;
    }
    const mins = Math.floor((LIMITE_CADUCIDAD - (Date.now() - inicioMs)) / 60000);
    const alert = await this.alertCtrl.create({
      header:  'Recorrido en curso',
      message: `Tienes un recorrido activo con ${mins} min restantes. ¿Retomar?`,
      buttons: [
        { text: 'Descartar', role: 'cancel', handler: async () => {
          // Igual que en el caso vencido: si solo se limpia local, el
          // recorrido queda "activo" en el backend para siempre, porque
          // nada vuelve a vigilarlo (las Preferences que lo referencian
          // ya no existen en el próximo arranque).
          try {
            await this.recorridosService.finalizarRecorrido(id, 0, undefined, undefined, 'suspendido');
          } catch (e) { console.warn('Error suspendiendo recorrido descartado:', e); }
          await Preferences.remove({ key: KEY_ACTIVO });
          await Preferences.remove({ key: KEY_INICIO });
        }},
        { text: 'Retomar', handler: () => {
          this.recorridoActivoId = id; this.inicioRecorridoMs = inicioMs;
          this.tracking = true; this.pasoActual = 4; this.panelAbierto = false;
          this._iniciarTimerCaducidad();
          Geolocation.watchPosition({ enableHighAccuracy: this.gpsAlta }, pos => {
            if (!pos) return;
            this.lat = pos.coords.latitude; this.lng = pos.coords.longitude;
            this.velocidad = Math.round((pos.coords.speed || 0) * 3.6);
            this.mapView?.actualizarCamion(this.lat, this.lng, this.velocidad);
            this.procesarDistancia(); this.cdr.detectChanges();
          }).then(id => {
            // Igual que en iniciarRecorrido(): si el componente ya se
            // destruyó mientras watchPosition resolvía, no adoptar el watcher.
            if (this.destruido) { Geolocation.clearWatch({ id }); return; }
            this.watchId = id;
          });
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
  get distStr() { return this.prefsService.convertirDistancia(this.distanciaTotal, this.unidadDistancia).toFixed(2); }
}
