import { Component, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  standalone: true
})
export class MapViewComponent implements AfterViewInit, OnChanges {

  @Input() rutas: any[] = [];
  @Input() calles: any[] = [];
  @Input() userRole: string = '';

  map!: L.Map;
  camionMarker: any;

  camionIcon = L.icon({
    iconUrl: 'assets/icon/camion.png',
    iconSize: [40,40],
    iconAnchor: [20,40],
    popupAnchor: [0,-40]
  });

  ngAfterViewInit(){
    this.inicializarMapa();
  }

  ngOnChanges(changes: SimpleChanges){

    if(!this.map) return;

    if(changes['rutas']){
      this.dibujarRutas();
    }

    if(changes['calles']){
      this.dibujarCalles();
    }

  }

  inicializarMapa(){

    setTimeout(()=>{

      this.map = L.map('map').setView([4.6097,-74.0817],13);

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        {
          attribution:'© OpenStreetMap'
        }
      ).addTo(this.map);

      setTimeout(()=>{
        this.map.invalidateSize();
      },300);

      this.dibujarRutas();
      this.dibujarCalles();

      if(this.userRole === "conductor"){
        this.iniciarSeguimiento();
      }

    },300);

  }

  dibujarCalles(){

    if(!this.calles || this.calles.length === 0) return;

    this.calles.forEach((calle:any)=>{

      const marker = L.circleMarker(
        [calle.lat, calle.lng],
        {
          radius:8,
          color:"#2ecc71",
          fillColor:"#2ecc71",
          fillOpacity:0.8
        }
      );

      marker
      .addTo(this.map)
      .bindPopup("📍 Punto de recolección");

    });

  }

  dibujarRutas(){

    if(!this.rutas || this.rutas.length===0) return;

    const capas:L.Polyline[]=[];

    this.rutas.forEach(ruta=>{

      if(!ruta.shape) return;

      try{

        const coords = JSON.parse(ruta.shape);

        const linea = L.polyline(coords,{
          color:ruta.color_hex || '#3388ff',
          weight:5
        });

        linea.addTo(this.map);
        capas.push(linea);

      }catch(e){
        console.log("error shape",ruta);
      }

    });

    if(capas.length>0){

      const grupo = L.featureGroup(capas);

      this.map.fitBounds(grupo.getBounds(),{
        padding:[20,20]
      });

    }

  }

  centrarMapa(){

    navigator.geolocation.getCurrentPosition((pos)=>{

      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      this.map.setView([lat,lng],15);

    });

  }

  iniciarSeguimiento(){

    navigator.geolocation.watchPosition((pos)=>{

      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      if(!this.map) return;

      if(this.camionMarker){

        this.camionMarker.setLatLng([lat,lng]);

      }else{

        this.camionMarker = L.marker([lat,lng],{
          icon:this.camionIcon
        })
        .addTo(this.map)
        .bindPopup("🚛 Camión de recolección");

      }

    });

  }

}