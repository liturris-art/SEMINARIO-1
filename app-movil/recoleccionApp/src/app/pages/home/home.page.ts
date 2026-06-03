import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

/**
 * HomePage — solo enruta al rol correcto.
 * NO tiene lógica de mapa ni de conductor ni de ciudadano.
 *
 * ┌─ Conductor (con sesión + rol conductor) ──→ /home-conductor
 * │
 * └─ Ciudadano (sesión ciudadano o sin sesión) ──→ /home-ciudadano
 */
@Component({
  selector: 'app-home',
  template: `
    <ion-content>
      <div style="display:flex;align-items:center;justify-content:center;height:100%">
        <ion-spinner name="crescent" color="primary"></ion-spinner>
      </div>
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  async ngOnInit() {
    try {
      const perfil = await this.authService.getUserProfile();
      const rol    = perfil?.rol?.toLowerCase().trim() || '';

      if (rol === 'conductor') {
        this.router.navigate(['/home-conductor'], { replaceUrl: true });
      } else {
        this.router.navigate(['/home-ciudadano'], { replaceUrl: true });
      }
    } catch {
      // Sin sesión → ciudadano anónimo
      this.router.navigate(['/home-ciudadano'], { replaceUrl: true });
    }
  }
}
