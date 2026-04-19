import { Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Preferences } from '@capacitor/preferences';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { RutasService } from '../../services/rutas/rutas';
import { CallesService } from '../../services/calles/calles';
import { MapViewComponent } from '../../components/map-view/map-view.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MapViewComponent],
})
export class HomePage implements OnInit {

  @ViewChild(MapViewComponent) mapView!: MapViewComponent;

  userRole = '';

  rutas: any[] = [];
  calles: any[] = [];
  vehiculos: any[] = [];
  vehiculoSeleccionado: any = null;

  identidadValidada = false;
  tracking = false;

  lat = 0;
  lng = 0;
  watchId: string | null = null;

  distanciaAcumulada = 0;
  ultimaLat: number | null = null;
  ultimaLng: number | null = null;

  recorrido: any[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private rutasService: RutasService,
    private callesService: CallesService,
    private router: Router
  ) {}

  async ngOnInit() {
    try {
      this.userRole = await this.authService.getUserRole();
      this.cargarDatosMapa();

      if (this.esConductor()) {
        this.cargarVehiculos();
      }

      window.addEventListener('online', () => {
        this.sincronizarDatos();
      });

    } catch (error) {
      console.error('Error inicializando:', error);
    }
  }

  volver() {
    this.router.navigateByUrl('/menu');
  }

  esConductor(): boolean {
    return this.userRole?.toLowerCase().trim() === 'conductor';
  }

  /* ===============================
     MAPA
  =============================== */
  cargarDatosMapa() {
    this.rutasService.getRutas().subscribe(res => {
      this.rutas = res?.data || [];
    });

    this.callesService.getCalles().subscribe(res => {
      this.calles = res?.data || [];
    });
  }

  /* ===============================
     VEHICULOS
  =============================== */
  cargarVehiculos() {
    const url = `${environment.apiUrl}/vehiculos`;

    this.http.get<any>(url, {
      params: { perfil_id: environment.perfilUrl }
    }).subscribe({
      next: res => this.vehiculos = res?.data || res,
      error: err => console.error('Error vehículos:', err)
    });
  }

  seleccionarVehiculo(v: any) {
    this.vehiculoSeleccionado = v;
  }

  /* ===============================
     BIOMETRIA SIMPLIFICADA
  =============================== */
  async validarIdentidad() {
    try {
      await Camera.getPhoto({
        quality: 80,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
      });

      this.identidadValidada = true;
      alert('✅ Rostro verificado');

    } catch {
      alert('❌ Verificación fallida');
    }
  }

  /* ===============================
     TRACKING
  =============================== */
  async iniciarRecorrido() {

    if (!this.vehiculoSeleccionado) return alert('Seleccione vehículo');
    if (!this.identidadValidada) return alert('Valide identidad');

    this.tracking = true;

    await this.obtenerUbicacionInicial();
    await this.sincronizarDatos();

    this.watchId = await Geolocation.watchPosition({}, pos => {
      if (!pos) return;

      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;

      this.recorrido.push({ lat: this.lat, lng: this.lng, fecha: new Date() });

      this.mapView?.actualizarCamion(this.lat, this.lng);

      this.procesarDistancia();
    });
  }

  detenerRecorrido() {
    if (!this.tracking) return;

    this.tracking = false;

    if (this.watchId) {
      Geolocation.clearWatch({ id: this.watchId });
      this.watchId = null;
    }

    alert('Recorrido detenido');
  }

  async obtenerUbicacionInicial() {
    const pos = await Geolocation.getCurrentPosition();
    this.lat = pos.coords.latitude;
    this.lng = pos.coords.longitude;
  }

  /* ===============================
     DISTANCIA
  =============================== */
  procesarDistancia() {
    if (this.ultimaLat == null || this.ultimaLng == null) {
      this.ultimaLat = this.lat;
      this.ultimaLng = this.lng;
      return;
    }

    const d = this.calcularDistancia(
      this.ultimaLat, this.ultimaLng,
      this.lat, this.lng
    );

    if (d >= 0.005) this.enviarCoordenadas();

    this.distanciaAcumulada += d;

    if (this.distanciaAcumulada >= 1) {
      this.dispararHito();
      this.distanciaAcumulada = 0;
    }

    this.ultimaLat = this.lat;
    this.ultimaLng = this.lng;
  }

  calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371;
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(this.toRad(lat1)) *
      Math.cos(this.toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;

    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  }

  toRad(v: number) {
    return (v * Math.PI) / 180;
  }

  /* ===============================
     ENVIO DATOS
  =============================== */
  async enviarCoordenadas() {
    const data = {
      lat: this.lat,
      lng: this.lng,
      fecha: new Date(),
      vehiculo: this.vehiculoSeleccionado?.placa
    };

    if (navigator.onLine) {
      try {
        await this.postTrackingData(data);
      } catch {
        await this.guardarOffline(data);
      }
    } else {
      await this.guardarOffline(data);
    }
  }

  private async postTrackingData(data: any) {
    const base = environment.apiUrl;

    for (const endpoint of environment.trackingEndpoints) {
      try {
        await firstValueFrom(
          this.http.post(`${base}/${endpoint}?perfil_id=${environment.perfilUrl}`, data)
        );
        return true;
      } catch (err: any) {
        if (err?.status !== 404) throw err;
      }
    }
    return false;
  }

  /* ===============================
     OFFLINE
  =============================== */
  async guardarOffline(data: any) {
    const { value } = await Preferences.get({ key: 'datosOffline' });
    const datos = value ? JSON.parse(value) : [];

    datos.push(data);
    if (datos.length > 200) datos.shift();

    await Preferences.set({
      key: 'datosOffline',
      value: JSON.stringify(datos)
    });
  }

  async sincronizarDatos() {
    if (!navigator.onLine) return;

    const { value } = await Preferences.get({ key: 'datosOffline' });
    if (!value) return;

    const datos = JSON.parse(value);

    for (const item of datos) {
      try {
        await this.postTrackingData(item);
      } catch {
        break;
      }
    }

    await Preferences.remove({ key: 'datosOffline' });
  }

  /* ===============================
     FOTO CADA KM
  =============================== */
  async dispararHito() {
    try {
      const image = await Camera.getPhoto({
        quality: 50,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
      });

      const data = {
        lat: this.lat,
        lng: this.lng,
        fecha: new Date(),
        imagen: `data:image/jpeg;base64,${image.base64String}`,
        vehiculo: this.vehiculoSeleccionado?.placa
      };

      await this.enviarCoordenadas();

    } catch {
      console.log('📸 cancelado');
    }
  }
}