import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { AuthService } from '../../services/auth.service';
import { BiometricService } from '../../services/biometric.service';
import { OfflineSqliteService } from '../../services/offline-sqlite.service';


interface Preferencias {
  biometria:       boolean;
  notificaciones:  boolean;
  modoOscuro:      boolean;
  gpsAlta:         boolean;
  unidadDistancia: 'km' | 'mi';
  idioma:          'es' | 'en';
}

const PREFS_KEY = 'appPreferencias';

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

  prefs: Preferencias = {
    biometria:       false,
    notificaciones:  true,
    modoOscuro:      false,
    gpsAlta:         true,
    unidadDistancia: 'km',
    idioma:          'es',
  };

  version             = '1.0.0';
  biometricDisponible = false;

  constructor(
    private authService:    AuthService,
    private biometric:      BiometricService,
    private offlineService: OfflineSqliteService,
    private router:         Router,
    private toastCtrl:      ToastController,
    private loadingCtrl:    LoadingController,
    private alertCtrl:      AlertController,  
  ) {}
 
  async cerrarSesion() {

  localStorage.clear();
  sessionStorage.clear();

  await this.authService.logout();

  this.router.navigateByUrl('/login');
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
    const { value } = await Preferences.get({ key: PREFS_KEY });
    if (value) this.prefs = { ...this.prefs, ...JSON.parse(value) };
  }

  async guardarPreferencias() {
    await Preferences.set({ key: PREFS_KEY, value: JSON.stringify(this.prefs) });
  }

  async onToggleBiometria(e: any) {
    this.prefs.biometria = e.detail.checked;
    if (!this.prefs.biometria) await this.biometric.deleteCredentials();
    await this.guardarPreferencias();
    this.showToast(this.prefs.biometria ? 'Biometría activada' : 'Biometría desactivada', 'success');
  }

  async onToggle(campo: keyof Preferencias, e: any) {
    (this.prefs as any)[campo] = e.detail.checked;
    await this.guardarPreferencias();
  }

  async onSelectChange(campo: keyof Preferencias, e: any) {
    (this.prefs as any)[campo] = e.detail.value;
    await this.guardarPreferencias();
    this.showToast('Preferencia guardada', 'success');
  }

  irCambiarPassword() { this.router.navigate(['/forgot-password']); }
  irPerfil()          { this.router.navigate(['/perfil']); }

  // FIX: logout directo, sin AlertController.
  // El confirm() nativo del sistema operativo tampoco se usa porque
  // en producción Android puede no responder correctamente.
  async logout() {
    const loading = await this.loadingCtrl.create({ message: 'Cerrando sesión...', spinner: 'crescent' });
    await loading.present();
    try {
      await loading.dismiss();
      // Navegar primero para evitar que el guard bloquee
      this.router.navigate(['/login'], { replaceUrl: true });
      // Cerrar sesión en Supabase en segundo plano
      setTimeout(() => this.authService.logout(), 300);
    } catch (e) {
      await loading.dismiss();
      console.error('Error logout:', e);
      this.router.navigate(['/login'], { replaceUrl: true });
    }
  }

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
