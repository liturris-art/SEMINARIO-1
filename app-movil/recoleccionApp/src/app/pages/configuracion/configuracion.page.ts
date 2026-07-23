import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController, AlertController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { AuthService } from '../../services/auth.service';
import { BiometricService } from '../../services/biometric.service';
import { OfflineSqliteService } from '../../services/offline-sqlite.service';
import { NotificacionesService } from '../../services/notificaciones.service';
import { PreferenciasService, Preferencias, PREFS_DEFAULT } from '../../services/preferencias.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls:  ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ConfiguracionPage implements OnInit {

  usuario: { nombre: string; email: string; rol: string; inicial: string } = {
    nombre: '', email: '', rol: '', inicial: '?',
  };

  prefs: Preferencias = { ...PREFS_DEFAULT };

  version             = '1.0.0';
  biometricDisponible = false;
  cerrandoSesion       = false;

  constructor(
    private authService:    AuthService,
    private biometric:      BiometricService,
    private offlineService: OfflineSqliteService,
    private notificaciones: NotificacionesService,
    private prefsService:   PreferenciasService,
    private router:         Router,
    private toastCtrl:      ToastController,
    private alertCtrl:      AlertController,
  ) {}

  async cerrarSesion() {
    // Antes navegaba apenas terminaba logout() sin ningún indicio visual.
    // No se usa LoadingController/ion-loading aquí: es un componente de
    // Ionic con shadow DOM y, como con ion-toggle/ion-select, su overlay
    // no llegaba a aparecer en el WebView nativo de Android — el botón
    // se quedaba "sin hacer nada" porque el código esperaba a que
    // present() resolviera. Un overlay propio en HTML/CSS no depende de eso.
    this.cerrandoSesion = true;
    try {
      // No usar localStorage.clear()/sessionStorage.clear(): borraría el
      // buffer offline de GPS pendiente de sincronizar (Preferences se
      // respalda en localStorage en la plataforma web). authService.logout()
      // ya invalida la sesión de Supabase y navega a /login.
      await this.authService.logout();
    } finally {
      this.cerrandoSesion = false;
    }
  }
    
  async ngOnInit() {
    await this.cargarPerfil();
    await this.cargarPreferencias();
    this.biometricDisponible = await this.biometric.isAvailable();
  }

  async cargarPerfil() {
    const p = await this.authService.getUserProfile();
    if (p) {
      this.usuario = {
        nombre:  p.nombre  || p.email?.split('@')[0] || 'Usuario',
        email:   p.email   || '',
        rol:     p.rol     || '',
        inicial: (p.nombre || p.email || 'U')[0].toUpperCase(),
      };
    }
  }

  async cargarPreferencias() {
    this.prefs = await this.prefsService.obtener();
  }

  async guardarPreferencias() {
    await this.prefsService.guardar(this.prefs);
  }

  async onToggleBiometria(e: any) {
    const anterior = this.prefs.biometria;
    this.prefs.biometria = e.target.checked;
    try {
      if (!this.prefs.biometria) await this.biometric.deleteCredentials();
      await this.guardarPreferencias();
      this.showToast(this.prefs.biometria ? 'Biometría activada' : 'Biometría desactivada', 'success');
    } catch (err) {
      console.error('Error guardando preferencia de biometría:', err);
      this.prefs.biometria = anterior;
      this.showToast('No se pudo guardar la preferencia', 'danger');
    }
  }

  async onToggle(campo: keyof Preferencias, e: any) {
    const anterior = this.prefs[campo];
    const activado = e.target.checked;
    (this.prefs as any)[campo] = activado;

    try {
      // Activar notificaciones requiere permiso del sistema — si lo niegan,
      // no dejar el toggle encendido mostrando algo que no va a funcionar.
      if (campo === 'notificaciones' && activado) {
        const concedido = await this.notificaciones.solicitarPermiso();
        if (!concedido) {
          this.prefs.notificaciones = false;
          await this.guardarPreferencias();
          this.showToast('Permiso de notificaciones denegado', 'danger');
          return;
        }
      }

      await this.guardarPreferencias();
      this.showToast(activado ? 'Preferencia activada' : 'Preferencia desactivada', 'success');
    } catch (err) {
      console.error(`Error guardando preferencia "${campo}":`, err);
      (this.prefs as any)[campo] = anterior;
      this.showToast('No se pudo guardar la preferencia', 'danger');
    }
  }

  async onSelectChange(campo: keyof Preferencias, e: any) {
    const anterior = this.prefs[campo];
    (this.prefs as any)[campo] = e.target.value;
    try {
      await this.guardarPreferencias();
      this.showToast('Preferencia guardada', 'success');
    } catch (err) {
      console.error(`Error guardando preferencia "${campo}":`, err);
      (this.prefs as any)[campo] = anterior;
      this.showToast('No se pudo guardar la preferencia', 'danger');
    }
  }

  irCambiarPassword() { this.router.navigate(['/forgot-password']); }
  irPerfil()          { this.router.navigate(['/perfil']); }

  async confirmarBorrarDatos() {
    const alert = await this.alertCtrl.create({
      header:  'Borrar datos locales',
      message: 'Se eliminarán los datos offline guardados en este dispositivo. ¿Continuar?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Borrar', role: 'destructive', handler: () => this.borrarDatosLocales() },
      ],
    });
    await alert.present();
  }

  async borrarDatosLocales() {
    await this.offlineService.limpiar();
    await Preferences.remove({ key: 'datosOffline' });
    await Preferences.remove({ key: 'rutaCiudadano' });
    await Preferences.remove({ key: 'rutaRegistrada' });
    this.showToast('✅ Datos locales eliminados', 'success');
  }

  abrirSoporte() {
    window.open('mailto:soporte@cleanroute.app?subject=Soporte CleanRoute', '_system');
  }

  volver() { this.router.navigate(['/menu']); }

  private async showToast(message: string, color: 'success' | 'danger' | 'warning') {
    const t = await this.toastCtrl.create({ message, color, duration: 2500, position: 'top' });
    await t.present();
  }
}
