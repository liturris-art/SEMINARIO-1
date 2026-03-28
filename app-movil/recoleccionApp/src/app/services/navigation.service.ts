import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class NavigationService {

constructor(private http:HttpClient){}

getRoute(lat1:number,lng1:number,lat2:number,lng2:number){

return this.http.get(
`https://router.project-osrm.org/route/v1/driving/${lng1},${lat1};${lng2},${lat2}?overview=full&geometries=geojson`
);

}

}