import {
  Injectable,
  Router,
  SupabaseService,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-L4S7MW2T.js";
import {
  registerPlugin
} from "./chunk-OIVHZRLR.js";
import {
  __async
} from "./chunk-Q3N56TRI.js";

// node_modules/capacitor-native-biometric/dist/esm/definitions.js
var BiometryType;
(function(BiometryType2) {
  BiometryType2[BiometryType2["NONE"] = 0] = "NONE";
  BiometryType2[BiometryType2["TOUCH_ID"] = 1] = "TOUCH_ID";
  BiometryType2[BiometryType2["FACE_ID"] = 2] = "FACE_ID";
  BiometryType2[BiometryType2["FINGERPRINT"] = 3] = "FINGERPRINT";
  BiometryType2[BiometryType2["FACE_AUTHENTICATION"] = 4] = "FACE_AUTHENTICATION";
  BiometryType2[BiometryType2["IRIS_AUTHENTICATION"] = 5] = "IRIS_AUTHENTICATION";
  BiometryType2[BiometryType2["MULTIPLE"] = 6] = "MULTIPLE";
})(BiometryType || (BiometryType = {}));
var BiometricAuthError;
(function(BiometricAuthError2) {
  BiometricAuthError2[BiometricAuthError2["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
  BiometricAuthError2[BiometricAuthError2["BIOMETRICS_UNAVAILABLE"] = 1] = "BIOMETRICS_UNAVAILABLE";
  BiometricAuthError2[BiometricAuthError2["USER_LOCKOUT"] = 2] = "USER_LOCKOUT";
  BiometricAuthError2[BiometricAuthError2["BIOMETRICS_NOT_ENROLLED"] = 3] = "BIOMETRICS_NOT_ENROLLED";
  BiometricAuthError2[BiometricAuthError2["USER_TEMPORARY_LOCKOUT"] = 4] = "USER_TEMPORARY_LOCKOUT";
  BiometricAuthError2[BiometricAuthError2["AUTHENTICATION_FAILED"] = 10] = "AUTHENTICATION_FAILED";
  BiometricAuthError2[BiometricAuthError2["APP_CANCEL"] = 11] = "APP_CANCEL";
  BiometricAuthError2[BiometricAuthError2["INVALID_CONTEXT"] = 12] = "INVALID_CONTEXT";
  BiometricAuthError2[BiometricAuthError2["NOT_INTERACTIVE"] = 13] = "NOT_INTERACTIVE";
  BiometricAuthError2[BiometricAuthError2["PASSCODE_NOT_SET"] = 14] = "PASSCODE_NOT_SET";
  BiometricAuthError2[BiometricAuthError2["SYSTEM_CANCEL"] = 15] = "SYSTEM_CANCEL";
  BiometricAuthError2[BiometricAuthError2["USER_CANCEL"] = 16] = "USER_CANCEL";
  BiometricAuthError2[BiometricAuthError2["USER_FALLBACK"] = 17] = "USER_FALLBACK";
})(BiometricAuthError || (BiometricAuthError = {}));

// node_modules/capacitor-native-biometric/dist/esm/index.js
var NativeBiometric = registerPlugin("NativeBiometric", {
  web: () => import("./web-2QDIXXEC.js").then((m) => new m.NativeBiometricWeb())
});

// src/app/services/biometric.service.ts
var _BiometricService = class _BiometricService {
  constructor() {
    this.server = "recoleccion_app";
  }
  // 🔍 verificar si hay biometría disponible
  isAvailable() {
    return __async(this, null, function* () {
      try {
        const result = yield NativeBiometric.isAvailable();
        console.log("Biometr\xEDa disponible:", result);
        return result.isAvailable;
      } catch (error) {
        console.log("Biometr\xEDa no disponible:", error);
        return false;
      }
    });
  }
  // 💾 guardar credenciales
  saveCredentials(username, password) {
    return __async(this, null, function* () {
      try {
        yield NativeBiometric.setCredentials({
          username,
          password,
          server: this.server
        });
        console.log("Credenciales guardadas");
      } catch (error) {
        console.log("Error guardando credenciales:", error);
      }
    });
  }
  // 📥 obtener credenciales
  getCredentials() {
    return __async(this, null, function* () {
      try {
        const credentials = yield NativeBiometric.getCredentials({
          server: this.server
        });
        console.log("Credenciales obtenidas");
        return {
          username: credentials.username,
          password: credentials.password
        };
      } catch (error) {
        console.log("No hay credenciales guardadas");
        return null;
      }
    });
  }
  // 👁 autenticación biométrica
  verifyIdentity() {
    return __async(this, null, function* () {
      try {
        yield NativeBiometric.verifyIdentity({
          reason: "Autenticaci\xF3n biom\xE9trica",
          title: "Iniciar sesi\xF3n",
          subtitle: "Usa tu rostro o huella",
          description: "Confirma tu identidad"
        });
        console.log("Biometr\xEDa verificada");
        return true;
      } catch (error) {
        console.log("Biometr\xEDa cancelada o fallida");
        return false;
      }
    });
  }
  // 🗑 eliminar credenciales
  deleteCredentials() {
    return __async(this, null, function* () {
      try {
        yield NativeBiometric.deleteCredentials({
          server: this.server
        });
        console.log("Credenciales eliminadas");
      } catch (error) {
        console.log("Error eliminando credenciales:", error);
      }
    });
  }
};
_BiometricService.\u0275fac = function BiometricService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BiometricService)();
};
_BiometricService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BiometricService, factory: _BiometricService.\u0275fac, providedIn: "root" });
var BiometricService = _BiometricService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BiometricService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/auth.service.ts
var _AuthService = class _AuthService {
  constructor(router, biometricService, supabaseService) {
    this.router = router;
    this.biometricService = biometricService;
    this.supabaseService = supabaseService;
  }
  get supabase() {
    return this.supabaseService.getClient();
  }
  register(email, password, dataExtra) {
    return __async(this, null, function* () {
      const { data, error } = yield this.supabase.auth.signUp({
        email,
        password,
        options: { data: dataExtra }
      });
      if (error)
        throw error;
      return data;
    });
  }
  login(email, password) {
    return __async(this, null, function* () {
      const { data, error } = yield this.supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error)
        throw error;
      yield this.biometricService.saveCredentials(email, password);
      return data;
    });
  }
  logout() {
    return __async(this, null, function* () {
      try {
        yield this.supabase.auth.signOut();
      } catch (e) {
        console.warn("signOut error:", e);
      }
      this.router.navigate(["/login"]);
    });
  }
  getUser() {
    return __async(this, null, function* () {
      const { data, error } = yield this.supabase.auth.getUser();
      if (error) {
        console.error("Error obteniendo usuario:", error);
        return null;
      }
      return data.user;
    });
  }
  getUserProfile() {
    return __async(this, null, function* () {
      const user = yield this.getUser();
      if (!user)
        return null;
      return {
        id: user.id,
        email: user.email,
        nombre: user.user_metadata?.["nombre"] || "",
        documento: user.user_metadata?.["documento"] || "",
        telefono: user.user_metadata?.["telefono"] || "",
        rol: user.user_metadata?.["rol"] || ""
      };
    });
  }
  isLoggedIn() {
    return __async(this, null, function* () {
      const { data } = yield this.supabase.auth.getSession();
      return !!data.session;
    });
  }
  getUserRole() {
    return __async(this, null, function* () {
      const user = yield this.getUser();
      return user?.user_metadata?.["rol"] || "";
    });
  }
  resetPassword(email) {
    return __async(this, null, function* () {
      const { error } = yield this.supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "recoleccionapp://reset-password"
      });
      if (error)
        throw error;
    });
  }
  updatePassword(newPassword) {
    return __async(this, null, function* () {
      const { error } = yield this.supabase.auth.updateUser({ password: newPassword });
      if (error)
        throw error;
      return true;
    });
  }
  handlePasswordRecoverySession() {
    return __async(this, null, function* () {
      const { data } = yield this.supabase.auth.getSession();
      return !!data.session;
    });
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(Router), \u0275\u0275inject(BiometricService), \u0275\u0275inject(SupabaseService));
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }, { type: BiometricService }, { type: SupabaseService }], null);
})();

export {
  BiometricService,
  AuthService
};
//# sourceMappingURL=chunk-RFRASXTM.js.map
