import { Component, OnInit, NgZone } from '@angular/core';
import { VehiculosService } from '../../services/vehiculos/vehiculos';
import { Vehiculo } from '../../../interfaces/Vehiculo';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  selector: 'app-vehiculos-lista',
  templateUrl: './vehiculos-lista.html',
  styleUrls: ['./vehiculos-lista.css']
})
export class VehiculosListaComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  cargando = true;
  error: string | null = null;

  modalConfirmVisible = false;
  modalSuccessVisible = false;
  vehiculoAEliminar: string | null = null;

  constructor(
    private vehiculosService: VehiculosService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.obtenerVehiculos();
  }

  obtenerVehiculos() {
    this.vehiculosService.getVehiculos().subscribe({
      next: (data) => {
        // Aseguramos que Angular detecte cambios
        this.ngZone.run(() => {
          this.vehiculos = data.data || [];
          this.cargando = false;
          this.error = null;
        });
      },
      error: () => {
        this.ngZone.run(() => {
          this.error = 'Error al cargar los vehículos';
          this.cargando = false;
        });
      }
    });
  }

  crearVehiculo() {
    this.router.navigate(['/vehiculos/registro']);
  }

  gotoRutas() {
    this.router.navigate(['/rutas']);
  }

  actualizarVehiculo(id?: string) {
    if (!id) return;
    this.router.navigate(['/vehiculos/editar', id]);
  }

  eliminarVehiculo(id: string) {
    this.ngZone.run(() => {
      this.vehiculoAEliminar = id;
      this.modalConfirmVisible = true;
    });
  }

  cerrarConfirm() {
    this.ngZone.run(() => {
      this.modalConfirmVisible = false;
      this.vehiculoAEliminar = null;
    });
  }

  confirmarEliminacion() {
    if (!this.vehiculoAEliminar) return;

    this.vehiculosService.deleteVehiculo(this.vehiculoAEliminar).subscribe({
      next: () => {
        this.ngZone.run(() => {
          this.modalConfirmVisible = false;
          this.modalSuccessVisible = true;
          this.vehiculoAEliminar = null;
          this.obtenerVehiculos(); // refrescar lista
        });
      },
      error: (err) => {
        console.error('Error al eliminar vehículo:', err);
      }
    });
  }

  cerrarSuccess() {
    this.ngZone.run(() => {
      this.modalSuccessVisible = false;
    });
  }
}