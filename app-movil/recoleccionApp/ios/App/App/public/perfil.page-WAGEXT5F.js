import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonSpinner,
  IonTitle,
  IonToolbar,
  IonicModule,
  LoadingController,
  TextValueAccessorDirective,
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
  AuthService
} from "./chunk-RFRASXTM.js";
import {
  CommonModule,
  Component,
  FormsModule,
  NgControlStatus,
  NgIf,
  NgModel,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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
  __async
} from "./chunk-Q3N56TRI.js";

// src/app/pages/perfil/perfil.page.ts
function PerfilPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "ion-spinner", 10);
    \u0275\u0275elementEnd();
  }
}
function PerfilPage_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275element(2, "ion-icon", 18);
    \u0275\u0275elementStart(3, "div")(4, "p", 19);
    \u0275\u0275text(5, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 17);
    \u0275\u0275element(9, "ion-icon", 21);
    \u0275\u0275elementStart(10, "div")(11, "p", 19);
    \u0275\u0275text(12, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 20);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 17);
    \u0275\u0275element(16, "ion-icon", 22);
    \u0275\u0275elementStart(17, "div")(18, "p", 19);
    \u0275\u0275text(19, "Documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 20);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 17);
    \u0275\u0275element(23, "ion-icon", 23);
    \u0275\u0275elementStart(24, "div")(25, "p", 19);
    \u0275\u0275text(26, "ID de usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 24);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.usuario.email);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.usuario.telefono || "No registrado");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.usuario.documento || "No registrado");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.usuario.id);
  }
}
function PerfilPage_div_12_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "ion-item", 25)(2, "ion-input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilPage_div_12_div_10_Template_ion_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.nombre, $event) || (ctx_r0.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "ion-item", 25)(4, "ion-input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilPage_div_12_div_10_Template_ion_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.telefono, $event) || (ctx_r0.telefono = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-button", 28);
    \u0275\u0275listener("click", function PerfilPage_div_12_div_10_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.guardar());
    });
    \u0275\u0275element(6, "ion-icon", 29);
    \u0275\u0275text(7, " Guardar cambios ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.telefono);
  }
}
function PerfilPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 11)(2, "div", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275element(7, "ion-icon", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, PerfilPage_div_12_div_9_Template, 29, 4, "div", 15)(10, PerfilPage_div_12_div_10_Template, 8, 2, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.inicial);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.usuario.nombre || "Sin nombre");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.usuario.rol || "Usuario", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.editando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editando);
  }
}
var _PerfilPage = class _PerfilPage {
  constructor(authService, router, toastCtrl, loadingCtrl) {
    this.authService = authService;
    this.router = router;
    this.toastCtrl = toastCtrl;
    this.loadingCtrl = loadingCtrl;
    this.usuario = {};
    this.inicial = "?";
    this.cargando = true;
    this.editando = false;
    this.nombre = "";
    this.telefono = "";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.cargarPerfil();
    });
  }
  cargarPerfil() {
    return __async(this, null, function* () {
      this.cargando = true;
      const perfil = yield this.authService.getUserProfile();
      if (perfil) {
        this.usuario = perfil;
        this.nombre = perfil.nombre || "";
        this.telefono = perfil.telefono || "";
        this.inicial = (perfil.nombre || perfil.email || "U")[0].toUpperCase();
      }
      this.cargando = false;
    });
  }
  toggleEditar() {
    this.editando = !this.editando;
  }
  guardar() {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({ message: "Guardando..." });
      yield loading.present();
      try {
        const supabase = this.authService.supabaseService?.getClient?.();
        if (supabase) {
          yield supabase.auth.updateUser({
            data: { nombre: this.nombre, telefono: this.telefono }
          });
        }
        this.usuario.nombre = this.nombre;
        this.usuario.telefono = this.telefono;
        this.inicial = (this.nombre || this.usuario.email || "U")[0].toUpperCase();
        this.editando = false;
        this.showToast("\u2705 Perfil actualizado", "success");
      } catch {
        this.showToast("Error al guardar", "danger");
      } finally {
        yield loading.dismiss();
      }
    });
  }
  volver() {
    this.router.navigate(["/menu"]);
  }
  showToast(msg, color) {
    return __async(this, null, function* () {
      const t = yield this.toastCtrl.create({ message: msg, color, duration: 2500, position: "top" });
      yield t.present();
    });
  }
};
_PerfilPage.\u0275fac = function PerfilPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PerfilPage)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(LoadingController));
};
_PerfilPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerfilPage, selectors: [["app-perfil"]], decls: 13, vars: 3, consts: [[2, "--background", "#e91e63", "--color", "white"], ["slot", "start"], [3, "click"], ["name", "arrow-back-outline", "slot", "icon-only"], ["slot", "end"], ["slot", "icon-only", 3, "name"], [1, "perfil-content"], ["class", "loading-center", 4, "ngIf"], [4, "ngIf"], [1, "loading-center"], ["name", "crescent", "color", "primary"], [1, "hero-perfil"], [1, "avatar-grande"], [1, "rol-chip"], ["name", "shield-checkmark-outline"], ["class", "seccion", 4, "ngIf"], [1, "seccion"], [1, "info-row"], ["name", "mail-outline"], [1, "info-label"], [1, "info-valor"], ["name", "call-outline"], ["name", "card-outline"], ["name", "finger-print-outline"], [1, "info-valor", "id-val"], [1, "input-item"], ["label", "Nombre", "label-placement", "floating", 3, "ngModelChange", "ngModel"], ["label", "Tel\xE9fono", "label-placement", "floating", "type", "tel", 3, "ngModelChange", "ngModel"], ["expand", "block", "color", "success", 1, "save-btn", 3, "click"], ["name", "checkmark-outline", "slot", "start"]], template: function PerfilPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1)(3, "ion-button", 2);
    \u0275\u0275listener("click", function PerfilPage_Template_ion_button_click_3_listener() {
      return ctx.volver();
    });
    \u0275\u0275element(4, "ion-icon", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-title");
    \u0275\u0275text(6, "Mi perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-buttons", 4)(8, "ion-button", 2);
    \u0275\u0275listener("click", function PerfilPage_Template_ion_button_click_8_listener() {
      return ctx.toggleEditar();
    });
    \u0275\u0275element(9, "ion-icon", 5);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "ion-content", 6);
    \u0275\u0275template(11, PerfilPage_div_11_Template, 2, 0, "div", 7)(12, PerfilPage_div_12_Template, 11, 5, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275property("name", ctx.editando ? "close-outline" : "create-outline");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.cargando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.cargando);
  }
}, dependencies: [IonicModule, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonSpinner, IonTitle, IonToolbar, TextValueAccessorDirective, CommonModule, NgIf, FormsModule, NgControlStatus, NgModel], styles: ["\n\n.perfil-content[_ngcontent-%COMP%] {\n  --background: #f2f4f8;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n}\n.hero-perfil[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n  padding: 40px 20px 32px;\n  text-align: center;\n}\n.hero-perfil[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 22px;\n  font-weight: 700;\n  margin: 12px 0 8px;\n}\n.avatar-grande[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: 3px solid rgba(255, 255, 255, 0.6);\n  color: white;\n  font-size: 32px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n.rol-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  font-size: 12px;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n.rol-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.seccion[_ngcontent-%COMP%] {\n  margin: 16px;\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  padding: 8px 0;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.06);\n}\n.info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.info-row[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #e91e63;\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.info-label[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: 11px;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-valor[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: #222;\n  font-weight: 500;\n}\n.id-val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  word-break: break-all;\n}\n.input-item[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  margin: 8px 12px;\n}\n.save-btn[_ngcontent-%COMP%] {\n  margin: 12px;\n  --border-radius: 12px;\n  text-transform: none;\n  letter-spacing: 0;\n}\n/*# sourceMappingURL=perfil.page.css.map */"] });
var PerfilPage = _PerfilPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerfilPage, [{
    type: Component,
    args: [{ selector: "app-perfil", standalone: true, imports: [IonicModule, CommonModule, FormsModule], template: `<ion-header>\r
  <ion-toolbar style="--background:#e91e63;--color:white">\r
    <ion-buttons slot="start">\r
      <ion-button (click)="volver()">\r
        <ion-icon name="arrow-back-outline" slot="icon-only"></ion-icon>\r
      </ion-button>\r
    </ion-buttons>\r
    <ion-title>Mi perfil</ion-title>\r
    <ion-buttons slot="end">\r
      <ion-button (click)="toggleEditar()">\r
        <ion-icon [name]="editando ? 'close-outline' : 'create-outline'" slot="icon-only"></ion-icon>\r
      </ion-button>\r
    </ion-buttons>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="perfil-content">\r
\r
  <div *ngIf="cargando" class="loading-center">\r
    <ion-spinner name="crescent" color="primary"></ion-spinner>\r
  </div>\r
\r
  <div *ngIf="!cargando">\r
\r
    <!-- Avatar y nombre -->\r
    <div class="hero-perfil">\r
      <div class="avatar-grande">{{ inicial }}</div>\r
      <h2>{{ usuario.nombre || 'Sin nombre' }}</h2>\r
      <span class="rol-chip">\r
        <ion-icon name="shield-checkmark-outline"></ion-icon>\r
        {{ usuario.rol || 'Usuario' }}\r
      </span>\r
    </div>\r
\r
    <!-- Datos (vista) -->\r
    <div class="seccion" *ngIf="!editando">\r
      <div class="info-row">\r
        <ion-icon name="mail-outline"></ion-icon>\r
        <div>\r
          <p class="info-label">Correo electr\xF3nico</p>\r
          <p class="info-valor">{{ usuario.email }}</p>\r
        </div>\r
      </div>\r
      <div class="info-row">\r
        <ion-icon name="call-outline"></ion-icon>\r
        <div>\r
          <p class="info-label">Tel\xE9fono</p>\r
          <p class="info-valor">{{ usuario.telefono || 'No registrado' }}</p>\r
        </div>\r
      </div>\r
      <div class="info-row">\r
        <ion-icon name="card-outline"></ion-icon>\r
        <div>\r
          <p class="info-label">Documento</p>\r
          <p class="info-valor">{{ usuario.documento || 'No registrado' }}</p>\r
        </div>\r
      </div>\r
      <div class="info-row">\r
        <ion-icon name="finger-print-outline"></ion-icon>\r
        <div>\r
          <p class="info-label">ID de usuario</p>\r
          <p class="info-valor id-val">{{ usuario.id }}</p>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Formulario de edici\xF3n -->\r
    <div class="seccion" *ngIf="editando">\r
      <ion-item class="input-item">\r
        <ion-input label="Nombre" label-placement="floating" [(ngModel)]="nombre"></ion-input>\r
      </ion-item>\r
      <ion-item class="input-item">\r
        <ion-input label="Tel\xE9fono" label-placement="floating" type="tel" [(ngModel)]="telefono"></ion-input>\r
      </ion-item>\r
      <ion-button expand="block" color="success" class="save-btn" (click)="guardar()">\r
        <ion-icon name="checkmark-outline" slot="start"></ion-icon>\r
        Guardar cambios\r
      </ion-button>\r
    </div>\r
\r
  </div>\r
\r
</ion-content>\r
`, styles: ["/* src/app/pages/perfil/perfil.page.scss */\n.perfil-content {\n  --background: #f2f4f8;\n}\n.loading-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n}\n.hero-perfil {\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n  padding: 40px 20px 32px;\n  text-align: center;\n}\n.hero-perfil h2 {\n  color: white;\n  font-size: 22px;\n  font-weight: 700;\n  margin: 12px 0 8px;\n}\n.avatar-grande {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: 3px solid rgba(255, 255, 255, 0.6);\n  color: white;\n  font-size: 32px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n.rol-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  font-size: 12px;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n.rol-chip ion-icon {\n  font-size: 13px;\n}\n.seccion {\n  margin: 16px;\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  padding: 8px 0;\n}\n.info-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.06);\n}\n.info-row:last-child {\n  border-bottom: none;\n}\n.info-row ion-icon {\n  font-size: 20px;\n  color: #e91e63;\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.info-label {\n  margin: 0 0 2px;\n  font-size: 11px;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-valor {\n  margin: 0;\n  font-size: 15px;\n  color: #222;\n  font-weight: 500;\n}\n.id-val {\n  font-size: 11px;\n  color: #aaa;\n  word-break: break-all;\n}\n.input-item {\n  --border-radius: 12px;\n  margin: 8px 12px;\n}\n.save-btn {\n  margin: 12px;\n  --border-radius: 12px;\n  text-transform: none;\n  letter-spacing: 0;\n}\n/*# sourceMappingURL=perfil.page.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: ToastController }, { type: LoadingController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerfilPage, { className: "PerfilPage", filePath: "src/app/pages/perfil/perfil.page.ts", lineNumber: 15 });
})();
export {
  PerfilPage
};
//# sourceMappingURL=perfil.page-WAGEXT5F.js.map
