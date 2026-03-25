import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { VehiculosService } from '../../services/vehiculos/vehiculos';
import { RutasService } from '../../services/rutas/rutas';
import { CallesService } from '../../services/calles/calles';

import { Ruta } from 'src/interfaces/Rutas';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ConfiguracionPage implements OnInit {

  vehiculos: any[] = [];
  rutas: Ruta[] = [];
  calles: any[] = [];

  vehiculoSeleccionado: any;
  rutaSeleccionada?: Ruta;
  calleSeleccionada: any;

  cargandoDatos: boolean = false;
  errorMessage: string = '';

  constructor(
    private vehiculosService: VehiculosService,
    private rutasService: RutasService,
    private callesService: CallesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {

    this.cargandoDatos = true;
    this.errorMessage = '';

    // VEHICULOS
    this.vehiculosService.getVehiculos().subscribe({
      next: (res: any) => {
        this.vehiculos = res?.data ?? res ?? [];
      },
      error: (err) => {
        console.error('Error cargando vehículos', err);
        this.errorMessage = 'No se pudieron cargar los vehículos';
      }
    });

    // RUTAS
    this.rutasService.getRutas().subscribe({
      next: (res: any) => {
        this.rutas = res?.data ?? res ?? [];
      },
      error: (err) => {
        console.error('Error cargando rutas', err);
        this.errorMessage = 'No se pudieron cargar las rutas';
      }
    });

    // CALLES
    this.callesService.getCalles().subscribe({
      next: (res: any) => {
        this.calles = res?.data ?? res ?? [];
      },
      error: (err) => {
        console.error('Error cargando calles', err);
        this.errorMessage = 'No se pudieron cargar las calles';
      },
      complete: () => {
        this.cargandoDatos = false;
      }
    });

  }

  continuar(): void {

    if (!this.vehiculoSeleccionado || !this.rutaSeleccionada) {
      alert('Seleccione vehículo y ruta');
      return;
    }

    const config = {
      vehiculo: this.vehiculoSeleccionado,
      ruta: this.rutaSeleccionada,
      calle: this.calleSeleccionada
    };

    // guardar configuración local
    localStorage.setItem('config', JSON.stringify(config));

    console.log('Configuración guardada:', config);

    // navegar al mapa/home
    this.router.navigate(['/home']);
  }

}