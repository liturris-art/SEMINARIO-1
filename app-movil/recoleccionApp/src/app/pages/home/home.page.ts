import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Preferences } from '@capacitor/preferences';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { RutasService } from '../../services/rutas/rutas';
import { CallesService } from '../../services/calles/calles';
import { MapViewComponent } from '../../components/map-view/map-view.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MapViewComponent],
})
export class HomePage implements OnInit {

  userRole: string = '';

  rutas: any[] = [];
  calles: any[] = [];

  vehiculos: any[] = [];
  vehiculoSeleccionado: any = null;
  identidadValidada: boolean = false;

  tracking: boolean = false;

  lat: number = 0;
  lng: number = 0;

  watchId: any;

  distanciaAcumulada: number = 0;
  ultimaLat: number | null = null;
  ultimaLng: number | null = null;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private rutasService: RutasService,
    private callesService: CallesService
  ) {}

  async ngOnInit() {

    this.userRole = (await this.authService.getUserRole()) || '';

    console.log("Rol usuario:", this.userRole);

    if (this.userRole === 'ciudadano') {

      this.cargarDatosMapa();

    }

    if (this.userRole === 'conductor') {

      this.cargarVehiculos();
      this.cargarDatosMapa();

    }

  }

  cargarDatosMapa() {

    this.rutasService.getRutas().subscribe((res: any) => {
      this.rutas = res.data || [];
    });

    this.callesService.getCalles().subscribe((res: any) => {
      this.calles = res.data || [];
    });

  }

  cargarVehiculos() {

    this.vehiculos = [

      { id: 1, placa: "ABC123", modelo: "Compactador" },
      { id: 2, placa: "XYZ987", modelo: "Camión Recolector" },
      { id: 3, placa: "DEF456", modelo: "Volqueta" }

    ];

  }

  async validarIdentidad() {

    try {

      const photo = await Camera.getPhoto({
        quality: 50,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });

      if (photo) {

        this.identidadValidada = true;
        alert("✅ Identidad validada correctamente");

      }

    } catch {

      alert("❌ Validación cancelada");

    }

  }

  async iniciarRecorrido() {

    if (!this.vehiculoSeleccionado) {

      alert("Seleccione un vehículo");
      return;

    }

    if (!this.identidadValidada) {

      alert("Debe validar identidad primero");
      return;

    }

    this.tracking = true;

    await this.sincronizarDatos();

    this.watchId = await Geolocation.watchPosition({}, async (position) => {

      if (!position) return;

      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;

      console.log("📍", this.lat, this.lng);

      if (this.ultimaLat !== null && this.ultimaLng !== null) {

        const distancia = this.calcularDistancia(
          this.ultimaLat,
          this.ultimaLng,
          this.lat,
          this.lng
        );

        this.distanciaAcumulada += distancia;

        if (this.distanciaAcumulada >= 1) {

          await this.dispararHito();
          this.distanciaAcumulada = 0;

        }

      }

      this.ultimaLat = this.lat;
      this.ultimaLng = this.lng;

      this.enviarCoordenadas();

    });

  }

  detenerRecorrido() {

    if (!this.tracking) return;

    this.tracking = false;

    if (this.watchId) {

      Geolocation.clearWatch({ id: this.watchId });
      this.watchId = null;

    }

    alert("Recorrido detenido");

  }

  regresar() {

    if (this.tracking) {

      this.detenerRecorrido();

    }

    window.history.back();

  }

  hayInternet(): boolean {

    return navigator.onLine;

  }

  async guardarOffline(data: any) {

    const { value } = await Preferences.get({ key: 'datosOffline' });

    let datos = value ? JSON.parse(value) : [];

    datos.push(data);

    await Preferences.set({
      key: 'datosOffline',
      value: JSON.stringify(datos),
    });

  }

  private async postTrackingData(data: any) {

    const base = `${environment.apiUrl}`;

    const urls: string[] = environment.trackingEndpoints.map(
      (endpoint) => `${base}/${endpoint}?perfil_id=${environment.perfilUrl}`
    );

    for (const url of urls) {

      try {

        await firstValueFrom(this.http.post(url, data));

        return true;

      } catch (error: any) {

        if (error?.status !== 404) {

          throw error;

        }

      }

    }

    return false;

  }

  async sincronizarDatos() {

    if (!this.hayInternet()) return;

    const { value } = await Preferences.get({ key: 'datosOffline' });

    if (!value) return;

    const datos = JSON.parse(value);

    for (let item of datos) {

      try {

        await this.postTrackingData(item);

      } catch {

        break;

      }

    }

    await Preferences.remove({ key: 'datosOffline' });

  }

  async enviarCoordenadas() {

    const data = {

      lat: this.lat,
      lng: this.lng,
      fecha: new Date(),
      vehiculo: this.vehiculoSeleccionado

    };

    if (this.hayInternet()) {

      try {

        await this.postTrackingData(data);

      } catch {

        await this.guardarOffline(data);

      }

    } else {

      await this.guardarOffline(data);

    }

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

  toRad(valor: number) {

    return (valor * Math.PI) / 180;

  }

  async dispararHito() {

    try {

      const image = await Camera.getPhoto({
        quality: 50,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
      });

      const base64Image = 'data:image/jpeg;base64,' + image.base64String;

      const data = {

        lat: this.lat,
        lng: this.lng,
        fecha: new Date(),
        imagen: base64Image,
        vehiculo: this.vehiculoSeleccionado

      };

      if (this.hayInternet()) {

        try {

          await this.postTrackingData(data);

        } catch {

          await this.guardarOffline(data);

        }

      } else {

        await this.guardarOffline(data);

      }

    } catch {

      console.log("📸 Foto cancelada");

    }

  }

}