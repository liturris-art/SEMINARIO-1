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
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConfiguracionPage implements OnInit {

  vehiculos: any[] = [];
  rutas: any[] = [];
  calles: any[] = [];

  vehiculoSeleccionado: any;
  rutaSeleccionada: any;
  calleSeleccionada: any;

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

    this.vehiculosService.getVehiculos().subscribe((res: any) => {
      this.vehiculos = res.data; // ✅ CORRECTO
      console.log('🚗 Vehiculos:', this.vehiculos);
    });

    this.rutasService.getRutas().subscribe((res: any) => {
      this.rutas = res.data; // ✅ CORRECTO
      console.log('🛣 Rutas:', this.rutas);
    });

    this.callesService.getCalles().subscribe((res: any) => {
      this.calles = res.data; // ✅ CORRECTO
      console.log('🏙 Calles:', this.calles);
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
      calle: this.calleSeleccionada
    };

    // 💾 guardar configuración
    localStorage.setItem('config', JSON.stringify(config));

    console.log('✅ Config guardada:', config);

    // 🚀 ir al home
    this.router.navigate(['/home']);
  }
}