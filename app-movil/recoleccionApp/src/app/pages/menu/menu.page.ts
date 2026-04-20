import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class MenuPage {

  constructor(
    private router: Router,
    private menuCtrl: MenuController
  ) {}

  async cerrarMenu() {
    await this.menuCtrl.close();
  }

  async verPerfil() {
    await this.cerrarMenu();
    this.router.navigate(['/perfil']);
  }

  async verMapa() {
    await this.cerrarMenu();
    this.router.navigate(['/home']);
  }

  async historial() {
    await this.cerrarMenu();
    this.router.navigate(['/historial']);
  }

  async reportes() {
    await this.cerrarMenu();
    this.router.navigate(['/reportes']);
  }

  async configuracion() {
    await this.cerrarMenu();
    this.router.navigate(['/configuracion']);
  }
}