import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { conTimeout } from '../utils/con-timeout';

// Antes, si isLoggedIn() fallaba o la sesión ya no era válida, el guard
// mandaba a /login en silencio — sin ningún aviso, se sentía como que la
// app se "quedaba pegada" o fallaba sin razón en vez de explicar qué pasó.
async function avisarYRedirigir(router: Router, mensaje: string) {
  const toastCtrl = inject(ToastController);
  const t = await toastCtrl.create({ message: mensaje, color: 'warning', duration: 3500, position: 'top' });
  await t.present();
  router.navigate(['/login']);
}

export const authGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  try {
    // Límite de tiempo: si la verificación se queda colgada (visto en este
    // WebView), antes la navegación entera se quedaba pegada sin decidir
    // nada. Pasados 6s se trata como "no logueado" (opción más segura) en
    // vez de bloquear la app indefinidamente.
    const isLoggedIn = await conTimeout(authService.isLoggedIn(), 6000, false);
    if (!isLoggedIn) {
      await avisarYRedirigir(router, 'Tu sesión expiró o no has iniciado sesión. Vuelve a ingresar.');
      return false;
    }
    return true;
  } catch (error) {
    console.error('Error en authGuard:', error);
    await avisarYRedirigir(router, 'No se pudo verificar tu sesión. Revisa tu conexión e ingresa de nuevo.');
    return false;
  }
};
