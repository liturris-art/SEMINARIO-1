import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';   // FIX: reemplaza .toPromise() deprecado
import { RecorridosService, Recorrido } from '../../services/recorridos/recorridos.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HistorialPage implements OnInit {

  recorridos: Recorrido[] = [];
  cargando = true;
  error    = false;

  constructor(
    private recorridosService: RecorridosService,
    private router: Router,
  ) {}

  async ngOnInit() { await this.cargar(); }

  async cargar() {
    this.cargando = true;
    this.error    = false;
    try {
      const res = await firstValueFrom(this.recorridosService.getRecorridos());
      // FIX #7: la API devuelve data directamente o en .data
      this.recorridos = Array.isArray(res) ? res : (res?.data || []);
    } catch (e: any) {
      console.error('Error cargando historial:', e);
      // FIX #7: si falla la API, intentar desde Supabase
      try {
        this.recorridos = await this.recorridosService.getRecorridosLocales();
      } catch {
        this.error = true;
      }
    } finally {
      this.cargando = false;
    }
  }

  duracion(r: Recorrido): string {
    if (!r.fin) return 'En curso';
    const mins = Math.round(
      (new Date(r.fin).getTime() - new Date(r.inicio).getTime()) / 60000
    );
    if (mins < 60) return `${mins} min`;
    return `${Math.floor(mins/60)}h ${mins%60}m`;
  }

  fecha(iso: string): string {
    return new Date(iso).toLocaleDateString('es-CO', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  }

  volver() { this.router.navigate(['/menu']); }
}
