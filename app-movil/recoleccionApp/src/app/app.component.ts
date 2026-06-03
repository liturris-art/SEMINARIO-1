import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { App } from '@capacitor/app';
import { IonApp, IonRouterOutlet, AlertController } from '@ionic/angular/standalone';
import { AuthService } from './services/auth.service';
import { SupabaseService } from './services/supabase.service';
import { OfflineSqliteService } from './services/offline-sqlite.service';
import { filter } from 'rxjs/operators';

// Rutas donde el botón atrás debe cerrar la app en vez de navegar
const RUTAS_RAIZ = ['/home', '/menu', '/login'];

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  private historialRutas: string[] = [];

  constructor(
    private authService:   AuthService,
    private supabaseService: SupabaseService,
    private offlineService: OfflineSqliteService,
    private router:        Router,
    private alertCtrl:     AlertController,
  ) {
    this.initializeApp();
    this.escucharDeepLinks();
    this.rastrearHistorial();
    this.manejarBotonAtras();
  }

  // ── FIX #14: rastrear historial de rutas ─────────────────
  // Permite que el botón atrás navegue al sitio correcto
  // y NO vuelva al login si ya hay sesión activa.
  private rastrearHistorial() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.historialRutas.push(e.urlAfterRedirects);
    });
  }

  // ── FIX #14: botón atrás del hardware Android ────────────
  private manejarBotonAtras() {
    App.addListener('backButton', async () => {
      const rutaActual = this.router.url;

      // En rutas raíz → preguntar si quiere salir de la app
      if (RUTAS_RAIZ.some(r => rutaActual.startsWith(r))) {
        const alert = await this.alertCtrl.create({
          header:  'Salir',
          message: '¿Deseas salir de la aplicación?',
          buttons: [
            { text: 'Cancelar', role: 'cancel' },
            { text: 'Salir', handler: () => App.exitApp() },
          ],
        });
        await alert.present();
        return;
      }

      // En cualquier otra ruta → ir atrás en el historial
      // pero NUNCA ir a login si el usuario tiene sesión
      const hayHistorial = this.historialRutas.length > 1;
      if (hayHistorial) {
        this.historialRutas.pop();
        const anterior = this.historialRutas[this.historialRutas.length - 1];

        // Verificar sesión antes de navegar a login
        if (anterior?.includes('login')) {
          const logueado = await this.authService.isLoggedIn();
          if (logueado) {
            this.router.navigate(['/menu'], { replaceUrl: true });
            return;
          }
        }
        window.history.back();
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  // ── DEEP LINKS ────────────────────────────────────────────
  private escucharDeepLinks() {
    App.addListener('appUrlOpen', async ({ url }) => {
      await this.manejarDeepLink(url);
    });
  }

  private async manejarDeepLink(url: string) {
    try {
      if (!url.includes('reset-password') && !url.includes('type=recovery')) return;

      const fragmento = url.includes('#') ? url.split('#')[1] : url.split('?')[1];
      if (fragmento) {
        const params      = new URLSearchParams(fragmento);
        const accessToken = params.get('access_token');
        const refresh     = params.get('refresh_token');
        const tokenHash   = params.get('token_hash');
        const type        = params.get('type');
        const sb          = this.supabaseService.getClient();

        if (accessToken && refresh) {
          await sb.auth.setSession({ access_token: accessToken, refresh_token: refresh });
        } else if (tokenHash && type === 'recovery') {
          await sb.auth.verifyOtp({ token_hash: tokenHash, type: 'recovery' });
        }
      }
      this.router.navigate(['/reset-password'], { replaceUrl: true });
    } catch {
      this.router.navigate(['/login']);
    }
  }

  // ── INICIALIZACIÓN ────────────────────────────────────────
  async initializeApp() {
    try {
      await this.offlineService.init();

      // FIX #4: no redirigir a login — dejar que las rutas decidan
      // El ciudadano entra directo, el conductor ve el home y puede
      // usar las funciones públicas del mapa sin autenticarse.
      const isLogged = await this.authService.isLoggedIn();
      if (!isLogged) {
        // Solo redirigir a home (vista pública), NO a login
        const url = this.router.url;
        if (!url || url === '/') this.router.navigate(['/home']);
      }
    } catch (e) {
      console.error('Error en initializeApp:', e);
    }
  }
}
