import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonNote,
  IonSpinner,
  IonTitle,
  IonToolbar,
  ToastController
} from "./chunk-UHMRKJLH.js";
import {
  AuthService,
  BiometricService
} from "./chunk-RFRASXTM.js";
import {
  CommonModule,
  Component,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  Injectable,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  ReactiveFormsModule,
  Router,
  Validators,
  environment,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵtextInterpolate1
} from "./chunk-L4S7MW2T.js";
import "./chunk-JPNRESDO.js";
import "./chunk-ZANXXOCD.js";
import "./chunk-OIVHZRLR.js";
import "./chunk-Q3XTTR4L.js";
import "./chunk-HFIIUGAS.js";
import "./chunk-EYNBDKL4.js";
import "./chunk-GDCLMRGX.js";
import "./chunk-6GY55RSK.js";
import "./chunk-7D2IXJO2.js";
import "./chunk-FZZSIR43.js";
import "./chunk-X4NBNE3H.js";
import "./chunk-SQPD43CM.js";
import "./chunk-CIJ2MFME.js";
import "./chunk-YAS4LRVC.js";
import {
  __async,
  __spreadValues
} from "./chunk-Q3N56TRI.js";

// src/app/services/logger.service.ts
var _LoggerService = class _LoggerService {
  constructor() {
  }
  // Log seguro - solo en desarrollo, sin datos sensibles
  log(message, category = "INFO") {
    if (!environment.production) {
      console.log(`[${category}] ${message}`);
    }
  }
  // Log de errores (siempre se muestra)
  error(message, error) {
    console.error(`[ERROR] ${message}`, error);
  }
  // Log de eventos de seguridad (sin datos sensibles)
  securityLog(event, details) {
    const safeDetails = details ? this.sanitizeLogData(details) : {};
    console.log(`[SECURITY] ${event}`, safeDetails);
  }
  // Remover datos sensibles de los logs
  sanitizeLogData(data) {
    if (!data)
      return data;
    const sensitiveFields = [
      "password",
      "email",
      "token",
      "user_metadata",
      "session"
    ];
    const sanitized = __spreadValues({}, data);
    sensitiveFields.forEach((field) => {
      if (sanitized[field]) {
        sanitized[field] = "[REDACTED]";
      }
    });
    return sanitized;
  }
};
_LoggerService.\u0275fac = function LoggerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoggerService)();
};
_LoggerService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoggerService, factory: _LoggerService.\u0275fac, providedIn: "root" });
var LoggerService = _LoggerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoggerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/pages/login/login.page.ts
function LoginPage_ion_note_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-note", 26);
    \u0275\u0275text(1, " Email inv\xE1lido ");
    \u0275\u0275elementEnd();
  }
}
function LoginPage_ion_note_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-note", 26);
    \u0275\u0275text(1, " M\xEDnimo 6 caracteres ");
    \u0275\u0275elementEnd();
  }
}
function LoginPage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "ion-icon", 28);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Cuenta bloqueada ", ctx_r0.blockTimeRemaining, "s");
  }
}
function LoginPage_ion_spinner_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 29);
  }
}
function LoginPage_ion_icon_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 30);
  }
}
function LoginPage_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "p");
    \u0275\u0275text(2, "O usa biometr\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-button", 32);
    \u0275\u0275listener("click", function LoginPage_div_32_Template_ion_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loginBiometric());
    });
    \u0275\u0275element(4, "ion-icon", 33);
    \u0275\u0275text(5, " Huella / Rostro ");
    \u0275\u0275elementEnd()();
  }
}
var _LoginPage = class _LoginPage {
  constructor(authService, biometricService, router, formBuilder, logger, toastController) {
    this.authService = authService;
    this.biometricService = biometricService;
    this.router = router;
    this.formBuilder = formBuilder;
    this.logger = logger;
    this.toastController = toastController;
    this.isLoading = false;
    this.biometricAvailable = false;
    this.showPassword = false;
    this.loginAttempts = 0;
    this.maxAttempts = 5;
    this.isBlocked = false;
    this.blockTimeRemaining = 0;
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.biometricAvailable = yield this.biometricService.isAvailable();
    });
  }
  ngOnDestroy() {
    if (this.blockTimer)
      clearInterval(this.blockTimer);
  }
  login() {
    return __async(this, null, function* () {
      if (this.isBlocked) {
        this.showToast(`Cuenta bloqueada. Intenta en ${this.blockTimeRemaining}s.`, "warning");
        return;
      }
      if (this.loginForm.invalid) {
        this.showToast("Completa todos los campos correctamente.", "warning");
        return;
      }
      this.isLoading = true;
      try {
        const { email, password } = this.loginForm.value;
        const response = yield this.authService.login(email, password);
        if (!response?.user)
          throw new Error("No se pudo obtener la informaci\xF3n del usuario");
        const user = {
          id: response.user.id,
          email: response.user.email || "",
          user_metadata: response.user.user_metadata,
          created_at: response.user.created_at,
          updated_at: response.user.updated_at
        };
        const rol = user.user_metadata?.rol;
        if (!rol) {
          this.showToast("Usuario sin rol asignado. Contacta al administrador.", "danger");
          return;
        }
        this.loginAttempts = 0;
        this.showToast("\xA1Sesi\xF3n iniciada correctamente!", "success");
        if (rol === "conductor") {
          this.router.navigate(["/menu"]);
        } else {
          this.router.navigate(["/home"]);
        }
      } catch (error) {
        this.logger.error("Error en login", error);
        this.loginAttempts++;
        if (this.loginAttempts >= this.maxAttempts) {
          this.blockAccount();
        } else {
          const restantes = this.maxAttempts - this.loginAttempts;
          this.showToast(`Credenciales incorrectas. ${restantes} intentos restantes.`, "danger");
        }
      } finally {
        this.isLoading = false;
      }
    });
  }
  loginBiometric() {
    return __async(this, null, function* () {
      if (!this.biometricAvailable) {
        this.showToast("Biometr\xEDa no disponible en este dispositivo.", "warning");
        return;
      }
      try {
        const verified = yield this.biometricService.verifyIdentity();
        if (!verified) {
          this.showToast("Verificaci\xF3n biom\xE9trica fallida.", "danger");
          return;
        }
        const credentials = yield this.biometricService.getCredentials();
        if (!credentials) {
          this.showToast("No hay credenciales biom\xE9tricas guardadas.", "warning");
          return;
        }
        this.loginForm.patchValue({ email: credentials.username, password: credentials.password });
        yield this.login();
      } catch (error) {
        this.logger.error("Error en login biom\xE9trico", error);
        this.showToast("Error en autenticaci\xF3n biom\xE9trica.", "danger");
      }
    });
  }
  /** ✅ Toggle visibilidad de contraseña — implementado */
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  blockAccount() {
    this.isBlocked = true;
    this.blockTimeRemaining = 300;
    this.showToast("Cuenta bloqueada por m\xFAltiples intentos. Espera 5 minutos.", "danger");
    this.blockTimer = setInterval(() => {
      this.blockTimeRemaining--;
      if (this.blockTimeRemaining <= 0)
        this.unblockAccount();
    }, 1e3);
  }
  unblockAccount() {
    this.isBlocked = false;
    this.loginAttempts = 0;
    if (this.blockTimer)
      clearInterval(this.blockTimer);
    this.showToast("Cuenta desbloqueada. Puedes iniciar sesi\xF3n nuevamente.", "success");
  }
  showToast(message, color = "success") {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({ message, color, duration: 3e3, position: "top" });
      yield toast.present();
    });
  }
  goToRegister() {
    this.router.navigate(["/register"]);
  }
  // FIX #4: ciudadano puede entrar sin loguearse
  entrarComoCiudadano() {
    this.router.navigate(["/home"], { replaceUrl: true });
  }
  goToForgotPassword() {
    this.router.navigate(["/forgot-password"]);
  }
};
_LoginPage.\u0275fac = function LoginPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginPage)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(BiometricService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(LoggerService), \u0275\u0275directiveInject(ToastController));
};
_LoginPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["app-login"]], decls: 39, vars: 15, consts: [["translucent", "true"], ["color", "light"], [1, "login-content"], [1, "logo-container"], ["name", "car-outline", 1, "logo-icon"], [1, "app-title"], [1, "app-subtitle"], [1, "form-container", 3, "ngSubmit", "formGroup"], [1, "input-item"], ["label", "Correo electr\xF3nico", "label-placement", "floating", "formControlName", "email", "type", "email", 3, "disabled"], ["color", "danger", 4, "ngIf"], ["label", "Contrase\xF1a", "label-placement", "floating", "formControlName", "password", 3, "type", "disabled"], ["slot", "end", "fill", "clear", "tabindex", "-1", 3, "click"], [3, "name"], ["class", "block-notice", 4, "ngIf"], ["expand", "block", "type", "submit", 1, "login-btn", 3, "disabled"], ["slot", "start", 4, "ngIf"], ["name", "log-in-outline", "slot", "start", 4, "ngIf"], [1, "extra-buttons"], ["expand", "block", "fill", "clear", 3, "click", "disabled"], ["name", "person-add-outline", "slot", "start"], ["name", "key-outline", "slot", "start"], ["class", "biometric-section", 4, "ngIf"], [1, "ciudadano-access"], ["expand", "block", "fill", "outline", 1, "ciudadano-btn", 3, "click"], ["name", "map-outline", "slot", "start"], ["color", "danger"], [1, "block-notice"], ["name", "lock-closed"], ["slot", "start"], ["name", "log-in-outline", "slot", "start"], [1, "biometric-section"], ["expand", "block", "fill", "outline", 1, "biometric-btn", 3, "click"], ["name", "finger-print-outline", "slot", "start"]], template: function LoginPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title");
    \u0275\u0275text(3, "Iniciar sesi\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 2)(5, "div", 3);
    \u0275\u0275element(6, "ion-icon", 4);
    \u0275\u0275elementStart(7, "h1", 5);
    \u0275\u0275text(8, "Bienvenido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 6);
    \u0275\u0275text(10, "Gesti\xF3n inteligente de recorridos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "form", 7);
    \u0275\u0275listener("ngSubmit", function LoginPage_Template_form_ngSubmit_11_listener() {
      return ctx.login();
    });
    \u0275\u0275elementStart(12, "ion-item", 8);
    \u0275\u0275element(13, "ion-input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, LoginPage_ion_note_14_Template, 2, 0, "ion-note", 10);
    \u0275\u0275elementStart(15, "ion-item", 8);
    \u0275\u0275element(16, "ion-input", 11);
    \u0275\u0275elementStart(17, "ion-button", 12);
    \u0275\u0275listener("click", function LoginPage_Template_ion_button_click_17_listener() {
      return ctx.togglePasswordVisibility();
    });
    \u0275\u0275element(18, "ion-icon", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, LoginPage_ion_note_19_Template, 2, 0, "ion-note", 10)(20, LoginPage_div_20_Template, 4, 1, "div", 14);
    \u0275\u0275elementStart(21, "ion-button", 15);
    \u0275\u0275template(22, LoginPage_ion_spinner_22_Template, 1, 0, "ion-spinner", 16)(23, LoginPage_ion_icon_23_Template, 1, 0, "ion-icon", 17);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 18)(26, "ion-button", 19);
    \u0275\u0275listener("click", function LoginPage_Template_ion_button_click_26_listener() {
      return ctx.goToRegister();
    });
    \u0275\u0275element(27, "ion-icon", 20);
    \u0275\u0275text(28, " Crear cuenta ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ion-button", 19);
    \u0275\u0275listener("click", function LoginPage_Template_ion_button_click_29_listener() {
      return ctx.goToForgotPassword();
    });
    \u0275\u0275element(30, "ion-icon", 21);
    \u0275\u0275text(31, " Recuperar contrase\xF1a ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, LoginPage_div_32_Template, 6, 0, "div", 22);
    \u0275\u0275elementStart(33, "div", 23)(34, "p");
    \u0275\u0275text(35, "\xBFSolo quieres ver las rutas?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ion-button", 24);
    \u0275\u0275listener("click", function LoginPage_Template_ion_button_click_36_listener() {
      return ctx.entrarComoCiudadano();
    });
    \u0275\u0275element(37, "ion-icon", 25);
    \u0275\u0275text(38, " Ver mapa como ciudadano ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_6_0;
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx.loginForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isBlocked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275property("type", ctx.showPassword ? "text" : "password")("disabled", ctx.isBlocked);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx.showPassword ? "eye-off-outline" : "eye-outline");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.loginForm.get("password")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.loginForm.get("password")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isBlocked);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.isLoading || ctx.isBlocked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Ingresando..." : "Iniciar sesi\xF3n", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isBlocked);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.isBlocked);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.biometricAvailable && !ctx.isBlocked);
  }
}, dependencies: [
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonSpinner,
  IonNote,
  CommonModule,
  NgIf,
  FormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName
], styles: ['@charset "UTF-8";\n\n\n\n.login-content[_ngcontent-%COMP%] {\n  --background: #f5f6fa;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n  margin: 0 auto;\n  background: white;\n  border-radius: 16px;\n  padding: 25px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n}\n.logo-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 70px;\n  color: #e91e63;\n}\n.app-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: bold;\n  color: #333;\n}\n.app-subtitle[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 14px;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n  background: white;\n  border-radius: 16px;\n  padding: 25px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n}\n.input-item[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  margin-bottom: 10px;\n}\n.login-btn[_ngcontent-%COMP%] {\n  --background: #e91e63;\n  --background-hover: #d81b60;\n  --border-radius: 12px;\n  height: 48px;\n  font-weight: bold;\n  margin-top: 15px;\n}\n.extra-buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.extra-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.biometric-section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n}\n.biometric-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 13px;\n}\n.biometric-btn[_ngcontent-%COMP%] {\n  --border-color: #e91e63;\n  --color: #e91e63;\n  --border-radius: 12px;\n  height: 45px;\n}\n.ciudadano-access[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n}\n.ciudadano-access[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 13px;\n}\n.ciudadano-btn[_ngcontent-%COMP%] {\n  --border-color: #e91e63;\n  --color: #e91e63;\n  --border-radius: 12px;\n  height: 45px;\n}\n.block-notice[_ngcontent-%COMP%] {\n  background: #ffe5ea;\n  border: 1px solid #e91e63;\n  color: #e91e63;\n  border-radius: 10px;\n  padding: 10px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=login.page.css.map */'] });
var LoginPage = _LoginPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPage, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
      IonItem,
      IonInput,
      IonButton,
      IonIcon,
      IonSpinner,
      IonNote,
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ], template: `<ion-header translucent="true">\r
  <ion-toolbar color="light">\r
    <ion-title>Iniciar sesi\xF3n</ion-title>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="login-content">\r
\r
  <!-- Logo -->\r
  <div class="logo-container">\r
    <ion-icon name="car-outline" class="logo-icon"></ion-icon>\r
    <h1 class="app-title">Bienvenido</h1>\r
    <p class="app-subtitle">Gesti\xF3n inteligente de recorridos</p>\r
  </div>\r
\r
  <!-- Formulario -->\r
  <form [formGroup]="loginForm" (ngSubmit)="login()" class="form-container">\r
\r
    <!-- EMAIL -->\r
    <ion-item class="input-item">\r
      <ion-input\r
        label="Correo electr\xF3nico"\r
        label-placement="floating"\r
        formControlName="email"\r
        type="email"\r
        [disabled]="isBlocked">\r
      </ion-input>\r
    </ion-item>\r
    <ion-note *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched" color="danger">\r
      Email inv\xE1lido\r
    </ion-note>\r
\r
    <!-- CONTRASE\xD1A con toggle -->\r
    <ion-item class="input-item">\r
      <ion-input\r
        label="Contrase\xF1a"\r
        label-placement="floating"\r
        [type]="showPassword ? 'text' : 'password'"\r
        formControlName="password"\r
        [disabled]="isBlocked">\r
      </ion-input>\r
      <ion-button slot="end" fill="clear" (click)="togglePasswordVisibility()" tabindex="-1">\r
        <ion-icon [name]="showPassword ? 'eye-off-outline' : 'eye-outline'"></ion-icon>\r
      </ion-button>\r
    </ion-item>\r
    <ion-note *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched" color="danger">\r
      M\xEDnimo 6 caracteres\r
    </ion-note>\r
\r
    <!-- Bloqueo -->\r
    <div *ngIf="isBlocked" class="block-notice">\r
      <ion-icon name="lock-closed"></ion-icon>\r
      <p>Cuenta bloqueada {{ blockTimeRemaining }}s</p>\r
    </div>\r
\r
    <!-- Bot\xF3n login -->\r
    <ion-button\r
      expand="block"\r
      type="submit"\r
      [disabled]="loginForm.invalid || isLoading || isBlocked"\r
      class="login-btn">\r
      <ion-spinner *ngIf="isLoading" slot="start"></ion-spinner>\r
      <ion-icon *ngIf="!isLoading" name="log-in-outline" slot="start"></ion-icon>\r
      {{ isLoading ? 'Ingresando...' : 'Iniciar sesi\xF3n' }}\r
    </ion-button>\r
\r
    <!-- Botones extra -->\r
    <div class="extra-buttons">\r
      <ion-button expand="block" fill="clear" (click)="goToRegister()" [disabled]="isBlocked">\r
        <ion-icon name="person-add-outline" slot="start"></ion-icon>\r
        Crear cuenta\r
      </ion-button>\r
      <ion-button expand="block" fill="clear" (click)="goToForgotPassword()" [disabled]="isBlocked">\r
        <ion-icon name="key-outline" slot="start"></ion-icon>\r
        Recuperar contrase\xF1a\r
      </ion-button>\r
    </div>\r
\r
    <!-- Biometr\xEDa -->\r
    <div *ngIf="biometricAvailable && !isBlocked" class="biometric-section">\r
      <p>O usa biometr\xEDa</p>\r
      <ion-button expand="block" fill="outline" (click)="loginBiometric()" class="biometric-btn">\r
        <ion-icon name="finger-print-outline" slot="start"></ion-icon>\r
        Huella / Rostro\r
      </ion-button>\r
    </div>\r
\r
    <!-- FIX #4: acceso sin login para ciudadanos -->\r
    <div class="ciudadano-access">\r
      <p>\xBFSolo quieres ver las rutas?</p>\r
      <ion-button expand="block" fill="outline" (click)="entrarComoCiudadano()" class="ciudadano-btn">\r
        <ion-icon name="map-outline" slot="start"></ion-icon>\r
        Ver mapa como ciudadano\r
      </ion-button>\r
    </div>\r
\r
  </form>\r
\r
</ion-content>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/login/login.page.scss */\n.login-content {\n  --background: #f5f6fa;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.form-container {\n  width: 100%;\n  max-width: 380px;\n  margin: 0 auto;\n  background: white;\n  border-radius: 16px;\n  padding: 25px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n}\n.logo-container {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.logo-icon {\n  font-size: 70px;\n  color: #e91e63;\n}\n.app-title {\n  font-size: 26px;\n  font-weight: bold;\n  color: #333;\n}\n.app-subtitle {\n  color: #777;\n  font-size: 14px;\n}\n.form-container {\n  width: 100%;\n  max-width: 380px;\n  background: white;\n  border-radius: 16px;\n  padding: 25px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n}\n.input-item {\n  --border-radius: 12px;\n  margin-bottom: 10px;\n}\n.login-btn {\n  --background: #e91e63;\n  --background-hover: #d81b60;\n  --border-radius: 12px;\n  height: 48px;\n  font-weight: bold;\n  margin-top: 15px;\n}\n.extra-buttons {\n  margin-top: 10px;\n}\n.extra-buttons ion-button {\n  font-size: 14px;\n}\n.biometric-section {\n  margin-top: 20px;\n  text-align: center;\n}\n.biometric-section p {\n  color: #666;\n  font-size: 13px;\n}\n.biometric-btn {\n  --border-color: #e91e63;\n  --color: #e91e63;\n  --border-radius: 12px;\n  height: 45px;\n}\n.ciudadano-access {\n  margin-top: 20px;\n  text-align: center;\n}\n.ciudadano-access p {\n  color: #666;\n  font-size: 13px;\n}\n.ciudadano-btn {\n  --border-color: #e91e63;\n  --color: #e91e63;\n  --border-radius: 12px;\n  height: 45px;\n}\n.block-notice {\n  background: #ffe5ea;\n  border: 1px solid #e91e63;\n  color: #e91e63;\n  border-radius: 10px;\n  padding: 10px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=login.page.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: BiometricService }, { type: Router }, { type: FormBuilder }, { type: LoggerService }, { type: ToastController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "src/app/pages/login/login.page.ts", lineNumber: 42 });
})();
export {
  LoginPage
};
//# sourceMappingURL=login.page-X5UX3BLV.js.map
