import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class MenuPage {

  constructor(private router: Router) {}

  iniciarRuta(){
    this.router.navigate(['/navegacion']);
  }

  verMapa(){
    this.router.navigate(['/home']);
  }

  configuracion(){
    this.router.navigate(['/configuracion']);
  }

  logout(){
    this.router.navigate(['/login']);
  }

}