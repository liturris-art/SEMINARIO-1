import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

// ─────────────────────────────────────────────────────────────────────────────
// OfflineSqliteService
//
// Implementa el buffer local exigido por la especificación (punto 4).
// Usa @capacitor-community/sqlite como motor de base de datos local.
//
// INSTALACIÓN (ejecutar en la raíz del proyecto):
//   npm install @capacitor-community/sqlite
//   npx cap sync android
//
// IMPORTANTE: En app.component.ts o main.ts debes inicializar el plugin
// antes de usarlo en Android:
//   import { defineCustomElements } from '@ionic/pwa-elements/loader';
//   defineCustomElements(window);
// ─────────────────────────────────────────────────────────────────────────────

export interface PuntoOffline {
  recorridoId: string;
  lat:         number;
  lon:         number;
  foto?:       string | null;   // Base64 de la foto del hito (opcional)
  timestamp:   number;          // epoch ms para reconstrucción del recorrido
}

@Injectable({ providedIn: 'root' })
export class OfflineSqliteService {

  // ── Serialización de operaciones ──────────────────────────
  // Todas las operaciones de SQLite comparten una sola conexión con
  // nombre fijo ('cleanroute_offline'). Si dos llamadas se solapan
  // (p. ej. varios fixes de GPS seguidos), abrir la conexión por
  // segunda vez antes de que la primera se cierre lanza un error del
  // plugin — y ese error dejaba la conexión huérfana porque el close
  // solo corría en el camino feliz. Encolar aquí garantiza que las
  // llamadas se ejecuten una a la vez.
  private cola: Promise<unknown> = Promise.resolve();

  private encolar<T>(tarea: () => Promise<T>): Promise<T> {
    const resultado = this.cola.then(tarea, tarea);
    this.cola = resultado.then(() => undefined, () => undefined);
    return resultado;
  }

  // ── Inicialización de la BD ───────────────────────────────
  // Se llama una vez al arrancar la app (desde AppComponent.initializeApp).
  // Crea la tabla si no existe.
  async init(): Promise<void> {
    return this.encolar(async () => {
      try {
        // Importación dinámica para evitar errores si el plugin no está instalado
        const { CapacitorSQLite, SQLiteConnection } = await import('@capacitor-community/sqlite') as any;
        const sqlite = new SQLiteConnection(CapacitorSQLite);
        const db     = await sqlite.createConnection('cleanroute_offline', false, 'no-encryption', 1, false);

        try {
          await db.open();
          await db.execute(`
            CREATE TABLE IF NOT EXISTS puntos_offline (
              id          INTEGER PRIMARY KEY AUTOINCREMENT,
              recorridoId TEXT    NOT NULL,
              lat         REAL    NOT NULL,
              lon         REAL    NOT NULL,
              foto        TEXT,
              timestamp   INTEGER NOT NULL
            );
          `);
        } finally {
          await sqlite.closeConnection('cleanroute_offline', false);
        }

        console.log('✅ SQLite inicializado correctamente');
      } catch (e) {
        // Si SQLite no está disponible (web/emulador sin plugin),
        // caemos silenciosamente a Preferences como fallback.
        console.warn('SQLite no disponible, usando Preferences como fallback:', e);
      }
    });
  }

  // ── Guardar un punto GPS (con foto opcional) ─────────────
  async guardar(punto: PuntoOffline): Promise<void> {
    return this.encolar(async () => {
      try {
        const { CapacitorSQLite, SQLiteConnection } = await import('@capacitor-community/sqlite') as any;
        const sqlite = new SQLiteConnection(CapacitorSQLite);
        const db     = await sqlite.createConnection('cleanroute_offline', false, 'no-encryption', 1, false);

        try {
          await db.open();
          await db.run(
            `INSERT INTO puntos_offline (recorridoId, lat, lon, foto, timestamp)
             VALUES (?, ?, ?, ?, ?)`,
            [punto.recorridoId, punto.lat, punto.lon, punto.foto ?? null, punto.timestamp],
          );
        } finally {
          await sqlite.closeConnection('cleanroute_offline', false);
        }
      } catch {
        // Fallback a Preferences
        await this._guardarEnPreferences(punto);
      }
    });
  }

  // ── Leer todos los puntos pendientes de sincronizar ───────
  async obtenerTodos(): Promise<PuntoOffline[]> {
    return this.encolar(async () => {
      try {
        const { CapacitorSQLite, SQLiteConnection } = await import('@capacitor-community/sqlite') as any;
        const sqlite = new SQLiteConnection(CapacitorSQLite);
        const db     = await sqlite.createConnection('cleanroute_offline', false, 'no-encryption', 1, false);

        try {
          await db.open();
          const res = await db.query('SELECT * FROM puntos_offline ORDER BY timestamp ASC');
          return (res.values ?? []) as PuntoOffline[];
        } finally {
          await sqlite.closeConnection('cleanroute_offline', false);
        }
      } catch {
        return await this._leerDePreferences();
      }
    });
  }

  // ── Eliminar todos los registros (tras sincronización OK) ─
  async limpiar(): Promise<void> {
    return this.encolar(async () => {
      try {
        const { CapacitorSQLite, SQLiteConnection } = await import('@capacitor-community/sqlite') as any;
        const sqlite = new SQLiteConnection(CapacitorSQLite);
        const db     = await sqlite.createConnection('cleanroute_offline', false, 'no-encryption', 1, false);

        try {
          await db.open();
          await db.execute('DELETE FROM puntos_offline');
        } finally {
          await sqlite.closeConnection('cleanroute_offline', false);
        }
      } catch {
        await Preferences.remove({ key: 'datosOffline' });
      }
    });
  }

  // ── Contar registros pendientes ───────────────────────────
  async contarPendientes(): Promise<number> {
    const datos = await this.obtenerTodos();
    return datos.length;
  }

  // ── Fallback: Preferences (si SQLite no está disponible) ──
  private async _guardarEnPreferences(punto: PuntoOffline): Promise<void> {
    const { value } = await Preferences.get({ key: 'datosOffline' });
    const datos: PuntoOffline[] = value ? JSON.parse(value) : [];
    datos.push(punto);
    await Preferences.set({ key: 'datosOffline', value: JSON.stringify(datos) });
  }

  private async _leerDePreferences(): Promise<PuntoOffline[]> {
    const { value } = await Preferences.get({ key: 'datosOffline' });
    return value ? JSON.parse(value) : [];
  }
}
