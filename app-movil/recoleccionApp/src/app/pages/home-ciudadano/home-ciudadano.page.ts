import { Component, OnInit, OnDestroy, DestroyRef, inject, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';

import { AuthService }       from '../../services/auth.service';
import { RutasService }      from '../../services/rutas/rutas';
import { CallesService }     from '../../services/calles/calles';
import { RecorridosService } from '../../services/recorridos/recorridos.service';
import { PreferenciasService } from '../../services/preferencias.service';
import { MapViewComponent }  from '../../components/map-view/map-view.component';

// Cada cuánto se refresca la posición del camión mientras la página está
// abierta (no hay push/realtime desde el backend, así que se hace polling).
const INTERVALO_REFRESCO_MS = 20_000;

// El backend no persiste la velocidad instantánea del camión (solo lat/lon
// por posición) — se usa una velocidad promedio urbana razonable únicamente
// para estimar el ETA, nunca para inventar la distancia (esa sí es real).
const VELOCIDAD_PROMEDIO_KMH = 20;

@Component({
  selector: 'app-home-ciudadano',
  templateUrl: './home-ciudadano.page.html',
  styleUrls:  ['./home-ciudadano.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, MapViewComponent],
})
export class HomeCiudadanoPage implements OnInit, OnDestroy {

  @ViewChild(MapViewComponent) mapView?: MapViewComponent;

  // ── Perfil (puede ser anónimo) ────────────────────────────
  nombreUsuario  = 'Visitante';
  inicialUsuario = 'V';
  tieneSesion    = false;

  // ── Datos del mapa ────────────────────────────────────────
  rutas:  any[] = [];
  calles: any[] = [];

  // ── Estado del camión ─────────────────────────────────────
  camionActivo    = false;
  distanciaCamion = 0;
  etaCamion       = '';
  private pollCamion: any = null;

  // ── Próxima recolección ───────────────────────────────────
  proximaFecha = '';
  proximaHora  = '';
  proximaRuta  = '';

  // ── Panel ─────────────────────────────────────────────────
  panelAbierto = true;

  private destroyRef = inject(DestroyRef);

  constructor(
    private authService:       AuthService,
    private rutasService:      RutasService,
    private callesService:     CallesService,
    private recorridosService: RecorridosService,
    private prefsService:      PreferenciasService,
    private router:            Router,
  ) {}

  async ngOnInit() {
    // Cargar perfil si hay sesión (puede no haberla)
    try {
      const perfil       = await this.authService.getUserProfile();
      this.tieneSesion   = !!perfil;
      this.nombreUsuario = perfil?.nombre || perfil?.email?.split('@')[0] || 'Visitante';
      this.inicialUsuario = this.nombreUsuario[0].toUpperCase();
    } catch {
      this.tieneSesion    = false;
      this.nombreUsuario  = 'Visitante';
      this.inicialUsuario = 'V';
    }

    // Cargar datos del mapa
    this.rutasService.getRutas().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(r => { this.rutas = r?.data || []; });
    this.callesService.getCalles().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(c => { this.calles = c?.data || []; });

    this.cargarEstadoCamion();
    this.calcularProximaRecoleccion();

    // No hay push/realtime desde el backend: refrescar por polling
    // mientras la página esté abierta.
    this.pollCamion = setInterval(() => this.cargarEstadoCamion(), INTERVALO_REFRESCO_MS);
  }

  ngOnDestroy() {
    if (this.pollCamion) clearInterval(this.pollCamion);
  }

  // ── Estado del camión (recorridos activos) ────────────────
  cargarEstadoCamion() {
    this.recorridosService.getRecorridos()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: res => {
          const activos = (res?.data || []).filter((r: any) => !r.fin);
          this.camionActivo = activos.length > 0;
          if (this.camionActivo) {
            this.actualizarPosicionCamion(activos[0].id);
          } else {
            this.distanciaCamion = 0;
            this.etaCamion = '';
          }
        },
        error: () => { this.camionActivo = false; },
      });
  }

  // Ubica el camión con su última posición real (tabla `posiciones` en
  // Supabase, la misma que llena el conductor durante el recorrido) y
  // calcula distancia real desde la ubicación del ciudadano — antes esto
  // era Math.random(). El ETA sí es una estimación (no hay velocidad
  // instantánea persistida), pero la distancia y la posición en el mapa
  // son reales.
  private async actualizarPosicionCamion(recorridoId: string) {
    const posCamion = await this.recorridosService.obtenerUltimaPosicion(recorridoId);
    if (!posCamion) { this.camionActivo = false; return; }

    this.mapView?.actualizarCamion(posCamion.lat, posCamion.lon);

    try {
      const prefs = await this.prefsService.obtener();
      const miPos = await Geolocation.getCurrentPosition({ enableHighAccuracy: prefs.gpsAlta });
      const distM = this.haversineMetros(
        miPos.coords.latitude, miPos.coords.longitude, posCamion.lat, posCamion.lon,
      );
      this.distanciaCamion = Math.round(distM);
      const mins = Math.round((distM / 1000) / VELOCIDAD_PROMEDIO_KMH * 60);
      this.etaCamion = mins < 1 ? 'Llegando' : `~${mins} min`;
    } catch {
      // Sin ubicación del ciudadano no se puede calcular distancia/ETA,
      // pero el camión igual se ve en el mapa con su posición real.
      this.etaCamion = '';
    }
  }

  private haversineMetros(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371000;
    const rad = (v: number) => v * Math.PI / 180;
    const dLat = rad(lat2 - lat1), dLon = rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  // ── Próxima recolección ────────────────────────────────────
  // Antes era una fecha inventada (hoy+2 días, 07:00 AM fijo). Ahora
  // muestra la ruta programada más reciente que el conductor haya
  // guardado (tabla recorridos_programados) — si no hay ninguna, se dice
  // explícitamente que no hay recolección programada en vez de inventar una.
  async calcularProximaRecoleccion() {
    const dias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
    try {
      const locales = await this.recorridosService.getRecorridosLocales();
      const programadas = locales
        .filter(r => r.estado === 'programada')
        .sort((a, b) => new Date(b.inicio).getTime() - new Date(a.inicio).getTime());

      if (programadas.length) {
        const fecha = new Date(programadas[0].inicio);
        this.proximaFecha = `${dias[fecha.getDay()]} ${fecha.getDate()}`;
        this.proximaHora  = fecha.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
        this.proximaRuta  = programadas[0].nombre_ruta || '';
      } else {
        this.proximaFecha = 'Sin ruta programada';
        this.proximaHora  = '';
        this.proximaRuta  = '';
      }
    } catch {
      this.proximaFecha = 'Sin ruta programada';
      this.proximaHora  = '';
      this.proximaRuta  = '';
    }
  }

  // Refuerza el recálculo de tamaño del mapa una vez termina la
  // transición de entrada de la página (ver comentario en
  // MapViewComponent.invalidateSize).
  ionViewDidEnter() { this.mapView?.invalidateSize(); }

  togglePanel()  { this.panelAbierto = !this.panelAbierto; }
  irAlLogin()    { this.router.navigate(['/login']); }
  irAlMenu()     { this.router.navigate(['/menu']); }
}
