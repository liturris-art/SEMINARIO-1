import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-view',
  template: `
    <div class="map-container">
      <div id="map" class="map-view"></div>
      <div class="map-overlay" *ngIf="loading">
        <ion-spinner name="crescent"></ion-spinner>
        <p>Cargando mapa...</p>
      </div>
    </div>
  `,
  styles: [
    `
      .map-container {
        position: relative;
        width: 100%;
        height: 400px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .map-view {
        width: 100%;
        height: 100%;
        z-index: 1;
      }

      .map-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 10;

        ion-spinner {
          margin-bottom: 10px;
        }

        p {
          margin: 0;
          color: var(--ion-color-primary);
          font-weight: 500;
        }
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class MapViewComponent implements OnInit, AfterViewInit {
  @Input() rutas: any[] = [];
  @Input() calles: any[] = [];
  @Input() userRole: string = '';

  private map: any;
  loading: boolean = true;

  ngOnInit() {
    // Fix para íconos de Leaflet en Angular
    this.fixLeafletIcons();
  }

  ngAfterViewInit() {
    this.initializeMap();
  }

  private fixLeafletIcons() {
    // Solución alternativa: usar íconos de CDN o crear íconos personalizados
    const iconUrl =
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png';
    const iconRetinaUrl =
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png';
    const shadowUrl =
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png';

    L.Icon.Default.mergeOptions({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
    });
  }

  private initializeMap() {
    // Coordenadas iniciales (Bogotá, Colombia - ejemplo)
    const initialLat = 4.711;
    const initialLng = -74.0721;

    this.map = L.map('map').setView([initialLat, initialLng], 13);

    // Capa de mapa OpenStreetMap (gratuita, no requiere API key)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(this.map);

    // Agregar marcadores y rutas después de inicializar
    setTimeout(() => {
      this.addRoutesToMap();
      this.addStreetsToMap();
      this.loading = false;
    }, 1000);
  }

  private addRoutesToMap() {
    if (!this.rutas || this.rutas.length === 0) return;

    this.rutas.forEach((ruta: any) => {
      if (ruta.coordenadas && ruta.coordenadas.length > 0) {
        // Crear polyline para la ruta
        const latlngs = ruta.coordenadas.map((coord: any) => [
          coord.lat,
          coord.lng,
        ]);

        const routeLine = L.polyline(latlngs, {
          color: ruta.color_hex || '#3388ff',
          weight: 4,
          opacity: 0.8,
        }).addTo(this.map);

        // Agregar popup con información de la ruta
        routeLine.bindPopup(`
          <b>${ruta.nombre_ruta}</b><br>
          <span style="color: ${ruta.color_hex};">●</span> Ruta activa
        `);
      }
    });
  }

  private addStreetsToMap() {
    if (!this.calles || this.calles.length === 0) return;

    this.calles.forEach((calle: any) => {
      if (calle.lat && calle.lng) {
        const marker = L.marker([calle.lat, calle.lng]).addTo(this.map);

        marker.bindPopup(`
          <b>${calle.nombre_calle}</b><br>
          <small>Zona: ${calle.zona || 'N/A'}</small>
        `);
      }
    });
  }

  // Método para centrar el mapa en una ubicación específica
  centerMap(lat: number, lng: number, zoom: number = 15) {
    if (this.map) {
      this.map.setView([lat, lng], zoom);
    }
  }

  // Método para agregar un marcador temporal (útil para tracking GPS)
  addTempMarker(lat: number, lng: number, title: string = 'Ubicación actual') {
    if (this.map) {
      const marker = L.marker([lat, lng]).addTo(this.map);
      marker.bindPopup(`<b>${title}</b>`).openPopup();
      return marker;
    }
    return null;
  }
}
