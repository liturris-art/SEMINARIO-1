import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';   // FIX: reemplaza .toPromise() deprecado
import { RecorridosService, Recorrido } from '../../services/recorridos/recorridos.service';

interface Estadisticas {
  total: number;
  completados: number;
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

  stats: Estadisticas = { total: 0, completados: 0, enCurso: 0, tiempoPromedioMin: 0, diasActivos: 0 };
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
    try {
      const res = await firstValueFrom(this.recorridosService.getRecorridos());
      // FIX #6: la API devuelve data directamente o en .data
      this.recorridos = Array.isArray(res) ? res : (res?.data || []);
      this.calcularEstadisticas();
      this.generarBarras();
    } catch (e: any) {
      console.error('Error cargando reportes:', e);
      try {
        this.recorridos = await this.recorridosService.getRecorridosLocales();
        this.calcularEstadisticas();
        this.generarBarras();
      } catch {
        this.error = true;
      }
    } finally {
      this.cargando = false;
    }
  }

  calcularEstadisticas() {
    const r = this.recorridos;
    this.stats.total       = r.length;
    this.stats.completados = r.filter(x => !!x.fin).length;
    this.stats.enCurso     = r.filter(x => !x.fin).length;

    const tiempos = r
      .filter(x => !!x.fin)
      .map(x => (new Date(x.fin!).getTime() - new Date(x.inicio).getTime()) / 60000);
    this.stats.tiempoPromedioMin = tiempos.length
      ? Math.round(tiempos.reduce((a,b) => a+b, 0) / tiempos.length)
      : 0;

    const dias = new Set(r.map(x => new Date(x.inicio).toDateString()));
    this.stats.diasActivos = dias.size;
  }

  generarBarras() {
    const dias = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
    const conteos = new Array(7).fill(0);
    const hoy = new Date().getDay();

    this.recorridos.forEach(r => {
      const d = new Date(r.inicio).getDay();
      conteos[d]++;
    });

    const max = Math.max(...conteos, 1);
    this.barras = Array.from({ length: 7 }, (_, i) => {
      const idx = (hoy - 6 + i + 7) % 7;
      return { dia: dias[idx], pct: Math.round((conteos[idx] / max) * 100), count: conteos[idx] };
    });
  }

  duracionStr(min: number): string {
    if (min < 60) return `${min} min`;
    return `${Math.floor(min/60)}h ${min%60}m`;
  }

  volver() { this.router.navigate(['/menu']); }
}
