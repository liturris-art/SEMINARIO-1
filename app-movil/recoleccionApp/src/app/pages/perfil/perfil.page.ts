import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PerfilPage implements OnInit {

  usuario: any = {};
  inicial  = '?';
  cargando = true;

  // Edición
  editando  = false;
  nombre    = '';
  telefono  = '';
  guardando = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastCtrl: ToastController,
  ) {}

  async ngOnInit() {
    await this.cargarPerfil();
  }

  async cargarPerfil() {
    this.cargando = true;
    const perfil = await this.authService.getUserProfile();
    if (perfil) {
      this.usuario  = perfil;
      this.nombre   = perfil.nombre   || '';
      this.telefono = perfil.telefono || '';
      this.inicial  = (perfil.nombre || perfil.email || 'U')[0].toUpperCase();
    }
    this.cargando = false;
  }

  toggleEditar() {
    this.editando = !this.editando;
  }

  async guardar() {
    // No se usa LoadingController/ion-loading: ver nota en
    // configuracion.page.ts (cerrarSesion) — su overlay no llega a
    // aparecer en el WebView nativo de Android.
    this.guardando = true;
    try {
      // Actualiza metadata en Supabase
      const supabase = (this.authService as any).supabaseService?.getClient?.();
      if (supabase) {
        await supabase.auth.updateUser({
          data: { nombre: this.nombre, telefono: this.telefono }
        });
      }
      this.usuario.nombre   = this.nombre;
      this.usuario.telefono = this.telefono;
      this.inicial = (this.nombre || this.usuario.email || 'U')[0].toUpperCase();
      this.editando = false;
      this.showToast('✅ Perfil actualizado', 'success');
    } catch {
      this.showToast('Error al guardar', 'danger');
    } finally {
      this.guardando = false;
    }
  }

  volver() { this.router.navigate(['/menu']); }

  private async showToast(msg: string, color: 'success'|'danger') {
    const t = await this.toastCtrl.create({ message: msg, color, duration: 2500, position: 'top' });
    await t.present();
  }
}
