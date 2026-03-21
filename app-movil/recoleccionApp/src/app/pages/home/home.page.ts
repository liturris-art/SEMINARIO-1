import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Preferences } from '@capacitor/preferences';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class HomePage {

  constructor(private http: HttpClient) {}

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
    this.tracking = false;

    if (this.watchId) {
      Geolocation.clearWatch({ id: this.watchId });
    }
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
      value: JSON.stringify(datos)
    });

    console.log('💾 Guardado offline');
  }

  // 🔄 SINCRONIZACIÓN
  async sincronizarDatos() {
    if (!this.hayInternet()) return;

    const { value } = await Preferences.get({ key: 'datosOffline' });
    if (!value) return;

    const datos = JSON.parse(value);
    const url = `${environment.apiUrl}/${environment.perfilUrl}`;

    for (let item of datos) {
      try {
        await firstValueFrom(this.http.post(url, item));
      } catch (error) {
        console.log('❌ Error sincronizando', error);
        return; // se detiene si falla
      }
    }

    await Preferences.remove({ key: 'datosOffline' });

    console.log('🔄 Datos sincronizados');
  }

  // 📡 ENVÍO GPS
  async enviarCoordenadas() {
    const data = {
      lat: this.lat,
      lng: this.lng,
      fecha: new Date()
    };

    const url = `${environment.apiUrl}/${environment.perfilUrl}`;

    if (this.hayInternet()) {
      try {
        await firstValueFrom(this.http.post(url, data));
        console.log('✅ Coordenada enviada');
      } catch {
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
        source: CameraSource.Camera
      });

      const base64Image = 'data:image/jpeg;base64,' + image.base64String;

      const data = {
        lat: this.lat,
        lng: this.lng,
        fecha: new Date(),
        imagen: base64Image
      };

      const url = `${environment.apiUrl}/${environment.perfilUrl}`;

      if (this.hayInternet()) {
        try {
          await firstValueFrom(this.http.post(url, data));
          console.log('📸 Evidencia enviada');
        } catch {
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