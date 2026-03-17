import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import * as L from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conductor-mapa',
  templateUrl: './mapa.page.html',
  standalone: true,
  imports: [IonContent, IonButton, CommonModule]
})
export class MapaPage implements OnInit {

  map: any;
  marker: any;

  tracking: boolean = false;
  watchId: any;

  constructor() {}

  async ngOnInit() {}

  async ionViewDidEnter() {
    this.loadMap();
  }

  async loadMap() {

    const position = await Geolocation.getCurrentPosition();

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    this.map = L.map('map').setView([lat, lng], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'OSM'
    }).addTo(this.map);

    this.marker = L.marker([lat, lng]).addTo(this.map);
  }

  // 🚀 INICIAR RECORRIDO
  async startTracking() {

    this.tracking = true;

    this.watchId = await Geolocation.watchPosition({}, (position, err) => {

      if (position) {

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        this.marker.setLatLng([lat, lng]);
        this.map.setView([lat, lng]);

        console.log("Posición:", lat, lng);

        // 🔥 AQUÍ luego guardaremos en Supabase

      }

    });

  }

  // ⛔ DETENER RECORRIDO
  stopTracking() {

    this.tracking = false;

    if (this.watchId) {
      Geolocation.clearWatch({ id: this.watchId });
    }

  }

}