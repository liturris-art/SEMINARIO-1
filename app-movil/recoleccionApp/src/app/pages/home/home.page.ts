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
  // Propiedad para el rol del usuario - añadido para manejar ciudadanos y conductores
  userRole: string = '';

  // Para ciudadanos: mapa y datos
  rutas: any[] = [];
  calles: any[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private rutasService: RutasService,
    private callesService: CallesService,
  ) {}

  async ngOnInit() {
    // Obtener el rol del usuario al iniciar - mejora para roles
    this.userRole = (await this.authService.getUserRole()) || '';

    // Si es ciudadano, cargar datos para el mapa
    if (this.userRole === 'ciudadano') {
      this.cargarDatosMapa();
    }
  }

  // Método para cargar rutas y calles para ciudadanos - añadido para observación
  cargarDatosMapa() {
    this.rutasService.getRutas().subscribe((res: any) => {
      this.rutas = res.data || [];
      console.log('Rutas cargadas para ciudadano:', this.rutas);
    });

    this.callesService.getCalles().subscribe((res: any) => {
      this.calles = res.data || [];
      console.log('Calles cargadas para ciudadano:', this.calles);
    });
  }

  tracking: boolean = false;
  lat: number = 0;
  lng: number = 0;
  watchId: any;

  distanciaAcumulada: number = 0;
  ultimaLat: number | null = null;
  ultimaLng: number | null = null;

  // 🚀 INICIAR RECORRIDO
  async iniciarRecorrido() {
    this.tracking = true;

    await this.sincronizarDatos(); // 🔥 primero sincroniza

    this.watchId = await Geolocation.watchPosition({}, async (position) => {
      if (!position) return;

      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;

      console.log('📍', this.lat, this.lng);

      // 📏 DISTANCIA
      if (this.ultimaLat !== null && this.ultimaLng !== null) {
        const distancia = this.calcularDistancia(
          this.ultimaLat,
          this.ultimaLng,
          this.lat,
          this.lng,
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
    if (!this.tracking) {
      alert('No hay recorrido activo.');
      return;
    }

    this.tracking = false;

    if (this.watchId) {
      Geolocation.clearWatch({ id: this.watchId });
      this.watchId = null;
    }

    console.log('⛔ Recorrido detenido');
    alert('Recorrido detenido. Las últimas coordenadas quedan registradas.');
  }

  regresar() {
    if (this.tracking) {
      this.detenerRecorrido();
    }
    window.history.back();
  }

  // 🌐 INTERNET
  hayInternet(): boolean {
    return navigator.onLine;
  }

  // 💾 OFFLINE
  async guardarOffline(data: any) {
    const { value } = await Preferences.get({ key: 'datosOffline' });

    let datos = value ? JSON.parse(value) : [];
    datos.push(data);

    await Preferences.set({
      key: 'datosOffline',
      value: JSON.stringify(datos),
    });

    console.log('💾 Guardado offline');
  }

  // 🔄 SINCRONIZACIÓN
  private async postTrackingData(data: any) {
    const base = `${environment.apiUrl}`;
    const urls: string[] = environment.trackingEndpoints.map(
      (endpoint) => `${base}/${endpoint}?perfil_id=${environment.perfilUrl}`,
    );
    urls.push(`${base}/${environment.perfilUrl}`); // compatibilidad antigua

    let lastError: any;

    for (const url of urls) {
      try {
        await firstValueFrom(this.http.post(url, data));
        console.log('✅ Enviado a', url);
        return true;
      } catch (error: any) {
        lastError = error;
        if (error?.status === 404) {
          console.warn('URL no encontrada, probando otra:', url);
          continue;
        }
        console.warn('Error no 404 en URL', url, error);
        throw error; // fallo de otro tipo, salir para guardar offline
      }
    }

    console.warn('No se encontró endpoint válido. Último error:', lastError);
    return false;
  }

  async sincronizarDatos() {
    if (!this.hayInternet()) return;

    const { value } = await Preferences.get({ key: 'datosOffline' });
    if (!value) return;

    const datos = JSON.parse(value);

    let sincronizados = 0;
    for (let item of datos) {
      try {
        const enviado = await this.postTrackingData(item);
        if (enviado) {
          sincronizados++;
          continue;
        }
        console.log(
          '❌ No se sincronizó este item, queda guardado offline',
          item,
        );
      } catch (error) {
        console.log('❌ Error sincronizando', error);
        break; // dejar restantes para el próximo intento
      }
    }

    if (sincronizados > 0) {
      console.log(`🔄 ${sincronizados} items sincronizados`);
    }

    if (sincronizados === datos.length) {
      await Preferences.remove({ key: 'datosOffline' });
      console.log('🔄 Todos los datos sincronizados y removidos offline');
    }
  }

  // 📡 ENVÍO GPS
  async enviarCoordenadas() {
    const data = {
      lat: this.lat,
      lng: this.lng,
      fecha: new Date(),
    };

    if (this.hayInternet()) {
      try {
        const enviado = await this.postTrackingData(data);
        if (enviado) {
          console.log('✅ Coordenada enviada');
        } else {
          throw new Error('No se encontró endpoint válido para coordenadas');
        }
      } catch (error) {
        console.warn('⚠️ Envío falla, guardo offline', error);
        await this.guardarOffline(data);
      }
    } else {
      await this.guardarOffline(data);
    }
  }

  // 📐 DISTANCIA
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

  // 📸 HITO
  async dispararHito() {
    console.log('📸 HITO ALCANZADO');

    try {
      const image = await Camera.getPhoto({
        quality: 50,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
      });

      const base64Image = 'data:image/jpeg;base64,' + image.base64String;

      const data = {
        lat: this.lat,
        lng: this.lng,
        fecha: new Date(),
        imagen: base64Image,
      };

      if (this.hayInternet()) {
        try {
          const enviado = await this.postTrackingData(data);
          if (enviado) {
            console.log('📸 Evidencia enviada');
          } else {
            throw new Error('No se encontró endpoint válido para hito');
          }
        } catch (error) {
          console.warn('⚠️ Envío de hito falla, guardo offline', error);
          await this.guardarOffline(data);
        }
      } else {
        await this.guardarOffline(data);
      }
    } catch {
      console.log('❌ Cámara cancelada');
    }
  }
}
