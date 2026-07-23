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
    // Supabase es la fuente principal: tiene nombre_ruta, placa,
    // distancia_km y el estado 'programada' que el API del docente no
    // expone. El API (/misrecorridos) queda como respaldo por si
    // Supabase no responde, aunque con menos detalle.
    try {
      this.recorridos = await this.recorridosService.getRecorridosLocales();
      if (!this.recorridos.length) throw new Error('Sin datos locales');
    } catch (e: any) {
      try {
        const res = await firstValueFrom(this.recorridosService.getRecorridos());
        this.recorridos = Array.isArray(res) ? res : (res?.data || []);
      } catch {
        this.recorridos = [];
      }
    } finally {
      this.cargando = false;
    }
  }

  duracion(r: Recorrido): string {
    // Una ruta "programada" (guardada con el botón "Guardar ruta" pero
    // nunca iniciada) no tiene duración — antes caía en la rama "En
    // curso" porque tampoco tiene r.fin, dando a entender que un GPS
    // estaba activo cuando en realidad nadie ha salido a recolectar.
    if (r.estado === 'programada') return '—';
    if (!r.fin) return 'En curso';
    const finMs = new Date(r.fin).getTime();
    const inicioMs = new Date(r.inicio).getTime();
    if (isNaN(finMs) || isNaN(inicioMs)) return '—';
    const mins = Math.round((finMs - inicioMs) / 60000);
    if (mins < 60) return `${mins} min`;
    return `${Math.floor(mins/60)}h ${mins%60}m`;
  }

  // Un recorrido suspendido (caducidad) tiene fin_en igual que uno
  // finalizado normalmente — sin esto se mostraría como "Completado".
  // Una ruta "programada" tampoco tiene fin — sin distinguirla se
  // mostraba como "En curso" (ver duracion()).
  etiqueta(r: Recorrido): string {
    if (r.estado === 'suspendido') return 'Suspendido';
    if (r.estado === 'programada') return 'Programada';
    return r.fin ? 'Completado' : 'En curso';
  }

  fecha(iso: string): string {
    const d = iso ? new Date(iso) : null;
    if (!d || isNaN(d.getTime())) return 'Sin fecha';
    return d.toLocaleDateString('es-CO', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  }

  volver() { this.router.navigate(['/menu']); }
}
