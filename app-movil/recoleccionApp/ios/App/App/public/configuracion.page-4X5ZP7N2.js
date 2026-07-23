import {
  AlertController,
  BooleanValueAccessorDirective,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToggle,
  IonToolbar,
  IonicModule,
  LoadingController,
  SelectValueAccessorDirective,
  ToastController
} from "./chunk-CJ2DBQBZ.js";
import "./chunk-TMNKWS7J.js";
import "./chunk-W7NNY2EY.js";
import "./chunk-SLUF4FXZ.js";
import "./chunk-5YXBFW2U.js";
import "./chunk-6RUQ2G4X.js";
import "./chunk-LQMW4QLB.js";
import "./chunk-ZL3RWD3T.js";
import "./chunk-F3JJ4YWB.js";
import "./chunk-QOQL43QQ.js";
import "./chunk-AHYMFN5Q.js";
import "./chunk-3EVM26TF.js";
import "./chunk-MRL3ASX7.js";
import "./chunk-UY5PMW67.js";
import "./chunk-7HVVPZID.js";
import "./chunk-WVWBQTTQ.js";
import "./chunk-IVBL4Y7V.js";
import "./chunk-QIRVSBPR.js";
import {
  OfflineSqliteService
} from "./chunk-WPKZ7BPK.js";
import {
  Preferences
} from "./chunk-ONELXWRX.js";
import "./chunk-APRNP3ZL.js";
import {
  AuthService,
  BiometricService
} from "./chunk-RFRASXTM.js";
import {
  CommonModule,
  Component,
  FormsModule,
  NgIf,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L4S7MW2T.js";
import "./chunk-OIVHZRLR.js";
import "./chunk-Q3XTTR4L.js";
import "./chunk-HFIIUGAS.js";
import "./chunk-EYNBDKL4.js";
import "./chunk-GDCLMRGX.js";
import "./chunk-7D2IXJO2.js";
import "./chunk-SQPD43CM.js";
import "./chunk-CIJ2MFME.js";
import "./chunk-YAS4LRVC.js";
import {
  __async,
  __spreadValues
} from "./chunk-Q3N56TRI.js";

// src/app/pages/configuracion/configuracion.page.ts
function ConfiguracionPage_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 18)(2, "div", 48);
    \u0275\u0275element(3, "ion-icon", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "span", 22);
    \u0275\u0275text(6, "Huella / Rostro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8, "Acceso biom\xE9trico al iniciar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "ion-toggle", 28);
    \u0275\u0275listener("ionChange", function ConfiguracionPage_div_23_Template_ion_toggle_ionChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onToggleBiometria($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r1.prefs.biometria);
  }
}
function ConfiguracionPage_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 29);
  }
}
var PREFS_KEY = "appPreferencias";
var _ConfiguracionPage = class _ConfiguracionPage {
  constructor(authService, biometric, offlineService, router, toastCtrl, loadingCtrl, alertCtrl) {
    this.authService = authService;
    this.biometric = biometric;
    this.offlineService = offlineService;
    this.router = router;
    this.toastCtrl = toastCtrl;
    this.loadingCtrl = loadingCtrl;
    this.alertCtrl = alertCtrl;
    this.usuario = {
      nombre: "",
      email: "",
      rol: "",
      inicial: "?"
    };
    this.prefs = {
      biometria: false,
      notificaciones: true,
      modoOscuro: false,
      gpsAlta: true,
      unidadDistancia: "km",
      idioma: "es"
    };
    this.version = "1.0.0";
    this.biometricDisponible = false;
  }
  cerrarSesion() {
    return __async(this, null, function* () {
      yield this.authService.logout();
      this.router.navigateByUrl("/login");
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.cargarPerfil();
      yield this.cargarPreferencias();
      this.biometricDisponible = yield this.biometric.isAvailable();
    });
  }
  cargarPerfil() {
    return __async(this, null, function* () {
      const p = yield this.authService.getUserProfile();
      if (p) {
        this.usuario = {
          nombre: p.nombre || p.email?.split("@")[0] || "Usuario",
          email: p.email || "",
          rol: p.rol || "",
          inicial: (p.nombre || p.email || "U")[0].toUpperCase()
        };
      }
    });
  }
  cargarPreferencias() {
    return __async(this, null, function* () {
      const { value } = yield Preferences.get({ key: PREFS_KEY });
      if (value)
        this.prefs = __spreadValues(__spreadValues({}, this.prefs), JSON.parse(value));
    });
  }
  guardarPreferencias() {
    return __async(this, null, function* () {
      yield Preferences.set({ key: PREFS_KEY, value: JSON.stringify(this.prefs) });
    });
  }
  onToggleBiometria(e) {
    return __async(this, null, function* () {
      this.prefs.biometria = e.detail.checked;
      if (!this.prefs.biometria)
        yield this.biometric.deleteCredentials();
      yield this.guardarPreferencias();
      this.showToast(this.prefs.biometria ? "Biometr\xEDa activada" : "Biometr\xEDa desactivada", "success");
    });
  }
  onToggle(campo, e) {
    return __async(this, null, function* () {
      this.prefs[campo] = e.detail.checked;
      yield this.guardarPreferencias();
    });
  }
  onSelectChange(campo, e) {
    return __async(this, null, function* () {
      this.prefs[campo] = e.detail.value;
      yield this.guardarPreferencias();
      this.showToast("Preferencia guardada", "success");
    });
  }
  irCambiarPassword() {
    this.router.navigate(["/forgot-password"]);
  }
  irPerfil() {
    this.router.navigate(["/perfil"]);
  }
  // FIX: logout directo, sin AlertController.
  // El confirm() nativo del sistema operativo tampoco se usa porque
  // en producción Android puede no responder correctamente.
  logout() {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({ message: "Cerrando sesi\xF3n...", spinner: "crescent" });
      yield loading.present();
      try {
        yield loading.dismiss();
        this.router.navigate(["/login"], { replaceUrl: true });
        setTimeout(() => this.authService.logout(), 300);
      } catch (e) {
        yield loading.dismiss();
        console.error("Error logout:", e);
        this.router.navigate(["/login"], { replaceUrl: true });
      }
    });
  }
  confirmarBorrarDatos() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Borrar datos locales",
        message: "Se eliminar\xE1n los datos offline guardados en este dispositivo. \xBFContinuar?",
        buttons: [
          { text: "Cancelar", role: "cancel" },
          { text: "Borrar", role: "destructive", handler: () => this.borrarDatosLocales() }
        ]
      });
      yield alert.present();
    });
  }
  borrarDatosLocales() {
    return __async(this, null, function* () {
      yield this.offlineService.limpiar();
      yield Preferences.remove({ key: "datosOffline" });
      yield Preferences.remove({ key: "rutaCiudadano" });
      yield Preferences.remove({ key: "rutaRegistrada" });
      this.showToast("\u2705 Datos locales eliminados", "success");
    });
  }
  abrirSoporte() {
    window.open("mailto:soporte@cleanroute.app?subject=Soporte CleanRoute", "_system");
  }
  volver() {
    this.router.navigate(["/menu"]);
  }
  showToast(message, color) {
    return __async(this, null, function* () {
      const t = yield this.toastCtrl.create({ message, color, duration: 2500, position: "top" });
      yield t.present();
    });
  }
};
_ConfiguracionPage.\u0275fac = function ConfiguracionPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfiguracionPage)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(BiometricService), \u0275\u0275directiveInject(OfflineSqliteService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(AlertController));
};
_ConfiguracionPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfiguracionPage, selectors: [["app-configuracion"]], decls: 130, vars: 12, consts: [[1, "cfg-toolbar"], ["slot", "start"], [3, "click"], ["name", "arrow-back-outline", "slot", "icon-only"], [1, "cfg-content"], [1, "perfil-banner", 3, "click"], [1, "perfil-avatar"], [1, "perfil-info"], [1, "perfil-nombre"], [1, "perfil-email"], [1, "perfil-rol"], ["name", "chevron-forward-outline", 1, "perfil-arrow"], [1, "cfg-group"], [1, "group-label"], [1, "cfg-card"], ["class", "cfg-row", 4, "ngIf"], ["class", "cfg-separator", 4, "ngIf"], [1, "cfg-row", "tappable", 3, "click"], [1, "cfg-row-left"], [1, "cfg-icon-wrap", "pink"], ["name", "lock-closed-outline"], [1, "cfg-row-info"], [1, "cfg-row-title"], [1, "cfg-row-sub"], ["name", "chevron-forward-outline", 1, "row-arrow"], [1, "cfg-row"], [1, "cfg-icon-wrap", "blue"], ["name", "notifications-outline"], ["color", "success", 3, "ionChange", "checked"], [1, "cfg-separator"], [1, "cfg-icon-wrap", "dark"], ["name", "moon-outline"], [1, "cfg-icon-wrap", "orange"], ["name", "locate-outline"], [1, "cfg-icon-wrap", "teal"], ["name", "speedometer-outline"], ["interface", "popover", 1, "cfg-select", 3, "ionChange", "value"], ["value", "km"], ["value", "mi"], [1, "cfg-icon-wrap", "red"], ["name", "trash-outline"], ["name", "mail-outline"], [1, "cfg-icon-wrap", "gray"], ["name", "information-circle-outline"], [1, "version-badge"], [1, "logout-wrap"], ["expand", "block", "fill", "outline", "color", "danger", 1, "logout-btn", 3, "click"], ["name", "log-out-outline", "slot", "start"], [1, "cfg-icon-wrap", "green"], ["name", "finger-print-outline"]], template: function ConfiguracionPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1)(3, "ion-button", 2);
    \u0275\u0275listener("click", function ConfiguracionPage_Template_ion_button_click_3_listener() {
      return ctx.volver();
    });
    \u0275\u0275element(4, "ion-icon", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-title");
    \u0275\u0275text(6, "Configuraci\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "ion-content", 4)(8, "div", 5);
    \u0275\u0275listener("click", function ConfiguracionPage_Template_div_click_8_listener() {
      return ctx.irPerfil();
    });
    \u0275\u0275elementStart(9, "div", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 7)(12, "span", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 9);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 10);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "ion-icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 12)(20, "p", 13);
    \u0275\u0275text(21, "Seguridad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 14);
    \u0275\u0275template(23, ConfiguracionPage_div_23_Template, 10, 1, "div", 15)(24, ConfiguracionPage_div_24_Template, 1, 0, "div", 16);
    \u0275\u0275elementStart(25, "div", 17);
    \u0275\u0275listener("click", function ConfiguracionPage_Template_div_click_25_listener() {
      return ctx.irCambiarPassword();
    });
    \u0275\u0275elementStart(26, "div", 18)(27, "div", 19);
    \u0275\u0275element(28, "ion-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 21)(30, "span", 22);
    \u0275\u0275text(31, "Cambiar contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 23);
    \u0275\u0275text(33, "Enviar enlace al correo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(34, "ion-icon", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 12)(36, "p", 13);
    \u0275\u0275text(37, "Preferencias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 14)(39, "div", 25)(40, "div", 18)(41, "div", 26);
    \u0275\u0275element(42, "ion-icon", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 21)(44, "span", 22);
    \u0275\u0275text(45, "Notificaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 23);
    \u0275\u0275text(47, "Alertas de rutas y recolecci\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "ion-toggle", 28);
    \u0275\u0275listener("ionChange", function ConfiguracionPage_Template_ion_toggle_ionChange_48_listener($event) {
      return ctx.onToggle("notificaciones", $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(49, "div", 29);
    \u0275\u0275elementStart(50, "div", 25)(51, "div", 18)(52, "div", 30);
    \u0275\u0275element(53, "ion-icon", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 21)(55, "span", 22);
    \u0275\u0275text(56, "Modo oscuro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 23);
    \u0275\u0275text(58, "Capa oscura en el mapa");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "ion-toggle", 28);
    \u0275\u0275listener("ionChange", function ConfiguracionPage_Template_ion_toggle_ionChange_59_listener($event) {
      return ctx.onToggle("modoOscuro", $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(60, "div", 29);
    \u0275\u0275elementStart(61, "div", 25)(62, "div", 18)(63, "div", 32);
    \u0275\u0275element(64, "ion-icon", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 21)(66, "span", 22);
    \u0275\u0275text(67, "GPS de alta precisi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 23);
    \u0275\u0275text(69, "Mayor exactitud, m\xE1s bater\xEDa");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(70, "ion-toggle", 28);
    \u0275\u0275listener("ionChange", function ConfiguracionPage_Template_ion_toggle_ionChange_70_listener($event) {
      return ctx.onToggle("gpsAlta", $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(71, "div", 29);
    \u0275\u0275elementStart(72, "div", 25)(73, "div", 18)(74, "div", 34);
    \u0275\u0275element(75, "ion-icon", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 21)(77, "span", 22);
    \u0275\u0275text(78, "Unidad de distancia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 23);
    \u0275\u0275text(80, "Kil\xF3metros o millas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "ion-select", 36);
    \u0275\u0275listener("ionChange", function ConfiguracionPage_Template_ion_select_ionChange_81_listener($event) {
      return ctx.onSelectChange("unidadDistancia", $event);
    });
    \u0275\u0275elementStart(82, "ion-select-option", 37);
    \u0275\u0275text(83, "km");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "ion-select-option", 38);
    \u0275\u0275text(85, "mi");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(86, "div", 12)(87, "p", 13);
    \u0275\u0275text(88, "Datos y privacidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 14)(90, "div", 17);
    \u0275\u0275listener("click", function ConfiguracionPage_Template_div_click_90_listener() {
      return ctx.confirmarBorrarDatos();
    });
    \u0275\u0275elementStart(91, "div", 18)(92, "div", 39);
    \u0275\u0275element(93, "ion-icon", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 21)(95, "span", 22);
    \u0275\u0275text(96, "Borrar datos locales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "span", 23);
    \u0275\u0275text(98, "Elimina datos offline y rutas guardadas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(99, "ion-icon", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "div", 12)(101, "p", 13);
    \u0275\u0275text(102, "Soporte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 14)(104, "div", 17);
    \u0275\u0275listener("click", function ConfiguracionPage_Template_div_click_104_listener() {
      return ctx.abrirSoporte();
    });
    \u0275\u0275elementStart(105, "div", 18)(106, "div", 26);
    \u0275\u0275element(107, "ion-icon", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div", 21)(109, "span", 22);
    \u0275\u0275text(110, "Contactar soporte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "span", 23);
    \u0275\u0275text(112, "soporte@cleanroute.app");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(113, "ion-icon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275element(114, "div", 29);
    \u0275\u0275elementStart(115, "div", 25)(116, "div", 18)(117, "div", 42);
    \u0275\u0275element(118, "ion-icon", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "div", 21)(120, "span", 22);
    \u0275\u0275text(121, "Versi\xF3n de la app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "span", 23);
    \u0275\u0275text(123);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(124, "span", 44);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(126, "div", 45)(127, "ion-button", 46);
    \u0275\u0275listener("click", function ConfiguracionPage_Template_ion_button_click_127_listener() {
      return ctx.cerrarSesion();
    });
    \u0275\u0275element(128, "ion-icon", 47);
    \u0275\u0275text(129, " Cerrar sesi\xF3n ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.usuario.inicial);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.usuario.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.usuario.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.usuario.rol);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.biometricDisponible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.biometricDisponible);
    \u0275\u0275advance(24);
    \u0275\u0275property("checked", ctx.prefs.notificaciones);
    \u0275\u0275advance(11);
    \u0275\u0275property("checked", ctx.prefs.modoOscuro);
    \u0275\u0275advance(11);
    \u0275\u0275property("checked", ctx.prefs.gpsAlta);
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx.prefs.unidadDistancia);
    \u0275\u0275advance(42);
    \u0275\u0275textInterpolate1("CleanRoute v", ctx.version);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("v", ctx.version);
  }
}, dependencies: [IonicModule, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonSelect, IonSelectOption, IonTitle, IonToggle, IonToolbar, BooleanValueAccessorDirective, SelectValueAccessorDirective, CommonModule, NgIf, FormsModule], styles: ['@charset "UTF-8";\n\n\n\n.cfg-content[_ngcontent-%COMP%] {\n  --background: #f2f4f8;\n}\n.cfg-toolbar[_ngcontent-%COMP%] {\n  --background: #e91e63;\n  --color: white;\n}\n.perfil-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n  padding: 20px 18px;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.perfil-banner[_ngcontent-%COMP%]:active {\n  opacity: 0.85;\n}\n.perfil-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.perfil-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.perfil-nombre[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n}\n.perfil-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.75);\n}\n.perfil-rol[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.6);\n  text-transform: capitalize;\n  margin-top: 2px;\n}\n.perfil-arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.6);\n  flex-shrink: 0;\n}\n.cfg-group[_ngcontent-%COMP%] {\n  padding: 20px 16px 0;\n}\n.group-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin: 0 4px 8px;\n}\n.cfg-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.cfg-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 13px 16px;\n  gap: 12px;\n  transition: background 0.15s;\n}\n.cfg-row.tappable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.cfg-row.tappable[_ngcontent-%COMP%]:active {\n  background: #f5f5f5;\n}\n.cfg-separator[_ngcontent-%COMP%] {\n  height: 0.5px;\n  background: rgba(0, 0, 0, 0.07);\n  margin: 0 16px;\n}\n.cfg-row-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n  min-width: 0;\n}\n.cfg-row-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.cfg-row-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cfg-row-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.row-arrow[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #ccc;\n  flex-shrink: 0;\n}\n.cfg-icon-wrap[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cfg-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: white;\n}\n.cfg-icon-wrap.green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1D9E75,\n      #0F6E56);\n}\n.cfg-icon-wrap.pink[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n}\n.cfg-icon-wrap.blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #378ADD,\n      #1a5fa8);\n}\n.cfg-icon-wrap.dark[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3d3d5c,\n      #1a1a2e);\n}\n.cfg-icon-wrap.orange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F5A623,\n      #e08000);\n}\n.cfg-icon-wrap.teal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00bcd4,\n      #0097a7);\n}\n.cfg-icon-wrap.red[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef5350,\n      #c62828);\n}\n.cfg-icon-wrap.gray[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #90a4ae,\n      #607d8b);\n}\n.cfg-select[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #e91e63;\n  max-width: 70px;\n  text-align: right;\n}\n.version-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #bbb;\n  background: #f5f5f5;\n  padding: 3px 10px;\n  border-radius: 20px;\n  flex-shrink: 0;\n}\n.logout-wrap[_ngcontent-%COMP%] {\n  padding: 20px 16px 48px;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  --border-radius: 14px;\n  --border-color: #ef5350;\n  --color: #ef5350;\n  height: 50px;\n  font-size: 15px;\n  font-weight: 600;\n  text-transform: none;\n  letter-spacing: 0;\n}\n/*# sourceMappingURL=configuracion.page.css.map */'] });
var ConfiguracionPage = _ConfiguracionPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguracionPage, [{
    type: Component,
    args: [{ selector: "app-configuracion", standalone: true, imports: [IonicModule, CommonModule, FormsModule], template: `<ion-header>\r
  <ion-toolbar class="cfg-toolbar">\r
    <ion-buttons slot="start">\r
      <ion-button (click)="volver()">\r
        <ion-icon name="arrow-back-outline" slot="icon-only"></ion-icon>\r
      </ion-button>\r
    </ion-buttons>\r
    <ion-title>Configuraci\xF3n</ion-title>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="cfg-content">\r
\r
  <!-- \u2550\u2550 PERFIL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="perfil-banner" (click)="irPerfil()">\r
    <div class="perfil-avatar">{{ usuario.inicial }}</div>\r
    <div class="perfil-info">\r
      <span class="perfil-nombre">{{ usuario.nombre }}</span>\r
      <span class="perfil-email">{{ usuario.email }}</span>\r
      <span class="perfil-rol">{{ usuario.rol }}</span>\r
    </div>\r
    <ion-icon name="chevron-forward-outline" class="perfil-arrow"></ion-icon>\r
  </div>\r
\r
  <!-- \u2550\u2550 SECCI\xD3N: SEGURIDAD \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="cfg-group">\r
    <p class="group-label">Seguridad</p>\r
\r
    <div class="cfg-card">\r
\r
      <div class="cfg-row" *ngIf="biometricDisponible">\r
        <div class="cfg-row-left">\r
          <div class="cfg-icon-wrap green">\r
            <ion-icon name="finger-print-outline"></ion-icon>\r
          </div>\r
          <div class="cfg-row-info">\r
            <span class="cfg-row-title">Huella / Rostro</span>\r
            <span class="cfg-row-sub">Acceso biom\xE9trico al iniciar</span>\r
          </div>\r
        </div>\r
        <ion-toggle\r
          [checked]="prefs.biometria"\r
          (ionChange)="onToggleBiometria($event)"\r
          color="success">\r
        </ion-toggle>\r
      </div>\r
\r
      <div class="cfg-separator" *ngIf="biometricDisponible"></div>\r
\r
      <div class="cfg-row tappable" (click)="irCambiarPassword()">\r
        <div class="cfg-row-left">\r
          <div class="cfg-icon-wrap pink">\r
            <ion-icon name="lock-closed-outline"></ion-icon>\r
          </div>\r
          <div class="cfg-row-info">\r
            <span class="cfg-row-title">Cambiar contrase\xF1a</span>\r
            <span class="cfg-row-sub">Enviar enlace al correo</span>\r
          </div>\r
        </div>\r
        <ion-icon name="chevron-forward-outline" class="row-arrow"></ion-icon>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550 SECCI\xD3N: PREFERENCIAS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="cfg-group">\r
    <p class="group-label">Preferencias</p>\r
\r
    <div class="cfg-card">\r
\r
      <div class="cfg-row">\r
        <div class="cfg-row-left">\r
          <div class="cfg-icon-wrap blue">\r
            <ion-icon name="notifications-outline"></ion-icon>\r
          </div>\r
          <div class="cfg-row-info">\r
            <span class="cfg-row-title">Notificaciones</span>\r
            <span class="cfg-row-sub">Alertas de rutas y recolecci\xF3n</span>\r
          </div>\r
        </div>\r
        <ion-toggle\r
          [checked]="prefs.notificaciones"\r
          (ionChange)="onToggle('notificaciones', $event)"\r
          color="success">\r
        </ion-toggle>\r
      </div>\r
\r
      <div class="cfg-separator"></div>\r
\r
      <div class="cfg-row">\r
        <div class="cfg-row-left">\r
          <div class="cfg-icon-wrap dark">\r
            <ion-icon name="moon-outline"></ion-icon>\r
          </div>\r
          <div class="cfg-row-info">\r
            <span class="cfg-row-title">Modo oscuro</span>\r
            <span class="cfg-row-sub">Capa oscura en el mapa</span>\r
          </div>\r
        </div>\r
        <ion-toggle\r
          [checked]="prefs.modoOscuro"\r
          (ionChange)="onToggle('modoOscuro', $event)"\r
          color="success">\r
        </ion-toggle>\r
      </div>\r
\r
      <div class="cfg-separator"></div>\r
\r
      <div class="cfg-row">\r
        <div class="cfg-row-left">\r
          <div class="cfg-icon-wrap orange">\r
            <ion-icon name="locate-outline"></ion-icon>\r
          </div>\r
          <div class="cfg-row-info">\r
            <span class="cfg-row-title">GPS de alta precisi\xF3n</span>\r
            <span class="cfg-row-sub">Mayor exactitud, m\xE1s bater\xEDa</span>\r
          </div>\r
        </div>\r
        <ion-toggle\r
          [checked]="prefs.gpsAlta"\r
          (ionChange)="onToggle('gpsAlta', $event)"\r
          color="success">\r
        </ion-toggle>\r
      </div>\r
\r
      <div class="cfg-separator"></div>\r
\r
      <div class="cfg-row">\r
        <div class="cfg-row-left">\r
          <div class="cfg-icon-wrap teal">\r
            <ion-icon name="speedometer-outline"></ion-icon>\r
          </div>\r
          <div class="cfg-row-info">\r
            <span class="cfg-row-title">Unidad de distancia</span>\r
            <span class="cfg-row-sub">Kil\xF3metros o millas</span>\r
          </div>\r
        </div>\r
        <ion-select\r
          [value]="prefs.unidadDistancia"\r
          (ionChange)="onSelectChange('unidadDistancia', $event)"\r
          interface="popover"\r
          class="cfg-select">\r
          <ion-select-option value="km">km</ion-select-option>\r
          <ion-select-option value="mi">mi</ion-select-option>\r
        </ion-select>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550 SECCI\xD3N: DATOS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="cfg-group">\r
    <p class="group-label">Datos y privacidad</p>\r
\r
    <div class="cfg-card">\r
\r
      <div class="cfg-row tappable" (click)="confirmarBorrarDatos()">\r
        <div class="cfg-row-left">\r
          <div class="cfg-icon-wrap red">\r
            <ion-icon name="trash-outline"></ion-icon>\r
          </div>\r
          <div class="cfg-row-info">\r
            <span class="cfg-row-title">Borrar datos locales</span>\r
            <span class="cfg-row-sub">Elimina datos offline y rutas guardadas</span>\r
          </div>\r
        </div>\r
        <ion-icon name="chevron-forward-outline" class="row-arrow"></ion-icon>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550 SECCI\xD3N: SOPORTE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="cfg-group">\r
    <p class="group-label">Soporte</p>\r
\r
    <div class="cfg-card">\r
\r
      <div class="cfg-row tappable" (click)="abrirSoporte()">\r
        <div class="cfg-row-left">\r
          <div class="cfg-icon-wrap blue">\r
            <ion-icon name="mail-outline"></ion-icon>\r
          </div>\r
          <div class="cfg-row-info">\r
            <span class="cfg-row-title">Contactar soporte</span>\r
            <span class="cfg-row-sub">soporte@cleanroute.app</span>\r
          </div>\r
        </div>\r
        <ion-icon name="chevron-forward-outline" class="row-arrow"></ion-icon>\r
      </div>\r
\r
      <div class="cfg-separator"></div>\r
\r
      <div class="cfg-row">\r
        <div class="cfg-row-left">\r
          <div class="cfg-icon-wrap gray">\r
            <ion-icon name="information-circle-outline"></ion-icon>\r
          </div>\r
          <div class="cfg-row-info">\r
            <span class="cfg-row-title">Versi\xF3n de la app</span>\r
            <span class="cfg-row-sub">CleanRoute v{{ version }}</span>\r
          </div>\r
        </div>\r
        <span class="version-badge">v{{ version }}</span>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
 <!-- \u2550\u2550 BOT\xD3N CERRAR SESI\xD3N \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="logout-wrap">\r
  <ion-button\r
    expand="block"\r
    fill="outline"\r
    color="danger"\r
    class="logout-btn"\r
    (click)="cerrarSesion()"\r
  >\r
    <ion-icon name="log-out-outline" slot="start"></ion-icon>\r
    Cerrar sesi\xF3n\r
  </ion-button>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/configuracion/configuracion.page.scss */\n.cfg-content {\n  --background: #f2f4f8;\n}\n.cfg-toolbar {\n  --background: #e91e63;\n  --color: white;\n}\n.perfil-banner {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n  padding: 20px 18px;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.perfil-banner:active {\n  opacity: 0.85;\n}\n.perfil-avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.perfil-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.perfil-nombre {\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n}\n.perfil-email {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.75);\n}\n.perfil-rol {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.6);\n  text-transform: capitalize;\n  margin-top: 2px;\n}\n.perfil-arrow {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.6);\n  flex-shrink: 0;\n}\n.cfg-group {\n  padding: 20px 16px 0;\n}\n.group-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin: 0 4px 8px;\n}\n.cfg-card {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.cfg-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 13px 16px;\n  gap: 12px;\n  transition: background 0.15s;\n}\n.cfg-row.tappable {\n  cursor: pointer;\n}\n.cfg-row.tappable:active {\n  background: #f5f5f5;\n}\n.cfg-separator {\n  height: 0.5px;\n  background: rgba(0, 0, 0, 0.07);\n  margin: 0 16px;\n}\n.cfg-row-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n  min-width: 0;\n}\n.cfg-row-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.cfg-row-title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cfg-row-sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.row-arrow {\n  font-size: 16px;\n  color: #ccc;\n  flex-shrink: 0;\n}\n.cfg-icon-wrap {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cfg-icon-wrap ion-icon {\n  font-size: 18px;\n  color: white;\n}\n.cfg-icon-wrap.green {\n  background:\n    linear-gradient(\n      135deg,\n      #1D9E75,\n      #0F6E56);\n}\n.cfg-icon-wrap.pink {\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n}\n.cfg-icon-wrap.blue {\n  background:\n    linear-gradient(\n      135deg,\n      #378ADD,\n      #1a5fa8);\n}\n.cfg-icon-wrap.dark {\n  background:\n    linear-gradient(\n      135deg,\n      #3d3d5c,\n      #1a1a2e);\n}\n.cfg-icon-wrap.orange {\n  background:\n    linear-gradient(\n      135deg,\n      #F5A623,\n      #e08000);\n}\n.cfg-icon-wrap.teal {\n  background:\n    linear-gradient(\n      135deg,\n      #00bcd4,\n      #0097a7);\n}\n.cfg-icon-wrap.red {\n  background:\n    linear-gradient(\n      135deg,\n      #ef5350,\n      #c62828);\n}\n.cfg-icon-wrap.gray {\n  background:\n    linear-gradient(\n      135deg,\n      #90a4ae,\n      #607d8b);\n}\n.cfg-select {\n  font-size: 14px;\n  font-weight: 500;\n  color: #e91e63;\n  max-width: 70px;\n  text-align: right;\n}\n.version-badge {\n  font-size: 12px;\n  font-weight: 500;\n  color: #bbb;\n  background: #f5f5f5;\n  padding: 3px 10px;\n  border-radius: 20px;\n  flex-shrink: 0;\n}\n.logout-wrap {\n  padding: 20px 16px 48px;\n}\n.logout-btn {\n  --border-radius: 14px;\n  --border-color: #ef5350;\n  --color: #ef5350;\n  height: 50px;\n  font-size: 15px;\n  font-weight: 600;\n  text-transform: none;\n  letter-spacing: 0;\n}\n/*# sourceMappingURL=configuracion.page.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: BiometricService }, { type: OfflineSqliteService }, { type: Router }, { type: ToastController }, { type: LoadingController }, { type: AlertController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfiguracionPage, { className: "ConfiguracionPage", filePath: "src/app/pages/configuracion/configuracion.page.ts", lineNumber: 30 });
})();
export {
  ConfiguracionPage
};
//# sourceMappingURL=configuracion.page-4X5ZP7N2.js.map
