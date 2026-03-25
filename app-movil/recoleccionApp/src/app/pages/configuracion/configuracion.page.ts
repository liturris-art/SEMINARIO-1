import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { VehiculosService } from '../../services/vehiculos/vehiculos';
import { RutasService } from '../../services/rutas/rutas';
import { CallesService } from '../../services/calles/calles';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ConfiguracionPage implements OnInit {

  vehiculos: any[] = [];
  rutas: any[] = [];
  calles: any[] = [];

  vehiculoSeleccionado: any;
  rutaSeleccionada: any;
  calleSeleccionada: any;

  cargandoDatos = false;
  errorMessage = '';

  constructor(
    private vehiculosService: VehiculosService,
    private rutasService: RutasService,
    private callesService: CallesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {

    this.cargandoDatos = true;

    this.vehiculosService.getVehiculos().subscribe({
      next: (res: any) => {
        this.vehiculos = res?.data ?? res ?? [];
      },
      error: () => {
        this.errorMessage = 'No se pudieron cargar los vehículos';
      }
    });

    this.rutasService.getRutas().subscribe({
      next: (res: any) => {
        this.rutas = res?.data ?? res ?? [];
      },
      error: () => {
        this.errorMessage = 'No se pudieron cargar las rutas';
      }
    });

    this.callesService.getCalles().subscribe({
      next: (res: any) => {
        this.calles = res?.data ?? res ?? [];
      },
      error: () => {
        this.errorMessage = 'No se pudieron cargar las calles';
      },
      complete: () => {
        this.cargandoDatos = false;
      }
    });

  }

  continuar() {

    if (!this.vehiculoSeleccionado || !this.rutaSeleccionada) {
      alert('Seleccione vehículo y ruta');
      return;
    }

    const config = {
      vehiculo: this.vehiculoSeleccionado,
      ruta: this.rutaSeleccionada,
      calle: this.calleSeleccionada,
    };

    localStorage.setItem('config', JSON.stringify(config));

    this.router.navigate(['/home']);
  }

}