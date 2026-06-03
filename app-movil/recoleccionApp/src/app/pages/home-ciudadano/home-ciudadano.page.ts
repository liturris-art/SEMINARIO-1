import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AuthService }       from '../../services/auth.service';
import { RutasService }      from '../../services/rutas/rutas';
import { CallesService }     from '../../services/calles/calles';
import { RecorridosService } from '../../services/recorridos/recorridos.service';
import { MapViewComponent }  from '../../components/map-view/map-view.component';

@Component({
  selector: 'app-home-ciudadano',
  templateUrl: './home-ciudadano.page.html',
  styleUrls:  ['./home-ciudadano.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, MapViewComponent],
})
export class HomeCiudadanoPage implements OnInit {

  // ── Perfil (puede ser anónimo) ────────────────────────────
  nombreUsuario  = 'Visitante';
  inicialUsuario = 'V';
  tieneSesion    = false;

  // ── Datos del mapa ────────────────────────────────────────
  rutas:  any[] = [];
  calles: any[] = [];

  // ── Estado del camión ─────────────────────────────────────
  camionActivo    = false;
  distanciaCamion = 0;
  etaCamion       = '';

  // ── Próxima recolección ───────────────────────────────────
  proximaFecha = '';
  proximaHora  = '';

  // ── Panel ─────────────────────────────────────────────────
  panelAbierto = true;

  private destroyRef = inject(DestroyRef);

  constructor(
    private authService:       AuthService,
    private rutasService:      RutasService,
    private callesService:     CallesService,
    private recorridosService: RecorridosService,
    private router:            Router,
  ) {}

  async ngOnInit() {
    // Cargar perfil si hay sesión (puede no haberla)
    try {
      const perfil       = await this.authService.getUserProfile();
      this.tieneSesion   = !!perfil;
      this.nombreUsuario = perfil?.nombre || perfil?.email?.split('@')[0] || 'Visitante';
      this.inicialUsuario = this.nombreUsuario[0].toUpperCase();
    } catch {
      this.tieneSesion    = false;
      this.nombreUsuario  = 'Visitante';
      this.inicialUsuario = 'V';
    }

    // Cargar datos del mapa
    this.rutasService.getRutas().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(r => { this.rutas = r?.data || []; });
    this.callesService.getCalles().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(c => { this.calles = c?.data || []; });

    this.cargarEstadoCamion();
    this.calcularProximaRecoleccion();
  }

  // ── Estado del camión (recorridos activos) ────────────────
  cargarEstadoCamion() {
    this.recorridosService.getRecorridos()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: res => {
          const activos = (res?.data || []).filter((r: any) => !r.fin);
          this.camionActivo = activos.length > 0;
          if (this.camionActivo) {
            this.distanciaCamion = Math.round(Math.random() * 800 + 200);
            const mins = Math.round(this.distanciaCamion / 300);
            this.etaCamion = mins < 1 ? 'Llegando' : `~${mins} min`;
          }
        },
        error: () => { this.camionActivo = false; },
      });
  }

  calcularProximaRecoleccion() {
    const dias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
    const next = new Date(); next.setDate(next.getDate() + 2);
    this.proximaFecha = `${dias[next.getDay()]} ${next.getDate()}`;
    this.proximaHora  = '07:00 AM';
  }

  togglePanel()  { this.panelAbierto = !this.panelAbierto; }
  irAlLogin()    { this.router.navigate(['/login']); }
  irAlMenu()     { this.router.navigate(['/menu']); }
}
