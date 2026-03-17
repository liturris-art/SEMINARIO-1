import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType } from '@capacitor/camera';
import { NgIf } from '@angular/common';
import { NativeBiometric } from 'capacitor-native-biometric';
import { AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets/marker-icon-2x.png',
  iconUrl: 'assets/marker-icon.png',
  shadowUrl: 'assets/marker-shadow.png',
});
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, NgIf],
})
export class HomePage {

  latitud: number | null = null;
  longitud: number | null = null;
  foto: string | undefined;
  
  biometriaValidada = false;
  recorridoActivo = false;
  watchId: any;
  ruta: any[] = [];
  constructor() {}
  
  map: any;
  polyline: any;
  
  // 📍 GPS
  async obtenerUbicacion() {
    const coordinates = await Geolocation.getCurrentPosition();

    this.latitud = coordinates.coords.latitude;
    this.longitud = coordinates.coords.longitude;

    console.log('Latitud:', this.latitud);
    console.log('Longitud:', this.longitud);
  }

  // 📷 Cámara
  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });

    this.foto = image.webPath;
  }

  //authenticacion facial
 async validarBiometria() {
  try {

    const result = await NativeBiometric.isAvailable();

    if (!result.isAvailable) {
      alert("Biometría no disponible");
      return;
    }

    await NativeBiometric.verifyIdentity({
      reason: "Valide su identidad para iniciar el recorrido",
      title: "Autenticación requerida",
      subtitle: "Use su huella o rostro",
      description: "Confirme identidad del conductor"
    });

    this.biometriaValidada = true;

    alert("Identidad verificada ✅");

  } catch (error) {
    alert("Autenticación fallida ❌");
  }
}

async iniciarRecorrido() {

  if (!this.biometriaValidada) {
    alert("Debe validar su identidad primero");
    return;
  }

  this.recorridoActivo = true;
  this.ruta = [];

  this.watchId = await Geolocation.watchPosition(
    { enableHighAccuracy: true },
    (position, err) => {

      if (position) {

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const punto = {
          lat,
          lng,
          tiempo: new Date()
        };

        this.ruta.push(punto);

        // Centrar mapa
        this.map.setView([lat, lng], 16);

        // Dibujar línea
        const latlngs = this.ruta.map(p => [p.lat, p.lng]);

        if (this.polyline) {
          this.polyline.setLatLngs(latlngs);
        } else {
          this.polyline = L.polyline(latlngs).addTo(this.map);
        }

        console.log("Nuevo punto:", punto);
      }

      if (err) {
        console.error("Error GPS:", err);
      }

    }
  );
}

async finalizarRecorrido() {

  if (this.watchId) {
    await Geolocation.clearWatch({ id: this.watchId });
  }

  this.recorridoActivo = false;

  console.log("Ruta completa:", this.ruta);

  alert("Recorrido finalizado 🚗");

  // Aquí después enviaremos this.ruta al backend
}

ngAfterViewInit() {
  this.cargarMapa();
}

cargarMapa() {

  this.map = L.map('map').setView([4.60971, -74.08175], 13); // Bogotá ejemplo

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(this.map);

}

}