import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { VehiculosService } from '../../services/vehiculos/vehiculos';
import { RutasService } from '../../services/rutas/rutas';
import { CallesService } from '../../services/calles/calles';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
})
export class ConfiguracionPage implements OnInit {
  vehiculos: any[] = [];
  rutas: any[] = [];
  calles: any[] = [];
  cargandoDatos = false;
  errorMessage = '';

  vehiculoSeleccionado: any;
  rutaSeleccionada: any;
  calleSeleccionada: any;

  constructor(
    private vehiculosService: VehiculosService,
    private rutasService: RutasService,
    private callesService: CallesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.cargandoDatos = true;
    this.errorMessage = '';

    this.vehiculosService.getVehiculos().subscribe({
      next: (res: any) => {
        this.vehiculos = (res?.data ?? res) || [];
        console.log('🚗 Vehiculos:', this.vehiculos);
      },
      error: (err) => {
        console.error('Error vehiculos:', err);
        this.errorMessage = 'No se pudieron cargar los vehículos';
      },
    });

    this.rutasService.getRutas().subscribe({
      next: (res: any) => {
        this.rutas = (res?.data ?? res) || [];
        console.log('🛣 Rutas:', this.rutas);
      },
      error: (err) => {
        console.error('Error rutas:', err);
        this.errorMessage = 'No se pudieron cargar las rutas';
      },
    });

    this.callesService.getCalles().subscribe({
      next: (res: any) => {
        this.calles = (res?.data ?? res) || [];
        console.log('🏙 Calles:', this.calles);
      },
      error: (err) => {
        console.error('Error calles:', err);
        this.errorMessage = 'No se pudieron cargar las calles';
      },
      complete: () => {
        this.cargandoDatos = false;
      },
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

    // 💾 guardar configuración
    localStorage.setItem('config', JSON.stringify(config));

    console.log('✅ Config guardada:', config);

    // 🚀 ir al home
    this.router.navigate(['/home']);
  }
}
