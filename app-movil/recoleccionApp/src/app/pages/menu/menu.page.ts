import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

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

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  verPerfil(){
    this.router.navigate(['/perfil']);
  }

  historial(){
    this.router.navigate(['/historial']);
  }

  reportes(){
    this.router.navigate(['/reportes']);
  }

  sincronizar(){
    console.log(" Sincronizando datos...");
    // luego aquí puedes llamar tu servicio real
  }

  configuracion(){
    this.router.navigate(['/configuracion']);
  }


  verMapa(){
    this.router.navigate(['/home']);
  }

}