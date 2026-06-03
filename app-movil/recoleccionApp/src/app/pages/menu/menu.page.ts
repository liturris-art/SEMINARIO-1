import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class MenuPage implements OnInit {

  usuario: { nombre: string; email: string; rol: string; inicial: string } = {
    nombre: '',
    email: '',
    rol: '',
    inicial: '?',
  };

  // Hora del saludo
  saludo = '';

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    const perfil = await this.authService.getUserProfile();
    if (perfil) {
      this.usuario = {
        nombre:  perfil.nombre  || perfil.email?.split('@')[0] || 'Usuario',
        email:   perfil.email   || '',
        rol:     perfil.rol     || '',
        inicial: (perfil.nombre || perfil.email || 'U')[0].toUpperCase(),
      };
    }

    const hora = new Date().getHours();
    if      (hora < 12) this.saludo = '¡Buenos días';
    else if (hora < 18) this.saludo = '¡Buenas tardes';
    else                this.saludo = '¡Buenas noches';
  }

  ir(ruta: string) { this.router.navigate([ruta]); }
}
