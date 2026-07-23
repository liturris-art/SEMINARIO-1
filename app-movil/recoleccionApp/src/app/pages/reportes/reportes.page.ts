import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';   // FIX: reemplaza .toPromise() deprecado
import { RecorridosService, Recorrido } from '../../services/recorridos/recorridos.service';

interface Estadisticas {
  total: number;
  completados: number;
  suspendidos: number;
  enCurso: number;
  tiempoPromedioMin: number;
  diasActivos: number;
}

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ReportesPage implements OnInit {

  stats: Estadisticas = { total: 0, completados: 0, suspendidos: 0, enCurso: 0, tiempoPromedioMin: 0, diasActivos: 0 };
  recorridos: Recorrido[] = [];
  cargando = true;
  error    = false;

  barras: { dia: string; pct: number; count: number }[] = [];

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
    } catch {
      try {
        const res = await firstValueFrom(this.recorridosService.getRecorridos());
        this.recorridos = Array.isArray(res) ? res : (res?.data || []);
      } catch {
        this.recorridos = [];
      }
    } finally {
      this.calcularEstadisticas();
      this.generarBarras();
      this.cargando = false;
    }
  }

  private fechaValidaMs(iso?: string): number | null {
    if (!iso) return null;
    const ms = new Date(iso).getTime();
    return isNaN(ms) ? null : ms;
  }

  calcularEstadisticas() {
    // Una ruta "programada" (guardada con "Guardar ruta" pero nunca
    // iniciada) no es un recorrido real — es solo un plan. Antes se
    // colaba en "En curso" (no tiene fin) e inflaba esa cifra con rutas
    // que nadie ha manejado todavía.
    const r = this.recorridos.filter(x => x.estado !== 'programada');
    // Un recorrido suspendido (caducidad) es un dato inconsistente por
    // definición — no debe contar como completado ni afectar el
    // promedio o los días activos. Igualmente se descarta cualquier
    // registro con fecha de inicio inválida/ausente para que no
    // contamine el promedio ni los días activos con NaN.
    const validos = r.filter(x => x.estado !== 'suspendido' && this.fechaValidaMs(x.inicio) !== null);

    this.stats.total       = r.length;
    this.stats.suspendidos = r.filter(x => x.estado === 'suspendido').length;
    this.stats.completados = validos.filter(x => !!x.fin).length;
    this.stats.enCurso     = validos.filter(x => !x.fin).length;

    const tiempos = validos
      .filter(x => !!x.fin && this.fechaValidaMs(x.fin) !== null)
      .map(x => (this.fechaValidaMs(x.fin)! - this.fechaValidaMs(x.inicio)!) / 60000);
    this.stats.tiempoPromedioMin = tiempos.length
      ? Math.round(tiempos.reduce((a,b) => a+b, 0) / tiempos.length)
      : 0;

    const dias = new Set(validos.map(x => new Date(x.inicio).toDateString()));
    this.stats.diasActivos = dias.size;
  }

  generarBarras() {
    const dias = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
    const conteos = new Array(7).fill(0);
    const hoy = new Date().getDay();

    this.recorridos
      .filter(r => r.estado !== 'suspendido' && r.estado !== 'programada' && this.fechaValidaMs(r.inicio) !== null)
      .forEach(r => { conteos[new Date(r.inicio).getDay()]++; });

    const max = Math.max(...conteos, 1);
    this.barras = Array.from({ length: 7 }, (_, i) => {
      const idx = (hoy - 6 + i + 7) % 7;
      return { dia: dias[idx], pct: Math.round((conteos[idx] / max) * 100), count: conteos[idx] };
    });
  }

  duracionStr(min: number): string {
    if (isNaN(min)) return '—';
    if (min < 60) return `${min} min`;
    return `${Math.floor(min/60)}h ${min%60}m`;
  }

  volver() { this.router.navigate(['/menu']); }
}
