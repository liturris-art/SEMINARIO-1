import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { App } from '@capacitor/app';
import { Preferences } from '@capacitor/preferences';
import { AnimationBuilder, IonApp, IonRouterOutlet, AlertController, ToastController } from '@ionic/angular/standalone';
import { AuthService } from './services/auth.service';
import { SupabaseService } from './services/supabase.service';
import { OfflineSqliteService } from './services/offline-sqlite.service';
import { filter } from 'rxjs/operators';
import { conTimeout } from './utils/con-timeout';
import { pageTransition } from './animations/page-transition';

// Tramo donde se usa la transición personalizada (ver
// animations/page-transition.ts) — el resto de la app sigue con la
// animación por defecto de Ionic, que ya se veía bien.
const TRAMO_ANIMADO: [string, string] = ['/bienvenida', '/login'];

// Rutas donde el botón atrás debe cerrar la app en vez de navegar
const RUTAS_RAIZ = ['/bienvenida', '/home', '/menu', '/login'];

// ── Caducidad de sesión por inactividad ──────────────────────
// Antes la sesión de Supabase se quedaba abierta para siempre: cerrar y
// volver a abrir la app te dejaba exactamente donde ibas, sin pedir login
// de nuevo. Ahora, si la app estuvo en segundo plano más de este tiempo,
// se cierra la sesión — salvo que haya un recorrido activo (no tiene
// sentido desloguear a un conductor a mitad de una ruta real).
const SESION_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutos
const KEY_ULTIMO_BACKGROUND = 'ultimoBackgroundEn';
const KEY_RECORRIDO_ACTIVO  = 'recorridoActivoId';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  private historialRutas: string[] = [];

  // Solo se activa para el tramo bienvenida↔login; en cualquier otra
  // navegación queda undefined y el router-outlet usa la animación
  // por defecto de Ionic (la que ya estaba y se veía bien).
  bienvenidaAnimation?: AnimationBuilder;

  constructor(
    private authService:   AuthService,
    private supabaseService: SupabaseService,
    private offlineService: OfflineSqliteService,
    private router:        Router,
    private alertCtrl:     AlertController,
    private toastCtrl:     ToastController,
  ) {
    this.initializeApp();
    this.escucharDeepLinks();
    this.rastrearHistorial();
    this.manejarBotonAtras();
    this.rastrearInactividad();
    this.rastrearAnimacionBienvenida();
  }

  // ── Animación solo para bienvenida↔login ──────────────────
  private rastrearAnimacionBienvenida() {
    this.router.events.pipe(
      filter((e): e is NavigationStart => e instanceof NavigationStart),
    ).subscribe(e => {
      const desde = this.router.url;
      const hacia = e.url;
      const esTramoAnimado =
        (TRAMO_ANIMADO.includes(desde) && TRAMO_ANIMADO.includes(hacia)) && desde !== hacia;
      this.bienvenidaAnimation = esTramoAnimado ? pageTransition : undefined;
    });
  }

  // ── Caducidad de sesión ───────────────────────────────────
  // Guarda cuándo la app pasó a segundo plano, y al volver a primer
  // plano revisa si ya pasó el tiempo límite para forzar el logout.
  private rastrearInactividad() {
    App.addListener('appStateChange', ({ isActive }) => {
      if (isActive) {
        // OJO: no llamar aquí a otro método que también use
        // supabase.auth.getSession() en paralelo (ya lo hace
        // verificarExpiracionSesion() vía isLoggedIn()). supabase-js
        // serializa sus llamadas de auth con un lock interno, y dos
        // llamadas concurrentes en este WebView pueden quedar
        // esperándose una a la otra indefinidamente.
        this.verificarExpiracionSesion();
      } else {
        Preferences.set({ key: KEY_ULTIMO_BACKGROUND, value: Date.now().toString() });
      }
    });
  }

  private async verificarExpiracionSesion() {
    try {
      const { value } = await Preferences.get({ key: KEY_ULTIMO_BACKGROUND });
      if (!value) return; // nunca estuvo en segundo plano en esta instalación

      const inactivoMs = Date.now() - parseInt(value, 10);
      if (inactivoMs < SESION_TIMEOUT_MS) return;

      // No desloguear si hay un recorrido en curso: el conductor puede
      // llevar horas manejando con la pantalla apagada.
      const { value: recorridoActivo } = await Preferences.get({ key: KEY_RECORRIDO_ACTIVO });
      if (recorridoActivo) return;

      const logueado = await conTimeout(this.authService.isLoggedIn(), 6000, false);
      if (logueado) {
        await this.authService.logout();
        // Antes esto pasaba en silencio — se sentía como que la app fallaba
        // sin razón en vez de explicar por qué se volvió al login.
        const t = await this.toastCtrl.create({
          message: 'Cerramos tu sesión por inactividad. Vuelve a ingresar.',
          color: 'warning', duration: 3500, position: 'top',
        });
        await t.present();
      }
    } catch (e) {
      console.warn('Error verificando expiración de sesión:', e);
    }
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
          let logueado = false;
          try { logueado = await this.authService.isLoggedIn(); }
          catch (e) { console.warn('Error verificando sesión en botón atrás:', e); }
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

      // Cubre el arranque en frío: si Android mató el proceso mientras
      // estaba en segundo plano, "appStateChange" nunca se dispara y el
      // único momento para revisar la caducidad es este.
      await this.verificarExpiracionSesion();

      // FIX #4: no redirigir a login — dejar que las rutas decidan.
      // La pantalla de bienvenida es la raíz para ambos casos (ver
      // app.routes.ts); esto es solo un respaldo por si el router no
      // navegó solo desde '/' al arrancar en frío.
      const url = this.router.url;
      if (!url || url === '/') this.router.navigate(['/bienvenida']);
    } catch (e) {
      console.error('Error en initializeApp:', e);
    }
  }
}
