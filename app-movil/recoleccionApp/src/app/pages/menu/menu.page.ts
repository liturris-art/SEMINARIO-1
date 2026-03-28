import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  imports: [IonicModule]
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

}