import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  standalone: true
})
export class MapViewComponent implements AfterViewInit {

  @Input() rutas:any[] = [];
  @Input() calles:any[] = [];
  @Input() userRole:string = '';

  map!:L.Map;

  ngAfterViewInit(){
    this.inicializarMapa();
    this.dibujarRutas();
    this.dibujarCalles();
  }

  inicializarMapa(){

    setTimeout(()=>{

      this.map = L.map('map').setView([4.6097,-74.0817],13);

      L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution:'© OpenStreetMap'
        }
      ).addTo(this.map);

      // recalcular tamaño
      setTimeout(()=>{
        this.map.invalidateSize();
      },300);

      this.dibujarRutas();
if(this.userRole === "conductor"){
   this.mostrarUbicacionConductor();
}
    },300);

  }
  
dibujarCalles() {

  if (!this.calles || this.calles.length === 0) return;

  this.calles.forEach((calle:any) => {

    if (!calle.latitud || !calle.longitud) return;

    const marker = L.marker([
      calle.latitud,
      calle.longitud
    ]).addTo(this.map);

    marker.bindPopup(`
      <b>Punto de recolección</b><br>
      ${calle.nombre || 'Sin nombre'}
    `);

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
mostrarUbicacionConductor(){

  navigator.geolocation.watchPosition((pos)=>{

    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    L.marker([lat,lng])
      .addTo(this.map)
      .bindPopup("🚛 Camión recolector");

  });

}
}