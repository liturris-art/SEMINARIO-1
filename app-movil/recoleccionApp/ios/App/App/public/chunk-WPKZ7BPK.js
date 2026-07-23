import {
  Preferences
} from "./chunk-ONELXWRX.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-L4S7MW2T.js";
import {
  __async
} from "./chunk-Q3N56TRI.js";

// src/app/services/offline-sqlite.service.ts
var _OfflineSqliteService = class _OfflineSqliteService {
  constructor() {
    this.cola = Promise.resolve();
  }
  encolar(tarea) {
    const resultado = this.cola.then(tarea, tarea);
    this.cola = resultado.then(() => void 0, () => void 0);
    return resultado;
  }
  // ── Inicialización de la BD ───────────────────────────────
  // Se llama una vez al arrancar la app (desde AppComponent.initializeApp).
  // Crea la tabla si no existe.
  init() {
    return __async(this, null, function* () {
      return this.encolar(() => __async(this, null, function* () {
        try {
          const { CapacitorSQLite, SQLiteConnection } = yield import("./esm-BVRMLDYY.js");
          const sqlite = new SQLiteConnection(CapacitorSQLite);
          const db = yield sqlite.createConnection("cleanroute_offline", false, "no-encryption", 1, false);
          try {
            yield db.open();
            yield db.execute(`
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
            yield sqlite.closeConnection("cleanroute_offline", false);
          }
          console.log("\u2705 SQLite inicializado correctamente");
        } catch (e) {
          console.warn("SQLite no disponible, usando Preferences como fallback:", e);
        }
      }));
    });
  }
  // ── Guardar un punto GPS (con foto opcional) ─────────────
  guardar(punto) {
    return __async(this, null, function* () {
      return this.encolar(() => __async(this, null, function* () {
        try {
          const { CapacitorSQLite, SQLiteConnection } = yield import("./esm-BVRMLDYY.js");
          const sqlite = new SQLiteConnection(CapacitorSQLite);
          const db = yield sqlite.createConnection("cleanroute_offline", false, "no-encryption", 1, false);
          try {
            yield db.open();
            yield db.run(`INSERT INTO puntos_offline (recorridoId, lat, lon, foto, timestamp)
             VALUES (?, ?, ?, ?, ?)`, [punto.recorridoId, punto.lat, punto.lon, punto.foto ?? null, punto.timestamp]);
          } finally {
            yield sqlite.closeConnection("cleanroute_offline", false);
          }
        } catch {
          yield this._guardarEnPreferences(punto);
        }
      }));
    });
  }
  // ── Leer todos los puntos pendientes de sincronizar ───────
  obtenerTodos() {
    return __async(this, null, function* () {
      return this.encolar(() => __async(this, null, function* () {
        try {
          const { CapacitorSQLite, SQLiteConnection } = yield import("./esm-BVRMLDYY.js");
          const sqlite = new SQLiteConnection(CapacitorSQLite);
          const db = yield sqlite.createConnection("cleanroute_offline", false, "no-encryption", 1, false);
          try {
            yield db.open();
            const res = yield db.query("SELECT * FROM puntos_offline ORDER BY timestamp ASC");
            return res.values ?? [];
          } finally {
            yield sqlite.closeConnection("cleanroute_offline", false);
          }
        } catch {
          return yield this._leerDePreferences();
        }
      }));
    });
  }
  // ── Eliminar todos los registros (tras sincronización OK) ─
  limpiar() {
    return __async(this, null, function* () {
      return this.encolar(() => __async(this, null, function* () {
        try {
          const { CapacitorSQLite, SQLiteConnection } = yield import("./esm-BVRMLDYY.js");
          const sqlite = new SQLiteConnection(CapacitorSQLite);
          const db = yield sqlite.createConnection("cleanroute_offline", false, "no-encryption", 1, false);
          try {
            yield db.open();
            yield db.execute("DELETE FROM puntos_offline");
          } finally {
            yield sqlite.closeConnection("cleanroute_offline", false);
          }
        } catch {
          yield Preferences.remove({ key: "datosOffline" });
        }
      }));
    });
  }
  // ── Contar registros pendientes ───────────────────────────
  contarPendientes() {
    return __async(this, null, function* () {
      const datos = yield this.obtenerTodos();
      return datos.length;
    });
  }
  // ── Fallback: Preferences (si SQLite no está disponible) ──
  _guardarEnPreferences(punto) {
    return __async(this, null, function* () {
      const { value } = yield Preferences.get({ key: "datosOffline" });
      const datos = value ? JSON.parse(value) : [];
      datos.push(punto);
      yield Preferences.set({ key: "datosOffline", value: JSON.stringify(datos) });
    });
  }
  _leerDePreferences() {
    return __async(this, null, function* () {
      const { value } = yield Preferences.get({ key: "datosOffline" });
      return value ? JSON.parse(value) : [];
    });
  }
};
_OfflineSqliteService.\u0275fac = function OfflineSqliteService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OfflineSqliteService)();
};
_OfflineSqliteService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OfflineSqliteService, factory: _OfflineSqliteService.\u0275fac, providedIn: "root" });
var OfflineSqliteService = _OfflineSqliteService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OfflineSqliteService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  OfflineSqliteService
};
//# sourceMappingURL=chunk-WPKZ7BPK.js.map
