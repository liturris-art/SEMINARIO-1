import {
  Camera,
  CameraResultType,
  CameraSource,
  FaceRecognitionService
} from "./chunk-4AX262RL.js";
import "./chunk-ONELXWRX.js";
import "./chunk-APRNP3ZL.js";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonNote,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  IonTitle,
  IonToolbar,
  ToastController
} from "./chunk-UHMRKJLH.js";
import {
  AuthService
} from "./chunk-RFRASXTM.js";
import {
  CommonModule,
  Component,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  ReactiveFormsModule,
  Router,
  RouterLink,
  Validators,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵsanitizeUrl,
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
  __async
} from "./chunk-Q3N56TRI.js";

// src/app/pages/register/register.page.ts
function RegisterPage_ion_buttons_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-buttons", 6)(1, "ion-button", 7);
    \u0275\u0275listener("click", function RegisterPage_ion_buttons_2_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.volver());
    });
    \u0275\u0275element(2, "ion-icon", 8);
    \u0275\u0275elementEnd()();
  }
}
function RegisterPage_div_6_ion_note_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-note", 35);
    \u0275\u0275text(1, " Email inv\xE1lido ");
    \u0275\u0275elementEnd();
  }
}
function RegisterPage_div_6_ion_note_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-note", 35);
    \u0275\u0275text(1, " M\xEDnimo 8 caracteres ");
    \u0275\u0275elementEnd();
  }
}
function RegisterPage_div_6_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "ion-icon", 37);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Como conductor registrar\xE1s tu rostro con MediaPipe para verificaci\xF3n en cada recorrido");
    \u0275\u0275elementEnd()();
  }
}
function RegisterPage_div_6_ion_spinner_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 38);
  }
}
function RegisterPage_div_6_ion_icon_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 39);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", ctx_r1.esConductor ? "arrow-forward-outline" : "checkmark-circle-outline");
  }
}
function RegisterPage_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 9);
    \u0275\u0275element(2, "ion-icon", 10);
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "Registro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "\xDAnete a CleanRoute");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 11)(8, "form", 12)(9, "ion-item", 13);
    \u0275\u0275element(10, "ion-icon", 14)(11, "ion-input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-item", 13);
    \u0275\u0275element(13, "ion-icon", 16)(14, "ion-input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-item", 13);
    \u0275\u0275element(16, "ion-icon", 18)(17, "ion-input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-item", 13);
    \u0275\u0275element(19, "ion-icon", 20)(20, "ion-input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, RegisterPage_div_6_ion_note_21_Template, 2, 0, "ion-note", 22);
    \u0275\u0275elementStart(22, "ion-item", 13);
    \u0275\u0275element(23, "ion-icon", 23)(24, "ion-input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, RegisterPage_div_6_ion_note_25_Template, 2, 0, "ion-note", 22);
    \u0275\u0275elementStart(26, "ion-item", 13);
    \u0275\u0275element(27, "ion-icon", 25);
    \u0275\u0275elementStart(28, "ion-select", 26)(29, "ion-select-option", 27);
    \u0275\u0275text(30, "\u{1F464} Ciudadano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ion-select-option", 28);
    \u0275\u0275text(32, "\u{1F69B} Conductor");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, RegisterPage_div_6_div_33_Template, 4, 0, "div", 29);
    \u0275\u0275elementStart(34, "ion-button", 30);
    \u0275\u0275listener("click", function RegisterPage_div_6_Template_ion_button_click_34_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.avanzar());
    });
    \u0275\u0275template(35, RegisterPage_div_6_ion_spinner_35_Template, 1, 0, "ion-spinner", 31)(36, RegisterPage_div_6_ion_icon_36_Template, 1, 1, "ion-icon", 32);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ion-button", 33);
    \u0275\u0275element(39, "ion-icon", 34);
    \u0275\u0275text(40, " Ya tengo cuenta ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r1.registerForm);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.esConductor);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.registerForm.invalid || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.esConductor ? "Continuar" : ctx_r1.isLoading ? "Creando..." : "Crear cuenta", " ");
  }
}
function RegisterPage_div_7_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Cargando motor MediaPipe...");
    \u0275\u0275elementEnd();
  }
}
function RegisterPage_div_7_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Esta foto se usar\xE1 para verificar tu identidad al iniciar cada recorrido.");
    \u0275\u0275elementEnd();
  }
}
function RegisterPage_div_7_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "ion-spinner", 59);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Analizando con MediaPipe...");
    \u0275\u0275elementEnd()();
  }
}
function RegisterPage_div_7_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "ion-icon", 61);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "468 landmarks detectados \u2705");
    \u0275\u0275elementEnd()();
  }
}
function RegisterPage_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "img", 55);
    \u0275\u0275template(2, RegisterPage_div_7_div_7_div_2_Template, 4, 0, "div", 56)(3, RegisterPage_div_7_div_7_div_3_Template, 4, 0, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.fotoPreview, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.procesando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.descriptorOk && !ctx_r1.procesando);
  }
}
function RegisterPage_div_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63);
    \u0275\u0275element(2, "ion-icon", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 65);
    \u0275\u0275text(4, "Toca el bot\xF3n para abrir la c\xE1mara frontal");
    \u0275\u0275elementEnd()();
  }
}
function RegisterPage_div_7_ion_spinner_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 38);
  }
}
function RegisterPage_div_7_ion_icon_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 66);
  }
}
function RegisterPage_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275element(2, "ion-icon", 42);
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Registra tu rostro");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RegisterPage_div_7_p_5_Template, 2, 0, "p", 3)(6, RegisterPage_div_7_p_6_Template, 2, 0, "p", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, RegisterPage_div_7_div_7_Template, 4, 3, "div", 43)(8, RegisterPage_div_7_div_8_Template, 5, 0, "div", 44);
    \u0275\u0275elementStart(9, "div", 45)(10, "div", 46);
    \u0275\u0275element(11, "ion-icon", 47);
    \u0275\u0275text(12, " Buena iluminaci\xF3n frontal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 46);
    \u0275\u0275element(14, "ion-icon", 48);
    \u0275\u0275text(15, " Mira directamente a la c\xE1mara");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 46);
    \u0275\u0275element(17, "ion-icon", 49);
    \u0275\u0275text(18, " Sin lentes ni gorras");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ion-button", 50);
    \u0275\u0275listener("click", function RegisterPage_div_7_Template_ion_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tomarFoto());
    });
    \u0275\u0275element(20, "ion-icon", 51);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ion-button", 52);
    \u0275\u0275listener("click", function RegisterPage_div_7_Template_ion_button_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.register());
    });
    \u0275\u0275template(23, RegisterPage_div_7_ion_spinner_23_Template, 1, 0, "ion-spinner", 31)(24, RegisterPage_div_7_ion_icon_24_Template, 1, 0, "ion-icon", 53);
    \u0275\u0275text(25, " Completar registro ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("spin", ctx_r1.cargandoModelo);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.cargandoModelo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cargandoModelo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fotoPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.fotoPreview);
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", ctx_r1.procesando || ctx_r1.cargandoModelo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.fotoPreview ? "Repetir foto" : "Abrir c\xE1mara", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.descriptorOk || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
  }
}
function RegisterPage_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "ion-icon", 68);
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "\xA1Cuenta creada!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Redirigiendo al inicio de sesi\xF3n...");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "ion-spinner", 69);
    \u0275\u0275elementEnd();
  }
}
var _RegisterPage = class _RegisterPage {
  constructor(auth, faceService, router, fb, toastCtrl) {
    this.auth = auth;
    this.faceService = faceService;
    this.router = router;
    this.fb = fb;
    this.toastCtrl = toastCtrl;
    this.isLoading = false;
    this.paso = "datos";
    this.fotoPreview = null;
    this.procesando = false;
    this.descriptorOk = false;
    this.cargandoModelo = false;
    this.registerForm = this.fb.group({
      nombre: ["", Validators.required],
      documento: ["", Validators.required],
      telefono: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      rol: ["", Validators.required]
    });
  }
  get esConductor() {
    return this.registerForm.get("rol")?.value === "conductor";
  }
  // ── Paso 1: datos ────────────────────────────────────────
  avanzar() {
    if (this.registerForm.invalid) {
      this.showToast("Completa todos los campos correctamente", "warning");
      return;
    }
    if (this.esConductor) {
      this.paso = "foto";
      this.precargarModelo();
    } else {
      this.register();
    }
  }
  // Precarga MediaPipe mientras el conductor lee las instrucciones
  precargarModelo() {
    return __async(this, null, function* () {
      this.cargandoModelo = true;
      try {
        yield this.faceService.inicializar();
      } catch {
        this.showToast("No se pudo cargar el motor de reconocimiento. Verifica tu conexi\xF3n.", "warning");
      } finally {
        this.cargandoModelo = false;
      }
    });
  }
  // ── Paso 2: foto ─────────────────────────────────────────
  tomarFoto() {
    return __async(this, null, function* () {
      try {
        const foto = yield Camera.getPhoto({
          quality: 90,
          resultType: CameraResultType.Base64,
          source: CameraSource.Camera,
          saveToGallery: false
        });
        if (!foto.base64String)
          return;
        this.fotoPreview = `data:image/jpeg;base64,${foto.base64String}`;
        this.procesando = true;
        this.descriptorOk = false;
        this.showToast("\u23F3 Analizando rostro con MediaPipe...", "warning");
        const landmarks = yield this.faceService.extraerLandmarks(foto.base64String);
        this.procesando = false;
        if (!landmarks) {
          this.fotoPreview = null;
          this.showToast("\u274C No se detect\xF3 rostro. Mira de frente con buena luz.", "danger");
          return;
        }
        yield this.faceService.guardarDescriptorReferencia(landmarks);
        this.descriptorOk = true;
        this.showToast(`\u2705 Rostro registrado \u2014 ${landmarks.length / 3} landmarks detectados`, "success");
      } catch {
        this.procesando = false;
        this.showToast("C\xE1mara cancelada", "warning");
      }
    });
  }
  // ── Paso 3: crear cuenta ─────────────────────────────────
  register() {
    return __async(this, null, function* () {
      if (this.registerForm.invalid)
        return;
      if (this.esConductor && !this.descriptorOk) {
        return this.showToast("Primero registra tu foto de referencia", "warning");
      }
      this.isLoading = true;
      try {
        const { nombre, documento, telefono, email, password, rol } = this.registerForm.value;
        yield this.auth.register(email, password, { nombre, documento, telefono, rol });
        this.paso = "listo";
        this.showToast("\u2705 Cuenta creada correctamente", "success");
        setTimeout(() => this.router.navigate(["/login"]), 2e3);
      } catch (e) {
        this.showToast(e.message?.includes("already registered") ? "Este correo ya est\xE1 registrado" : e.message || "Error en registro", "danger");
      } finally {
        this.isLoading = false;
      }
    });
  }
  volver() {
    this.paso = "datos";
  }
  showToast(message, color) {
    return __async(this, null, function* () {
      const t = yield this.toastCtrl.create({ message, color, duration: 3500, position: "top" });
      yield t.present();
    });
  }
};
_RegisterPage.\u0275fac = function RegisterPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegisterPage)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FaceRecognitionService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastController));
};
_RegisterPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterPage, selectors: [["app-register"]], decls: 9, vars: 5, consts: [[2, "--background", "#e91e63", "--color", "white"], ["slot", "start", 4, "ngIf"], [1, "register-content", "ion-padding"], [4, "ngIf"], ["class", "foto-container", 4, "ngIf"], ["class", "listo-container", 4, "ngIf"], ["slot", "start"], [3, "click"], ["name", "arrow-back-outline", "slot", "icon-only"], [1, "logo-container"], ["name", "person-add-outline"], [1, "form-card"], [3, "formGroup"], [1, "input-item"], ["name", "person-outline", "slot", "start"], ["label", "Nombre completo", "label-placement", "floating", "formControlName", "nombre"], ["name", "card-outline", "slot", "start"], ["label", "Documento", "label-placement", "floating", "formControlName", "documento"], ["name", "call-outline", "slot", "start"], ["label", "Tel\xE9fono", "label-placement", "floating", "type", "tel", "formControlName", "telefono"], ["name", "mail-outline", "slot", "start"], ["label", "Email", "label-placement", "floating", "type", "email", "formControlName", "email"], ["color", "danger", 4, "ngIf"], ["name", "lock-closed-outline", "slot", "start"], ["label", "Contrase\xF1a", "label-placement", "floating", "type", "password", "formControlName", "password"], ["name", "people-outline", "slot", "start"], ["label", "Tipo de usuario", "label-placement", "floating", "formControlName", "rol"], ["value", "ciudadano"], ["value", "conductor"], ["class", "aviso-conductor", 4, "ngIf"], ["expand", "block", 1, "register-btn", 3, "click", "disabled"], ["name", "crescent", "slot", "start", 4, "ngIf"], ["slot", "end", 3, "name", 4, "ngIf"], ["expand", "block", "fill", "clear", "routerLink", "/login"], ["name", "log-in-outline", "slot", "start"], ["color", "danger"], [1, "aviso-conductor"], ["name", "scan-outline"], ["name", "crescent", "slot", "start"], ["slot", "end", 3, "name"], [1, "foto-container"], [1, "foto-hero"], ["name", "scan-outline", 1, "scan-icon"], ["class", "foto-preview", 4, "ngIf"], ["class", "foto-marco", 4, "ngIf"], [1, "foto-tips"], [1, "tip"], ["name", "sunny-outline"], ["name", "eye-outline"], ["name", "remove-circle-outline"], ["expand", "block", "color", "primary", 1, "foto-btn", 3, "click", "disabled"], ["name", "camera-outline", "slot", "start"], ["expand", "block", "color", "success", 1, "foto-btn", 3, "click", "disabled"], ["name", "checkmark-circle-outline", "slot", "start", 4, "ngIf"], [1, "foto-preview"], ["alt", "Foto de referencia", 3, "src"], ["class", "foto-overlay", 4, "ngIf"], ["class", "foto-ok", 4, "ngIf"], [1, "foto-overlay"], ["name", "crescent"], [1, "foto-ok"], ["name", "checkmark-circle-outline"], [1, "foto-marco"], [1, "marco-cara"], ["name", "person-circle-outline"], [1, "marco-hint"], ["name", "checkmark-circle-outline", "slot", "start"], [1, "listo-container"], ["name", "checkmark-circle-outline", 1, "listo-icon"], ["name", "dots", "color", "success"]], template: function RegisterPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 0);
    \u0275\u0275template(2, RegisterPage_ion_buttons_2_Template, 3, 0, "ion-buttons", 1);
    \u0275\u0275elementStart(3, "ion-title");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "ion-content", 2);
    \u0275\u0275template(6, RegisterPage_div_6_Template, 41, 8, "div", 3)(7, RegisterPage_div_7_Template, 26, 11, "div", 4)(8, RegisterPage_div_8_Template, 7, 0, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.paso === "foto");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.paso === "datos" ? "Crear cuenta" : ctx.paso === "foto" ? "Registrar rostro" : "\xA1Listo!", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.paso === "datos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.paso === "foto");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.paso === "listo");
  }
}, dependencies: [
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
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
  FormControlName,
  RouterLink
], styles: ["\n\n.register-content[_ngcontent-%COMP%] {\n  --background: #f2f4f8;\n}\n.logo-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 0 20px;\n}\n.logo-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: #e91e63;\n}\n.logo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 8px 0 4px;\n}\n.logo-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #aaa;\n  margin: 0;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);\n}\n.input-item[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  margin-bottom: 8px;\n}\n.aviso-conductor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff8e1;\n  border-radius: 10px;\n  padding: 10px 14px;\n  margin: 10px 0;\n}\n.aviso-conductor[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.aviso-conductor[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #78350f;\n}\n.register-btn[_ngcontent-%COMP%] {\n  --border-radius: 14px;\n  height: 50px;\n  margin-top: 16px;\n  text-transform: none;\n  font-weight: 600;\n  letter-spacing: 0;\n}\n.foto-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 8px 0;\n}\n.foto-hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px 0 8px;\n}\n.foto-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 12px 0 8px;\n}\n.foto-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n  line-height: 1.5;\n  margin: 0;\n}\n.scan-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  color: #e91e63;\n}\n.scan-icon.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1.5s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.foto-marco[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  background: white;\n  border-radius: 20px;\n  padding: 32px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);\n  border: 2px dashed #e0e0e0;\n}\n.marco-cara[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.marco-cara[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: #ddd;\n}\n.marco-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #bbb;\n  margin: 0;\n}\n.foto-preview[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);\n}\n.foto-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  max-height: 280px;\n  object-fit: cover;\n}\n.foto-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  color: white;\n}\n.foto-overlay[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\n.foto-overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.foto-ok[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(29, 158, 117, 0.92);\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n.foto-ok[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.foto-tips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  background: white;\n  border-radius: 14px;\n  padding: 14px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n.tip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.tip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #e91e63;\n  flex-shrink: 0;\n}\n.foto-btn[_ngcontent-%COMP%] {\n  --border-radius: 14px;\n  height: 50px;\n  text-transform: none;\n  font-weight: 600;\n  letter-spacing: 0;\n}\n.listo-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 70%;\n  gap: 16px;\n  text-align: center;\n}\n.listo-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.listo-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #aaa;\n  margin: 0;\n}\n.listo-icon[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: #1D9E75;\n}\n/*# sourceMappingURL=register.page.css.map */"] });
var RegisterPage = _RegisterPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterPage, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [
      IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
      IonButtons,
      IonButton,
      IonItem,
      IonInput,
      IonSelect,
      IonSelectOption,
      IonIcon,
      IonSpinner,
      IonNote,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterLink
    ], template: `<ion-header>\r
  <ion-toolbar style="--background:#e91e63;--color:white">\r
    <ion-buttons slot="start" *ngIf="paso === 'foto'">\r
      <ion-button (click)="volver()">\r
        <ion-icon name="arrow-back-outline" slot="icon-only"></ion-icon>\r
      </ion-button>\r
    </ion-buttons>\r
    <ion-title>\r
      {{ paso === 'datos' ? 'Crear cuenta' : paso === 'foto' ? 'Registrar rostro' : '\xA1Listo!' }}\r
    </ion-title>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="register-content ion-padding">\r
\r
  <!-- \u2550\u2550 DATOS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div *ngIf="paso === 'datos'">\r
    <div class="logo-container">\r
      <ion-icon name="person-add-outline"></ion-icon>\r
      <h1>Registro</h1>\r
      <p>\xDAnete a CleanRoute</p>\r
    </div>\r
\r
    <div class="form-card">\r
      <form [formGroup]="registerForm">\r
\r
        <ion-item class="input-item">\r
          <ion-icon name="person-outline" slot="start"></ion-icon>\r
          <ion-input label="Nombre completo" label-placement="floating" formControlName="nombre"></ion-input>\r
        </ion-item>\r
        <ion-item class="input-item">\r
          <ion-icon name="card-outline" slot="start"></ion-icon>\r
          <ion-input label="Documento" label-placement="floating" formControlName="documento"></ion-input>\r
        </ion-item>\r
        <ion-item class="input-item">\r
          <ion-icon name="call-outline" slot="start"></ion-icon>\r
          <ion-input label="Tel\xE9fono" label-placement="floating" type="tel" formControlName="telefono"></ion-input>\r
        </ion-item>\r
        <ion-item class="input-item">\r
          <ion-icon name="mail-outline" slot="start"></ion-icon>\r
          <ion-input label="Email" label-placement="floating" type="email" formControlName="email"></ion-input>\r
        </ion-item>\r
        <ion-note *ngIf="registerForm.get('email')?.invalid && registerForm.get('email')?.touched" color="danger">\r
          Email inv\xE1lido\r
        </ion-note>\r
        <ion-item class="input-item">\r
          <ion-icon name="lock-closed-outline" slot="start"></ion-icon>\r
          <ion-input label="Contrase\xF1a" label-placement="floating" type="password" formControlName="password"></ion-input>\r
        </ion-item>\r
        <ion-note *ngIf="registerForm.get('password')?.invalid && registerForm.get('password')?.touched" color="danger">\r
          M\xEDnimo 8 caracteres\r
        </ion-note>\r
        <ion-item class="input-item">\r
          <ion-icon name="people-outline" slot="start"></ion-icon>\r
          <ion-select label="Tipo de usuario" label-placement="floating" formControlName="rol">\r
            <ion-select-option value="ciudadano">\u{1F464} Ciudadano</ion-select-option>\r
            <ion-select-option value="conductor">\u{1F69B} Conductor</ion-select-option>\r
          </ion-select>\r
        </ion-item>\r
\r
        <div class="aviso-conductor" *ngIf="esConductor">\r
          <ion-icon name="scan-outline"></ion-icon>\r
          <span>Como conductor registrar\xE1s tu rostro con MediaPipe para verificaci\xF3n en cada recorrido</span>\r
        </div>\r
\r
        <ion-button expand="block" class="register-btn" [disabled]="registerForm.invalid || isLoading" (click)="avanzar()">\r
          <ion-spinner *ngIf="isLoading" name="crescent" slot="start"></ion-spinner>\r
          <ion-icon *ngIf="!isLoading" [name]="esConductor ? 'arrow-forward-outline' : 'checkmark-circle-outline'" slot="end"></ion-icon>\r
          {{ esConductor ? 'Continuar' : (isLoading ? 'Creando...' : 'Crear cuenta') }}\r
        </ion-button>\r
\r
        <ion-button expand="block" fill="clear" routerLink="/login">\r
          <ion-icon name="log-in-outline" slot="start"></ion-icon>\r
          Ya tengo cuenta\r
        </ion-button>\r
      </form>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550 FOTO \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div *ngIf="paso === 'foto'" class="foto-container">\r
\r
    <div class="foto-hero">\r
      <ion-icon name="scan-outline" class="scan-icon" [class.spin]="cargandoModelo"></ion-icon>\r
      <h2>Registra tu rostro</h2>\r
      <p *ngIf="cargandoModelo">Cargando motor MediaPipe...</p>\r
      <p *ngIf="!cargandoModelo">Esta foto se usar\xE1 para verificar tu identidad al iniciar cada recorrido.</p>\r
    </div>\r
\r
    <!-- Preview -->\r
    <div class="foto-preview" *ngIf="fotoPreview">\r
      <img [src]="fotoPreview" alt="Foto de referencia" />\r
      <div class="foto-overlay" *ngIf="procesando">\r
        <ion-spinner name="crescent"></ion-spinner>\r
        <span>Analizando con MediaPipe...</span>\r
      </div>\r
      <div class="foto-ok" *ngIf="descriptorOk && !procesando">\r
        <ion-icon name="checkmark-circle-outline"></ion-icon>\r
        <span>468 landmarks detectados \u2705</span>\r
      </div>\r
    </div>\r
\r
    <!-- Marco gu\xEDa -->\r
    <div class="foto-marco" *ngIf="!fotoPreview">\r
      <div class="marco-cara">\r
        <ion-icon name="person-circle-outline"></ion-icon>\r
      </div>\r
      <p class="marco-hint">Toca el bot\xF3n para abrir la c\xE1mara frontal</p>\r
    </div>\r
\r
    <!-- Tips -->\r
    <div class="foto-tips">\r
      <div class="tip"><ion-icon name="sunny-outline"></ion-icon> Buena iluminaci\xF3n frontal</div>\r
      <div class="tip"><ion-icon name="eye-outline"></ion-icon> Mira directamente a la c\xE1mara</div>\r
      <div class="tip"><ion-icon name="remove-circle-outline"></ion-icon> Sin lentes ni gorras</div>\r
    </div>\r
\r
    <ion-button expand="block" color="primary" class="foto-btn"\r
      [disabled]="procesando || cargandoModelo"\r
      (click)="tomarFoto()">\r
      <ion-icon name="camera-outline" slot="start"></ion-icon>\r
      {{ fotoPreview ? 'Repetir foto' : 'Abrir c\xE1mara' }}\r
    </ion-button>\r
\r
    <ion-button expand="block" color="success" class="foto-btn"\r
      [disabled]="!descriptorOk || isLoading"\r
      (click)="register()">\r
      <ion-spinner *ngIf="isLoading" name="crescent" slot="start"></ion-spinner>\r
      <ion-icon *ngIf="!isLoading" name="checkmark-circle-outline" slot="start"></ion-icon>\r
      Completar registro\r
    </ion-button>\r
\r
  </div>\r
\r
  <!-- \u2550\u2550 LISTO \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div *ngIf="paso === 'listo'" class="listo-container">\r
    <ion-icon name="checkmark-circle-outline" class="listo-icon"></ion-icon>\r
    <h2>\xA1Cuenta creada!</h2>\r
    <p>Redirigiendo al inicio de sesi\xF3n...</p>\r
    <ion-spinner name="dots" color="success"></ion-spinner>\r
  </div>\r
\r
</ion-content>\r
`, styles: ["/* src/app/pages/register/register.page.scss */\n.register-content {\n  --background: #f2f4f8;\n}\n.logo-container {\n  text-align: center;\n  padding: 32px 0 20px;\n}\n.logo-container ion-icon {\n  font-size: 52px;\n  color: #e91e63;\n}\n.logo-container h1 {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 8px 0 4px;\n}\n.logo-container p {\n  font-size: 14px;\n  color: #aaa;\n  margin: 0;\n}\n.form-card {\n  background: white;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);\n}\n.input-item {\n  --border-radius: 12px;\n  margin-bottom: 8px;\n}\n.aviso-conductor {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff8e1;\n  border-radius: 10px;\n  padding: 10px 14px;\n  margin: 10px 0;\n}\n.aviso-conductor ion-icon {\n  color: #f59e0b;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.aviso-conductor span {\n  font-size: 12px;\n  color: #78350f;\n}\n.register-btn {\n  --border-radius: 14px;\n  height: 50px;\n  margin-top: 16px;\n  text-transform: none;\n  font-weight: 600;\n  letter-spacing: 0;\n}\n.foto-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 8px 0;\n}\n.foto-hero {\n  text-align: center;\n  padding: 16px 0 8px;\n}\n.foto-hero h2 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 12px 0 8px;\n}\n.foto-hero p {\n  font-size: 13px;\n  color: #888;\n  line-height: 1.5;\n  margin: 0;\n}\n.scan-icon {\n  font-size: 56px;\n  color: #e91e63;\n}\n.scan-icon.spin {\n  animation: spin 1.5s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.foto-marco {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  background: white;\n  border-radius: 20px;\n  padding: 32px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);\n  border: 2px dashed #e0e0e0;\n}\n.marco-cara {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.marco-cara ion-icon {\n  font-size: 80px;\n  color: #ddd;\n}\n.marco-hint {\n  font-size: 13px;\n  color: #bbb;\n  margin: 0;\n}\n.foto-preview {\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);\n}\n.foto-preview img {\n  width: 100%;\n  display: block;\n  max-height: 280px;\n  object-fit: cover;\n}\n.foto-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  color: white;\n}\n.foto-overlay ion-spinner {\n  width: 36px;\n  height: 36px;\n}\n.foto-overlay span {\n  font-size: 14px;\n  font-weight: 500;\n}\n.foto-ok {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(29, 158, 117, 0.92);\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n.foto-ok ion-icon {\n  font-size: 18px;\n}\n.foto-tips {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  background: white;\n  border-radius: 14px;\n  padding: 14px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n.tip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.tip ion-icon {\n  font-size: 16px;\n  color: #e91e63;\n  flex-shrink: 0;\n}\n.foto-btn {\n  --border-radius: 14px;\n  height: 50px;\n  text-transform: none;\n  font-weight: 600;\n  letter-spacing: 0;\n}\n.listo-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 70%;\n  gap: 16px;\n  text-align: center;\n}\n.listo-container h2 {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.listo-container p {\n  font-size: 14px;\n  color: #aaa;\n  margin: 0;\n}\n.listo-icon {\n  font-size: 80px;\n  color: #1D9E75;\n}\n/*# sourceMappingURL=register.page.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: FaceRecognitionService }, { type: Router }, { type: FormBuilder }, { type: ToastController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterPage, { className: "RegisterPage", filePath: "src/app/pages/register/register.page.ts", lineNumber: 34 });
})();
export {
  RegisterPage
};
//# sourceMappingURL=register.page-H4CW6QJH.js.map
