import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { PreferenciasService } from './preferencias.service';

@Injectable({ providedIn: 'root' })
export class NotificacionesService {

  constructor(private prefsService: PreferenciasService) {}

  async solicitarPermiso(): Promise<boolean> {
    try {
      const estado = await LocalNotifications.checkPermissions();
      if (estado.display === 'granted') return true;
      const resultado = await LocalNotifications.requestPermissions();
      return resultado.display === 'granted';
    } catch (e) {
      console.warn('No se pudo solicitar permiso de notificaciones:', e);
      return false;
    }
  }

  // Dispara una notificación local si el usuario las tiene activadas en
  // Configuración y el permiso del sistema está concedido — si cualquiera
  // de las dos falla, se omite en silencio (no debe romper el flujo que
  // la llama, ej. iniciar/detener un recorrido).
  async notificar(title: string, body: string): Promise<void> {
    try {
      const prefs = await this.prefsService.obtener();
      if (!prefs.notificaciones) return;

      const permiso = await LocalNotifications.checkPermissions();
      if (permiso.display !== 'granted') return;

      await LocalNotifications.schedule({
        notifications: [{
          id:    Date.now() % 2147483647,
          title,
          body,
          schedule: { at: new Date(Date.now() + 500) },
        }],
      });
    } catch (e) {
      console.warn('Error mostrando notificación local:', e);
    }
  }
}
