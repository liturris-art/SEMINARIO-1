import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { VehiculosService } from '../../services/vehiculos/vehiculos';
import { Vehiculo } from '../../../interfaces/Vehiculo';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
  ],
  selector: 'app-vehiculos-registro',
  templateUrl: './vehiculos-registro.html',
  styleUrl: './vehiculos-registro.css'
})
export class VehiculosRegistro {

  private perfilUrl = environment.perfilUrl;

  datos: Vehiculo = {
    perfil_id: this.perfilUrl, 
    placa: '',
    marca: '',
    modelo: '',
    activo: true,
  };

  modalSuccessVisible = false;
  modalErrorVisible = false;
  errorMensaje = "";

  constructor(private vehiculosService: VehiculosService, private router: Router) { }

  registroVehiculo() {
    // El botón es type="button" (no dispara ngSubmit) y no hay
    // FormGroup/Validators detrás del `required` del input — validar
    // aquí para no poder registrar un vehículo con campos vacíos.
    if (!this.datos.placa?.trim() || !this.datos.marca?.trim() || !this.datos.modelo?.trim()) {
      this.errorMensaje = 'Completa placa, marca y modelo antes de registrar.';
      this.modalErrorVisible = true;
      return;
    }
    this.vehiculosService.createVehiculo(this.datos).subscribe({
      next: () => {
        this.modalSuccessVisible = true;
      },
      error: (error) => {
        this.errorMensaje = "Error al registrar el vehículo";
        this.modalErrorVisible = true;
      }
    })
  }

  cerrarSuccess() {
  this.modalSuccessVisible = false;
  this.router.navigate(['/vehiculos']);
}

cerrarError() {
  this.modalErrorVisible = false;
}

volverLista() {
  this.router.navigate(['/vehiculos']);
}
}
