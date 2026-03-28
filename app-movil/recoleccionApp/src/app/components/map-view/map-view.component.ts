import { Component, AfterViewInit, Input } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  standalone: true
})
export class MapViewComponent implements AfterViewInit {

  @Input() rutas:any[]=[];
  @Input() calles:any[]=[];
  @Input() userRole:string='';

  map!:L.Map;
  camionMarker:any;

  rutaCiudadano:any[]=[];
  lineaCiudadano:any;

  camionIcon = L.icon({
    iconUrl:'assets/icon/camion.png',
    iconSize:[40,40],
    iconAnchor:[20,40]
  });

  calleIcon = L.icon({
    iconUrl:'assets/icon/punto.png',
    iconSize:[25,25],
    iconAnchor:[12,25]
  });

  ngAfterViewInit(){
    this.inicializarMapa();
  }
actualizarCamion(lat:number,lng:number){

  if(!this.map) return;

  if(!this.camionMarker){

    this.camionMarker = L.marker(
      [lat,lng],
      { icon:this.camionIcon }
    ).addTo(this.map);

  }else{

    this.camionMarker.setLatLng([lat,lng]);

  }

}
  /* =========================
     INICIALIZAR MAPA
  ========================= */

  inicializarMapa(){

    setTimeout(()=>{

      this.map = L.map('map').setView([4.6097,-74.0817],13);

      L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { attribution:'© OpenStreetMap contributors' }
      ).addTo(this.map);

      setTimeout(()=>{ this.map.invalidateSize(); },300);

      this.dibujarRutas();
      this.dibujarCalles();
      this.cargarRutaGuardada();

      if(this.userRole==="conductor"){
        this.iniciarSeguimiento();
      }

    },300);

  }

  /* =========================
     DIBUJAR RUTAS API
  ========================= */

  dibujarRutas(){

    if(!this.rutas) return;

    this.rutas.forEach(ruta => {

      try{

        const coords = JSON.parse(ruta.shape);

        const latlngs = coords.map((c:any)=>[
          c[1],
          c[0]
        ]);

        L.polyline(latlngs,{
          color:"blue",
          weight:6
        }).addTo(this.map);

      }catch(e){
        console.log("Error leyendo ruta", e);
      }

    });

  }

  /* =========================
     MARCADORES CALLES
  ========================= */

  dibujarCalles(){

    if(!this.calles) return;

    this.calles.forEach(calle=>{

      L.marker(
        [calle.lat,calle.lng],
        {icon:this.calleIcon}
      )
      .addTo(this.map)
      .bindPopup("📍 Punto de recolección");

    });

  }

  /* =========================
     CENTRAR MAPA EN USUARIO
  ========================= */

  async centrarMapa(){

    const position = await Geolocation.getCurrentPosition();

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    this.map.setView([lat,lng],16);

  }

  /* =========================
     GPS CAMIÓN EN TIEMPO REAL
  ========================= */

  async iniciarSeguimiento(){

    Geolocation.watchPosition({}, (position) => {

      if(!position) return;

      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      if(!this.camionMarker){

        this.camionMarker = L.marker(
          [lat,lng],
          {icon:this.camionIcon}
        ).addTo(this.map);

      }else{

        this.camionMarker.setLatLng([lat,lng]);

      }

      this.map.setView([lat,lng],16);

    });

  }

  /* =========================
     MARCAR RUTA CIUDADANO
  ========================= */

  activarMarcadoRuta(){

    this.map.on("click",(e:any)=>{

      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      this.rutaCiudadano.push([lat,lng]);

      L.marker([lat,lng]).addTo(this.map);

      if(this.lineaCiudadano){
        this.map.removeLayer(this.lineaCiudadano);
      }

      this.lineaCiudadano = L.polyline(
        this.rutaCiudadano,
        {color:"red",weight:4}
      ).addTo(this.map);

    });

  }

  /* =========================
     GUARDAR RUTA CIUDADANO
  ========================= */

  guardarRutaCiudadano(){

    localStorage.setItem(
      "rutaCiudadano",
      JSON.stringify(this.rutaCiudadano)
    );

    alert("Ruta guardada");

  }

  /* =========================
     CARGAR RUTA GUARDADA
  ========================= */

  cargarRutaGuardada(){

    const ruta = localStorage.getItem("rutaCiudadano");

    if(!ruta) return;

    this.rutaCiudadano = JSON.parse(ruta);

    this.lineaCiudadano = L.polyline(
      this.rutaCiudadano,
      {color:"red"}
    ).addTo(this.map);

  }

  /* =========================
     PUNTO MÁS CERCANO
  ========================= */

  calcularPuntoMasCercano(lat:number,lng:number){

    let distanciaMin = Infinity;
    let punto:any = null;

    this.rutas.forEach(ruta=>{

      try{

        const coords = JSON.parse(ruta.shape);

        coords.forEach((p:any)=>{

          const d = this.map.distance([lat,lng],p);

          if(d < distanciaMin){

            distanciaMin = d;
            punto = p;

          }

        });

      }catch(e){}

    });

    return punto;

  }

  /* =========================
     IR A RUTA MÁS CERCANA
  ========================= */

  async irARutaMasCercana(){

    const position = await Geolocation.getCurrentPosition();

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const punto = this.calcularPuntoMasCercano(lat,lng);

    if(!punto) return;

    L.polyline(
      [
        [lat,lng],
        punto
      ],
      {color:"green",weight:5}
    ).addTo(this.map);

  }

}