import {
  Component, AfterViewInit, Input, OnDestroy,
  ChangeDetectorRef, NgZone, ViewChild, ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { Preferences } from '@capacitor/preferences';
import { firstValueFrom } from 'rxjs';
import * as L from 'leaflet';
import { environment } from '../../../environments/environment';
import { PreferenciasService } from '../../services/preferencias.service';
import { RutasService } from '../../services/rutas/rutas';

interface Incidencia { lat: number; lng: number; tipo: string; hora: string; }

// ─────────────────────────────────────────────────────────────────────────────
// MAPBOX — capas de tiles
// Token gratuito: https://account.mapbox.com → Access Tokens → Create token
// Plan gratuito: 50,000 cargas de mapa/mes (más que suficiente para este proyecto)
// ─────────────────────────────────────────────────────────────────────────────
const MB = environment.mapboxToken;

const TILE_LAYERS = {
  // Mapa estándar Mapbox Streets — limpio y moderno
  estandar: `https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=${MB}`,

  // Modo noche — Mapbox Dark (perfecto para conducción nocturna)
  oscuro:   `https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token=${MB}`,

  // Satélite con etiquetas — Mapbox Satellite Streets
  satelite: `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/tiles/{z}/{x}/{y}?access_token=${MB}`,

  // Navegación — optimizado para conductores (alto contraste, calles anchas)
  navegacion: `https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token=${MB}`,

  // Navegación noche
  navegacionNoche: `https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token=${MB}`,
};

// Atribución requerida por Mapbox
const ATTR_MAPBOX = '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OSM</a>';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class MapViewComponent implements AfterViewInit, OnDestroy {

  // Referencia directa al contenedor en vez de un id fijo (ver comentario
  // en inicializarMapa): con un id fijo, L.map('map') hace
  // document.getElementById y puede engancharse al <div> de una página
  // anterior que Ionic mantiene oculta en el DOM del ion-router-outlet.
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef<HTMLDivElement>;

  @Input() rutas:    any[]  = [];
  @Input() calles:   any[]  = [];
  @Input() userRole: string = '';

  map!: L.Map;
  capaActual: keyof typeof TILE_LAYERS = 'estandar';
  tileLayer!: L.TileLayer;
  pantalla = false;

  // ── Conductor ─────────────────────────────────────────────
  camionMarker:       L.Marker | null   = null;
  trayectoriaCoords:  [number,number][] = [];
  trayectoriaLinea:   L.Polyline | null = null;
  modoNavegacion      = false;
  velocidadActual     = 0;
  distanciaTotal      = 0;
  tiempoStr           = '00:00';
  timerInterval:      any  = null;
  tiempoInicio:       number | null = null;
  ultimaPosNav:       [number,number] | null = null;
  ultimoTimestamp:    number | null = null;
  rutaDestacadaLayer: L.Polyline | null = null;

  // ── Ciudadano ─────────────────────────────────────────────
  rutaCiudadano:    [number,number][] = [];
  lineaCiudadano:   L.Polyline | null = null;
  clusterGroup:     any = null;
  radioCercano:     L.Circle | null  = null;
  etaMarker:        L.Marker | null  = null;
  miUbicacionMark:  L.Marker | null  = null;   // ← NUEVO: marcador de posición propia
  private watchIdUbicacion: string | null = null;

  // ── Búsqueda ─────────────────────────────────────────────
  busquedaQuery    = '';
  busquedaResults: any[] = [];
  buscando         = false;
  marcadorBusqueda: L.Marker | null = null;

  // ── Ruta A→B ──────────────────────────────────────────────
  puntoA:        L.LatLng | null  = null;
  puntoB:        L.LatLng | null  = null;
  markerA:       L.Marker | null  = null;
  markerB:       L.Marker | null  = null;
  lineaRuta:     L.Polyline | null = null;
  modoTrazarRuta = false;
  faseTrazado: 'A'|'B' = 'A';
  distanciaRuta  = '';

  // Geometría GeoJSON ([lon,lat], igual que la que devuelve/consume el
  // backend) de la última ruta A→B trazada, lista para guardar.
  private geoRutaTrazada: [number, number][] | null = null;
  nombreRutaTrazada  = '';
  guardandoRutaTrazada = false;

  // ── Tooltips de FABs ─────────────────────────────────────
  fabTooltip = '';   // texto del tooltip activo

  // ── Íconos ───────────────────────────────────────────────
  camionIcon = L.icon({ iconUrl: 'assets/icon/camion.png', iconSize: [40,40], iconAnchor: [20,40] });
  calleIcon  = L.icon({ iconUrl: 'assets/icon/punto.png',  iconSize: [25,25], iconAnchor: [12,25] });
  pinAIcon   = L.divIcon({ className:'', html:'<div class="pin-a">A</div>', iconSize:[32,32], iconAnchor:[16,32] });
  pinBIcon   = L.divIcon({ className:'', html:'<div class="pin-b">B</div>', iconSize:[32,32], iconAnchor:[16,32] });
  miPosIcon  = L.divIcon({ className:'', html:'<div class="mi-pos-icon"></div>', iconSize:[20,20], iconAnchor:[10,10] });

  // ── Overlay de confirmación de ruta (fuera del árbol de Angular) ──
  private confirmacionRutaEl: HTMLElement | null = null;

  // Recalcula el tamaño del mapa cada vez que su contenedor cambia de
  // tamaño real (fin de la transición de página de Ionic, vuelta desde
  // la cámara, cambio de orientación, teclado, etc.). Antes solo se
  // llamaba invalidateSize() una vez con un setTimeout fijo, y si la
  // transición de la página tardaba más que eso, el mapa quedaba
  // calculado con tamaño 0 y las teselas no cargaban hasta recargar.
  private resizeObserver: ResizeObserver | null = null;

  // ── Preferencias (Configuración) ─────────────────────────
  gpsAlta         = true;
  unidadDistancia: 'km' | 'mi' = 'km';

  constructor(
    private cdr: ChangeDetectorRef,
    private zone: NgZone,
    private prefsService: PreferenciasService,
    private rutasService: RutasService,
    private toastCtrl: ToastController,
  ) {}

  ngAfterViewInit() {
    setTimeout(async () => {
      const prefs = await this.prefsService.obtener();
      this.gpsAlta = prefs.gpsAlta;
      this.unidadDistancia = prefs.unidadDistancia;
      if (prefs.modoOscuro) this.capaActual = 'oscuro';
      this.inicializarMapa();
      this.iniciarTimer();
    }, 300);
  }
  ngOnDestroy() {
    this.detenerTimer();
    this.resizeObserver?.disconnect();
    if (this.watchIdUbicacion) Geolocation.clearWatch({ id: this.watchIdUbicacion });
    if (this.confirmacionRutaEl?.parentNode) this.confirmacionRutaEl.parentNode.removeChild(this.confirmacionRutaEl);
    if (this.map) this.map.remove();
  }

  // ─────────────────────────────────────────────────────────
  // MAPA
  // ─────────────────────────────────────────────────────────
  inicializarMapa() {
    // Ionic (ion-router-outlet) no destruye siempre la página anterior al
    // navegar — la deja oculta en el DOM para las transiciones/gesto de
    // "volver". Con un id="map" fijo, L.map('map') podía engancharse al
    // contenedor viejo y oculto de esa página anterior en vez del nuevo,
    // dejando el mapa visible sin inicializar hasta recargar la app.
    // Usar la referencia directa del elemento evita ese choque de ids.
    this.map = L.map(this.mapContainer.nativeElement, { zoomControl: false, attributionControl: true })
                .setView([4.6097, -74.0817], 13);

    // Tile Mapbox con tileSize 512 y zoomOffset -1 (requerido por Mapbox)
    // capaActual ya viene ajustada a 'oscuro' en ngAfterViewInit si el
    // usuario activó "Modo oscuro" en Configuración.
    this.tileLayer = L.tileLayer(TILE_LAYERS[this.capaActual], {
      maxZoom:    22,
      tileSize:   512,
      zoomOffset: -1,
      attribution: ATTR_MAPBOX,
    }).addTo(this.map);

    L.control.zoom({ position: 'bottomright' }).addTo(this.map);
    setTimeout(() => this.map.invalidateSize(), 300);

    // Recalcular tamaño automáticamente ante cualquier cambio real del
    // contenedor (ver comentario en la declaración de resizeObserver).
    this.resizeObserver = new ResizeObserver(() => this.map?.invalidateSize());
    this.resizeObserver.observe(this.map.getContainer());

    this.dibujarRutas();
    this.inicializarCluster();
    this.cargarRutaGuardada();
    this.centrarEnUbicacion();       // ← centra automáticamente al abrir
    this.iniciarSeguimientoUbicacion(); // ← punto azul que sigue en vivo

    this.map.on('click', (e: L.LeafletMouseEvent) => this.onMapClick(e));
  }

  // Llamado desde ionViewDidEnter() de la página anfitriona: refuerza
  // el ResizeObserver para el caso en que el contenedor ya tenía su
  // tamaño final antes de que terminara la transición de Ionic.
  invalidateSize() { this.map?.invalidateSize(); }

  cambiarCapa(capa: keyof typeof TILE_LAYERS) {
    this.capaActual = capa;
    if (this.tileLayer) this.map.removeLayer(this.tileLayer);
    this.tileLayer = L.tileLayer(TILE_LAYERS[capa], {
      maxZoom: 22, tileSize: 512, zoomOffset: -1, attribution: ATTR_MAPBOX,
    }).addTo(this.map);
  }

  // Al activar modo navegación conductor → cambiar a capa de navegación Mapbox
  toggleNavegacion() {
    this.modoNavegacion = !this.modoNavegacion;
    if (this.modoNavegacion) {
      const esNoche = new Date().getHours() >= 19 || new Date().getHours() < 6;
      this.cambiarCapa(esNoche ? 'navegacionNoche' : 'navegacion');
      if (this.camionMarker) {
        const p = this.camionMarker.getLatLng();
        this.map.setView([p.lat, p.lng], 17);
      }
    } else {
      this.cambiarCapa('estandar');
    }
    this.cdr.detectChanges();
  }

  togglePantalla() {
    this.pantalla = !this.pantalla;
    setTimeout(() => this.map.invalidateSize(), 100);
  }

  // ─────────────────────────────────────────────────────────
  // CENTRAR EN MI UBICACIÓN (con animación suave)
  // ─────────────────────────────────────────────────────────
  async centrarEnUbicacion() {
    try {
      const pos = await Geolocation.getCurrentPosition({ enableHighAccuracy: this.gpsAlta });
      const lat = pos.coords.latitude, lng = pos.coords.longitude;
      this.actualizarMiUbicacion(lat, lng);
      // Animación suave flyTo (mejor que setView)
      this.map.flyTo([lat, lng], 15, { animate: true, duration: 1.2 });
    } catch { console.warn('No se pudo obtener ubicación'); }
  }

  // Alias para el botón de centrar (mantiene compatibilidad)
  async centrarMapa() { await this.centrarEnUbicacion(); }

  // Punto azul de "tu ubicación": antes era una foto fija que solo se
  // tomaba al abrir el mapa o al tocar "centrar". Con watchPosition se
  // actualiza solo mientras el GPS está activo, siguiendo al usuario en
  // tiempo real (sin recentrar el mapa en cada actualización, para no
  // pelear con el usuario si está paneando/zoomeando manualmente).
  private async iniciarSeguimientoUbicacion() {
    try {
      this.watchIdUbicacion = await Geolocation.watchPosition(
        { enableHighAccuracy: this.gpsAlta },
        pos => {
          if (!pos) return;
          this.zone.run(() => this.actualizarMiUbicacion(pos.coords.latitude, pos.coords.longitude));
        },
      );
    } catch { console.warn('No se pudo iniciar el seguimiento de ubicación'); }
  }

  private actualizarMiUbicacion(lat: number, lng: number) {
    if (this.miUbicacionMark) {
      this.miUbicacionMark.setLatLng([lat, lng]);
    } else {
      this.miUbicacionMark = L.marker([lat, lng], { icon: this.miPosIcon })
        .addTo(this.map)
        .bindPopup('<strong>📍 Tu ubicación</strong>');
    }
  }

  // ─────────────────────────────────────────────────────────
  // RUTAS — dibuja las rutas de recolección del backend
  // ─────────────────────────────────────────────────────────
  dibujarRutas() {
    if (!this.rutas?.length) return;
    this.rutas.forEach((ruta, i) => {
      try {
        const latlngs: [number,number][] = JSON.parse(ruta.shape).map((c: number[]) => [c[1], c[0]]);
        const km = this.longPolyline(latlngs).toFixed(1);
        const poly = L.polyline(latlngs, {
          color: '#1D9E75', weight: 5, opacity: 0.85, lineJoin: 'round',
        })
          .addTo(this.map)
          .bindPopup(`
            <div class="popup-ruta">
              <strong>${ruta.nombre_ruta || 'Ruta ' + (i + 1)}</strong>
              <br>📏 ${km} km · ${latlngs.length} puntos
            </div>
          `);
        poly.on('mouseover', () => poly.setStyle({ weight: 8, opacity: 1 }));
        poly.on('mouseout',  () => poly.setStyle({ weight: 5, opacity: 0.85 }));
        // Al hacer clic en la ruta → popup con nombre y zoom
        poly.on('click', () => { this.map.fitBounds(poly.getBounds(), { padding: [40, 40] }); });
      } catch {}
    });
  }

  longPolyline(ll: [number,number][]): number {
    let d = 0;
    for (let i = 1; i < ll.length; i++) d += this.map.distance(ll[i - 1], ll[i]);
    return d / 1000;
  }

  // ─────────────────────────────────────────────────────────
  // DESTACAR RUTA SELECCIONADA (llamado desde home.page.ts)
  // ─────────────────────────────────────────────────────────
  destacarRuta(ruta: any) {
    if (!this.map || !ruta?.shape) return;
    try {
      if (this.rutaDestacadaLayer) { this.map.removeLayer(this.rutaDestacadaLayer); this.rutaDestacadaLayer = null; }
      const latlngs: [number,number][] = JSON.parse(ruta.shape).map((c: number[]) => [c[1], c[0]]);
      this.rutaDestacadaLayer = L.polyline(latlngs, { color: '#F5A623', weight: 10, opacity: 0.9, lineJoin: 'round' })
        .addTo(this.map)
        .bindPopup(`<div class="popup-ruta"><strong>✅ ${ruta.nombre_ruta}</strong><br>Ruta guardada para hoy</div>`)
        .openPopup();
      this.map.flyToBounds(L.polyline(latlngs).getBounds(), { padding: [40, 40], animate: true, duration: 1 });
    } catch (e) { console.warn('No se pudo destacar la ruta:', e); }
  }

  // ─────────────────────────────────────────────────────────
  // CLUSTER DE PUNTOS DE RECOLECCIÓN
  // ─────────────────────────────────────────────────────────
  inicializarCluster() {
    if (!this.calles?.length) return;
    try {
      this.clusterGroup = (L as any).markerClusterGroup
        ? (L as any).markerClusterGroup({ maxClusterRadius: 60 })
        : L.layerGroup();
    } catch { this.clusterGroup = L.layerGroup(); }

    this.calles.forEach(c => {
      const m = L.marker([c.lat, c.lng], { icon: this.calleIcon }).bindPopup(`
        <div class="popup-calle">
          <strong>📍 Punto de recolección</strong><br>
          ${c.nombre || c.calle || 'Sin nombre'}<br>
          <small>${c.lat.toFixed(5)}, ${c.lng.toFixed(5)}</small>
        </div>
      `);
      this.clusterGroup.addLayer(m);
    });
    this.map.addLayer(this.clusterGroup);
  }

  // ─────────────────────────────────────────────────────────
  // ACTUALIZAR CAMIÓN (llamado desde home.page.ts durante tracking)
  // ─────────────────────────────────────────────────────────
  actualizarCamion(lat: number, lng: number, velocidad?: number) {
    if (!this.map) return;
    const now = Date.now();
    if (this.ultimaPosNav && this.ultimoTimestamp) {
      const dt = (now - this.ultimoTimestamp) / 1000;
      const dx = this.map.distance([lat, lng], this.ultimaPosNav);
      this.velocidadActual = dt > 0 ? Math.round((dx / dt) * 3.6) : 0;
    }
    this.ultimaPosNav = [lat, lng]; this.ultimoTimestamp = now;
    if (velocidad !== undefined) this.velocidadActual = Math.round(velocidad);

    if (!this.camionMarker) {
      this.camionMarker = L.marker([lat, lng], { icon: this.camionIcon })
        .addTo(this.map).bindPopup('<strong>🚛 Camión recolector</strong>');
    } else {
      // Animación suave de movimiento del marcador
      this.camionMarker.setLatLng([lat, lng]);
    }

    this.trayectoriaCoords.push([lat, lng]);
    if (this.trayectoriaLinea) this.map.removeLayer(this.trayectoriaLinea);
    this.trayectoriaLinea = L.polyline(this.trayectoriaCoords, {
      color: '#F5A623', weight: 4, opacity: 0.75, dashArray: '8 4',
    }).addTo(this.map);

    if (this.trayectoriaCoords.length >= 2) {
      const prev = this.trayectoriaCoords[this.trayectoriaCoords.length - 2];
      this.distanciaTotal += this.map.distance(prev, [lat, lng]) / 1000;
    }
    if (this.modoNavegacion) this.map.setView([lat, lng], 17);
    this.cdr.detectChanges();
  }

  resetearTrayectoria() {
    this.trayectoriaCoords = []; this.distanciaTotal = 0; this.velocidadActual = 0;
    if (this.trayectoriaLinea) { this.map.removeLayer(this.trayectoriaLinea); this.trayectoriaLinea = null; }
    this.detenerTimer(); this.iniciarTimer();
  }

  // ─────────────────────────────────────────────────────────
  // TIMER DEL RECORRIDO
  // ─────────────────────────────────────────────────────────
  iniciarTimer() {
    this.tiempoInicio = Date.now();
    this.timerInterval = setInterval(() => {
      if (!this.tiempoInicio) return;
      const seg = Math.floor((Date.now() - this.tiempoInicio) / 1000);
      const m = Math.floor(seg / 60).toString().padStart(2, '0');
      const s = (seg % 60).toString().padStart(2, '0');
      this.zone.run(() => { this.tiempoStr = `${m}:${s}`; });
    }, 1000);
  }
  detenerTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.tiempoStr = '00:00'; this.tiempoInicio = null;
  }

  // ─────────────────────────────────────────────────────────
  // BUSCADOR DE DIRECCIONES (Nominatim / OpenStreetMap)
  // Nota: el buscador sigue usando Nominatim (gratuito e ilimitado)
  // Solo los tiles visuales vienen de Mapbox
  // ─────────────────────────────────────────────────────────
  async buscarDireccion() {
    if (!this.busquedaQuery.trim()) return;
    this.buscando = true; this.busquedaResults = [];
    try {
      const q = encodeURIComponent(this.busquedaQuery + ', Colombia');
      const r = await fetch(`https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=5&accept-language=es`);
      this.busquedaResults = await r.json();
    } catch { console.warn('Error buscando'); }
    finally { this.buscando = false; this.cdr.detectChanges(); }
  }

  seleccionarResultado(r: any) {
    const lat = parseFloat(r.lat), lng = parseFloat(r.lon);
    if (this.marcadorBusqueda) this.map.removeLayer(this.marcadorBusqueda);
    this.marcadorBusqueda = L.marker([lat, lng], {
      icon: L.divIcon({ className: '', html: '<div class="pin-busqueda">📍</div>', iconSize: [30, 30], iconAnchor: [15, 30] }),
    }).addTo(this.map).bindPopup(`<strong>${r.display_name}</strong>`).openPopup();
    // flyTo con animación suave (mejor UX que setView)
    this.map.flyTo([lat, lng], 16, { animate: true, duration: 1 });
    this.busquedaResults = []; this.busquedaQuery = r.display_name.split(',')[0];
  }

  onBusquedaKeyup(e: KeyboardEvent) { if (e.key === 'Enter') this.buscarDireccion(); }

  // ─────────────────────────────────────────────────────────
  // RUTA A→B (usando OSRM para el trazado de calles)
  // ─────────────────────────────────────────────────────────
  activarTrazarRuta() { this.modoTrazarRuta = true; this.faseTrazado = 'A'; this.limpiarRutaAB(); }

  limpiarRutaAB() {
    [this.markerA, this.markerB, this.lineaRuta].forEach(l => { if (l) this.map.removeLayer(l); });
    this.markerA = this.markerB = this.lineaRuta = null;
    this.puntoA = this.puntoB = null; this.distanciaRuta = '';
    this.geoRutaTrazada = null; this.nombreRutaTrazada = '';
  }

  onMapClick(e: L.LeafletMouseEvent) { if (this.modoTrazarRuta) this.manejarClickAB(e.latlng); }

  manejarClickAB(latlng: L.LatLng) {
    if (this.faseTrazado === 'A') {
      this.puntoA = latlng;
      if (this.markerA) this.map.removeLayer(this.markerA);
      this.markerA = L.marker(latlng, { icon: this.pinAIcon }).addTo(this.map);
      this.faseTrazado = 'B';
    } else {
      this.puntoB = latlng;
      if (this.markerB) this.map.removeLayer(this.markerB);
      this.markerB = L.marker(latlng, { icon: this.pinBIcon }).addTo(this.map);
      this.modoTrazarRuta = false;
      this.trazarRuta();
    }
  }

  async trazarRuta() {
    if (!this.puntoA || !this.puntoB) return;
    try {
      const url  = `https://router.project-osrm.org/route/v1/driving/${this.puntoA.lng},${this.puntoA.lat};${this.puntoB.lng},${this.puntoB.lat}?overview=full&geometries=geojson`;
      const data = await (await fetch(url)).json();

      if (data.routes?.length) {
        const geoCoords: [number,number][] = data.routes[0].geometry.coordinates; // [lon,lat], formato GeoJSON
        const coords: [number,number][] = geoCoords.map((c: number[]) => [c[1], c[0]]);
        const dist = (data.routes[0].distance / 1000).toFixed(1);
        const mins = Math.round(data.routes[0].duration / 60);
        this.distanciaRuta = `${dist} km · ${mins} min`;

        const confirmar = await this.mostrarConfirmacionRuta(dist, mins.toString());
        if (!confirmar) { this.limpiarRutaAB(); return; }

        if (this.lineaRuta) this.map.removeLayer(this.lineaRuta);
        this.lineaRuta = L.polyline(coords, { color: '#E91E63', weight: 5, opacity: 0.9, lineJoin: 'round' }).addTo(this.map);
        this.map.flyToBounds(this.lineaRuta.getBounds(), { padding: [40, 40], animate: true, duration: 1 });
        this.lineaRuta.bindPopup(`🗺 ${this.distanciaRuta}`).openPopup();
        this.geoRutaTrazada = geoCoords;
      }
    } catch {
      if (this.puntoA && this.puntoB) {
        const d = (this.map.distance(this.puntoA, this.puntoB) / 1000).toFixed(1);
        this.distanciaRuta = `~${d} km`;
        const confirmar = await this.mostrarConfirmacionRuta(d, '?');
        if (!confirmar) { this.limpiarRutaAB(); return; }
        this.lineaRuta = L.polyline(
          [[this.puntoA.lat, this.puntoA.lng], [this.puntoB.lat, this.puntoB.lng]],
          { color: '#E91E63', weight: 5, dashArray: '10 6' },
        ).addTo(this.map);
        this.geoRutaTrazada = [[this.puntoA.lng, this.puntoA.lat], [this.puntoB.lng, this.puntoB.lat]];
      }
    }
    this.cdr.detectChanges();
  }

  // Guarda la ruta A→B trazada como una ruta real del sistema (misma API
  // que usan las rutas predefinidas), para que quede disponible en el
  // selector de rutas del conductor. Antes esta ruta se perdía al cerrar
  // o al tocar "×" — no había forma de conservarla.
  async guardarRutaTrazada() {
    if (!this.geoRutaTrazada || !this.nombreRutaTrazada.trim()) return;
    this.guardandoRutaTrazada = true;
    try {
      await firstValueFrom(this.rutasService.createRuta({
        perfil_id:   environment.perfilUrl,
        nombre_ruta: this.nombreRutaTrazada.trim(),
        shape: JSON.stringify({ type: 'LineString', coordinates: this.geoRutaTrazada }),
      }));
      await this.mostrarToast(`✅ Ruta "${this.nombreRutaTrazada.trim()}" guardada`, 'success');
      this.limpiarRutaAB();
    } catch (e) {
      console.error('Error guardando ruta trazada:', e);
      await this.mostrarToast('No se pudo guardar la ruta', 'danger');
    } finally {
      this.guardandoRutaTrazada = false;
    }
  }

  private async mostrarToast(message: string, color: 'success' | 'danger') {
    const t = await this.toastCtrl.create({ message, color, duration: 2500, position: 'top' });
    await t.present();
  }

  private mostrarConfirmacionRuta(dist: string, mins: string): Promise<boolean> {
    return new Promise(resolve => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div style="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:flex-end;justify-content:center;font-family:sans-serif">
          <div style="background:white;border-radius:20px 20px 0 0;padding:24px;width:100%;max-width:480px;box-shadow:0 -4px 30px rgba(0,0,0,0.2)">
            <div style="width:40px;height:4px;background:#e0e0e0;border-radius:2px;margin:0 auto 20px"></div>
            <h3 style="margin:0 0 8px;font-size:17px;font-weight:700;color:#1a1a2e">🗺 Ruta calculada</h3>
            <p style="margin:0 0 20px;color:#666;font-size:14px">
              <strong>${dist} km</strong> · aproximadamente <strong>${mins} min</strong> en automóvil
            </p>
            <div style="display:flex;gap:10px">
              <button id="btnCancelar" style="flex:1;padding:14px;border-radius:12px;border:1.5px solid #ddd;background:white;color:#666;font-size:14px;font-weight:600;cursor:pointer">Cancelar</button>
              <button id="btnIniciar" style="flex:1;padding:14px;border-radius:12px;border:none;background:#e91e63;color:white;font-size:14px;font-weight:600;cursor:pointer">Trazar ruta</button>
            </div>
          </div>
        </div>`;
      document.body.appendChild(div);
      this.confirmacionRutaEl = div;

      const cerrar = (resultado: boolean) => {
        if (div.parentNode) div.parentNode.removeChild(div);
        if (this.confirmacionRutaEl === div) this.confirmacionRutaEl = null;
        resolve(resultado);
      };
      div.querySelector('#btnIniciar')!.addEventListener('click', () => cerrar(true));
      div.querySelector('#btnCancelar')!.addEventListener('click', () => cerrar(false));
    });
  }

  // ─────────────────────────────────────────────────────────
  // ETA — distancia y tiempo al camión (ciudadano)
  // ─────────────────────────────────────────────────────────
  async mostrarETA() {
    if (!this.camionMarker) return;
    const pos    = await Geolocation.getCurrentPosition({ enableHighAccuracy: this.gpsAlta });
    const uLat   = pos.coords.latitude, uLng = pos.coords.longitude;
    const camion = this.camionMarker.getLatLng();
    const distKm = this.map.distance([uLat, uLng], camion) / 1000;
    const vel    = this.velocidadActual > 0 ? this.velocidadActual : 30;
    const mins   = Math.round((distKm / vel) * 60);
    const etaStr = mins < 1 ? '< 1 min' : `~${mins} min`;

    if (this.radioCercano) this.map.removeLayer(this.radioCercano);
    this.radioCercano = L.circle(camion, {
      radius: distKm * 1000, color: '#1D9E75', fillColor: '#1D9E75', fillOpacity: 0.08, weight: 2, dashArray: '6 4',
    }).addTo(this.map);

    if (this.etaMarker) this.map.removeLayer(this.etaMarker);
    this.etaMarker = L.marker([uLat, uLng], {
      icon: L.divIcon({ className: '', html: `<div class="eta-badge">${etaStr}</div>`, iconSize: [80, 32], iconAnchor: [40, 16] }),
    }).addTo(this.map);

    L.polyline([[uLat, uLng], [camion.lat, camion.lng]], { color: '#1D9E75', weight: 2, dashArray: '6 4', opacity: 0.6 }).addTo(this.map);
    this.map.flyToBounds([[uLat, uLng], [camion.lat, camion.lng]], { padding: [60, 60], animate: true, duration: 1 });
    this.cdr.detectChanges();
  }

  // ─────────────────────────────────────────────────────────
  // RADIO COBERTURA (ciudadano)
  // ─────────────────────────────────────────────────────────
  async mostrarRadioCobertura() {
    const pos = await Geolocation.getCurrentPosition({ enableHighAccuracy: this.gpsAlta });
    if (this.radioCercano) this.map.removeLayer(this.radioCercano);
    this.radioCercano = L.circle([pos.coords.latitude, pos.coords.longitude], {
      radius: 500, color: '#378ADD', fillColor: '#378ADD', fillOpacity: 0.1, weight: 2,
    }).addTo(this.map).bindPopup('📡 Radio de cobertura 500m').openPopup();
    this.map.flyTo([pos.coords.latitude, pos.coords.longitude], 15, { animate: true, duration: 1 });
  }

  // ─────────────────────────────────────────────────────────
  // RUTA MÁS CERCANA (ciudadano)
  // ─────────────────────────────────────────────────────────
  async irARutaMasCercana() {
    const pos = await Geolocation.getCurrentPosition({ enableHighAccuracy: this.gpsAlta });
    const lat = pos.coords.latitude, lng = pos.coords.longitude;
    let dMin = Infinity; let punto: [number,number] | null = null;
    this.rutas.forEach(r => {
      try {
        JSON.parse(r.shape).forEach((p: number[]) => {
          const d = this.map.distance([lat, lng], [p[1], p[0]]);
          if (d < dMin) { dMin = d; punto = [p[1], p[0]]; }
        });
      } catch {}
    });
    if (punto) {
      L.polyline([[lat, lng], punto], { color: '#1D9E75', weight: 5 }).addTo(this.map);
      this.map.flyToBounds([[lat, lng], punto], { padding: [40, 40], animate: true, duration: 1 });
    }
  }

  // ─────────────────────────────────────────────────────────
  // MARCADO DE RUTA (ciudadano dibuja su recorrido)
  // ─────────────────────────────────────────────────────────
  // Handler con referencia estable: activarMarcadoRuta() puede llamarse
  // varias veces (el ciudadano puede tocar el FAB más de una vez) y sin
  // quitar el listener previo, cada clic en el mapa disparaba N veces.
  private readonly _onClickMarcadoRuta = (e: L.LeafletMouseEvent) => {
    this.rutaCiudadano.push([e.latlng.lat, e.latlng.lng]);
    L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);
    if (this.lineaCiudadano) this.map.removeLayer(this.lineaCiudadano);
    this.lineaCiudadano = L.polyline(this.rutaCiudadano, { color: '#E91E63', weight: 4 }).addTo(this.map);
  };

  activarMarcadoRuta() {
    this.map.off('click', this._onClickMarcadoRuta);
    this.map.on('click', this._onClickMarcadoRuta);
  }

  async guardarRutaCiudadano() {
    await Preferences.set({ key: 'rutaCiudadano', value: JSON.stringify(this.rutaCiudadano) });
  }

  async cargarRutaGuardada() {
    const { value } = await Preferences.get({ key: 'rutaCiudadano' });
    if (!value) return;
    this.rutaCiudadano = JSON.parse(value);
    if (this.rutaCiudadano.length)
      this.lineaCiudadano = L.polyline(this.rutaCiudadano, { color: '#E91E63' }).addTo(this.map);
  }

  // Distancia total del HUD conductor, en la unidad elegida en Configuración.
  get distanciaTotalStr(): string {
    return this.prefsService.convertirDistancia(this.distanciaTotal, this.unidadDistancia).toFixed(2);
  }
}
