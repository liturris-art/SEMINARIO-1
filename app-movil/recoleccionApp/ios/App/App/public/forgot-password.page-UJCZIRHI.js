import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
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
  FormsModule,
  NgControlStatus,
  NgIf,
  NgModel,
  RouterModule,
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

// src/app/pages/forgot-password/forgot-password.page.ts
function ForgotPasswordPage_div_6_ion_spinner_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 14);
  }
}
function ForgotPasswordPage_div_6_ion_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 15);
  }
}
function ForgotPasswordPage_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 5);
    \u0275\u0275element(2, "ion-icon", 6);
    \u0275\u0275elementStart(3, "h2", 7);
    \u0275\u0275text(4, "\xBFOlvidaste tu contrase\xF1a?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6, "Te enviaremos un enlace para recuperarla.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-item", 9)(8, "ion-input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordPage_div_6_Template_ion_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ion-button", 11);
    \u0275\u0275listener("click", function ForgotPasswordPage_div_6_Template_ion_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275template(10, ForgotPasswordPage_div_6_ion_spinner_10_Template, 1, 0, "ion-spinner", 12)(11, ForgotPasswordPage_div_6_ion_icon_11_Template, 1, 0, "ion-icon", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.email || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLoading ? "Enviando..." : "Enviar enlace", " ");
  }
}
function ForgotPasswordPage_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "ion-icon", 17);
    \u0275\u0275elementStart(2, "h2", 7);
    \u0275\u0275text(3, "\xA1Correo enviado!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 8);
    \u0275\u0275text(5, "Revisa tu bandeja de entrada y toca el enlace enviado a ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 18);
    \u0275\u0275text(10, "El enlace abrir\xE1 la app directamente en la pantalla de nueva contrase\xF1a.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.email);
  }
}
var _ForgotPasswordPage = class _ForgotPasswordPage {
  constructor(auth, toastCtrl) {
    this.auth = auth;
    this.toastCtrl = toastCtrl;
    this.email = "";
    this.isLoading = false;
    this.enviado = false;
  }
  reset() {
    return __async(this, null, function* () {
      if (!this.email || !this.email.includes("@"))
        return this.showToast("Ingresa un correo v\xE1lido", "warning");
      this.isLoading = true;
      try {
        yield this.auth.resetPassword(this.email);
        this.enviado = true;
        this.showToast("\u{1F4E7} Revisa tu correo", "success");
      } catch (error) {
        this.showToast(error.message || "Error al enviar el correo", "danger");
      } finally {
        this.isLoading = false;
      }
    });
  }
  showToast(message, color) {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({ message, color, duration: 4e3, position: "top" });
      yield toast.present();
    });
  }
};
_ForgotPasswordPage.\u0275fac = function ForgotPasswordPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForgotPasswordPage)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastController));
};
_ForgotPasswordPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordPage, selectors: [["app-forgot-password"]], decls: 8, vars: 2, consts: [[2, "--background", "#e91e63", "--color", "white"], [1, "ion-padding"], [2, "max-width", "400px", "margin", "30px auto"], [4, "ngIf"], ["style", "text-align:center;margin-top:40px", 4, "ngIf"], [2, "text-align", "center", "margin-bottom", "30px"], ["name", "key-outline", 2, "font-size", "60px", "color", "#e91e63"], [2, "font-weight", "600", "color", "#333"], [2, "color", "#777", "font-size", "14px"], [2, "--border-radius", "12px", "margin-bottom", "12px"], ["label", "Correo electr\xF3nico", "label-placement", "floating", "type", "email", 3, "ngModelChange", "ngModel"], ["expand", "block", 2, "--background", "#e91e63", "--border-radius", "12px", "height", "48px", "font-weight", "bold", "margin-top", "10px", 3, "click", "disabled"], ["slot", "start", "name", "crescent", 4, "ngIf"], ["name", "send-outline", "slot", "start", 4, "ngIf"], ["slot", "start", "name", "crescent"], ["name", "send-outline", "slot", "start"], [2, "text-align", "center", "margin-top", "40px"], ["name", "mail-open-outline", 2, "font-size", "70px", "color", "#22c55e"], [2, "color", "#aaa", "font-size", "13px", "font-style", "italic", "margin-top", "12px"]], template: function ForgotPasswordPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
    \u0275\u0275text(3, "Recuperar contrase\xF1a");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 1)(5, "div", 2);
    \u0275\u0275template(6, ForgotPasswordPage_div_6_Template, 13, 5, "div", 3)(7, ForgotPasswordPage_div_7_Template, 11, 1, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx.enviado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.enviado);
  }
}, dependencies: [
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonIcon,
  IonSpinner,
  FormsModule,
  NgControlStatus,
  NgModel,
  CommonModule,
  NgIf,
  RouterModule
], styles: ["\n\n.reset-content[_ngcontent-%COMP%] {\n  --background: #f7f7f7;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n.main-toolbar[_ngcontent-%COMP%] {\n  --background: #e91e63;\n  --color: white;\n}\n.logo-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 40px;\n  margin-bottom: 25px;\n}\n.logo-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #e91e63;\n}\n.logo-container[_ngcontent-%COMP%]   .app-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: bold;\n  color: #333;\n}\n.logo-container[_ngcontent-%COMP%]   .app-subtitle[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 14px;\n}\n.form-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: white;\n  border-radius: 20px;\n  padding: 25px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n}\n.input-item[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  margin-bottom: 20px;\n}\n.reset-btn[_ngcontent-%COMP%] {\n  height: 50px;\n  --border-radius: 12px;\n  --background: #e91e63;\n  --background-hover: #d81b60;\n  font-weight: bold;\n}\n.back-btn[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  --color: #e91e63;\n}\n/*# sourceMappingURL=forgot-password.page.css.map */"] });
var ForgotPasswordPage = _ForgotPasswordPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordPage, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonInput,
      IonButton,
      IonItem,
      IonIcon,
      IonSpinner,
      FormsModule,
      CommonModule,
      RouterModule
    ], template: `<ion-header>\r
  <ion-toolbar style="--background:#e91e63; --color:white;">\r
    <ion-title>Recuperar contrase\xF1a</ion-title>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="ion-padding">\r
  <div style="max-width:400px;margin:30px auto">\r
\r
    <div *ngIf="!enviado">\r
      <div style="text-align:center;margin-bottom:30px">\r
        <ion-icon name="key-outline" style="font-size:60px;color:#e91e63"></ion-icon>\r
        <h2 style="font-weight:600;color:#333">\xBFOlvidaste tu contrase\xF1a?</h2>\r
        <p style="color:#777;font-size:14px">Te enviaremos un enlace para recuperarla.</p>\r
      </div>\r
\r
      <ion-item style="--border-radius:12px;margin-bottom:12px">\r
        <ion-input label="Correo electr\xF3nico" label-placement="floating"\r
          type="email" [(ngModel)]="email">\r
        </ion-input>\r
      </ion-item>\r
\r
      <ion-button expand="block"\r
        style="--background:#e91e63;--border-radius:12px;height:48px;font-weight:bold;margin-top:10px"\r
        [disabled]="!email || isLoading" (click)="reset()">\r
        <ion-spinner *ngIf="isLoading" slot="start" name="crescent"></ion-spinner>\r
        <ion-icon *ngIf="!isLoading" name="send-outline" slot="start"></ion-icon>\r
        {{ isLoading ? 'Enviando...' : 'Enviar enlace' }}\r
      </ion-button>\r
    </div>\r
\r
    <div *ngIf="enviado" style="text-align:center;margin-top:40px">\r
      <ion-icon name="mail-open-outline" style="font-size:70px;color:#22c55e"></ion-icon>\r
      <h2 style="font-weight:600;color:#333">\xA1Correo enviado!</h2>\r
      <p style="color:#777;font-size:14px">Revisa tu bandeja de entrada y toca el enlace enviado a <strong>{{ email }}</strong>.</p>\r
      <p style="color:#aaa;font-size:13px;font-style:italic;margin-top:12px">El enlace abrir\xE1 la app directamente en la pantalla de nueva contrase\xF1a.</p>\r
    </div>\r
\r
  </div>\r
</ion-content>\r
`, styles: ["/* src/app/pages/forgot-password/forgot-password.page.scss */\n.reset-content {\n  --background: #f7f7f7;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n.main-toolbar {\n  --background: #e91e63;\n  --color: white;\n}\n.logo-container {\n  text-align: center;\n  margin-top: 40px;\n  margin-bottom: 25px;\n}\n.logo-container ion-icon {\n  font-size: 60px;\n  color: #e91e63;\n}\n.logo-container .app-title {\n  font-size: 26px;\n  font-weight: bold;\n  color: #333;\n}\n.logo-container .app-subtitle {\n  color: #777;\n  font-size: 14px;\n}\n.form-card {\n  width: 100%;\n  max-width: 420px;\n  background: white;\n  border-radius: 20px;\n  padding: 25px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n}\n.input-item {\n  --border-radius: 12px;\n  margin-bottom: 20px;\n}\n.reset-btn {\n  height: 50px;\n  --border-radius: 12px;\n  --background: #e91e63;\n  --background-hover: #d81b60;\n  font-weight: bold;\n}\n.back-btn {\n  margin-top: 10px;\n  --color: #e91e63;\n}\n/*# sourceMappingURL=forgot-password.page.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: ToastController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordPage, { className: "ForgotPasswordPage", filePath: "src/app/pages/forgot-password/forgot-password.page.ts", lineNumber: 23 });
})();
export {
  ForgotPasswordPage
};
//# sourceMappingURL=forgot-password.page-UJCZIRHI.js.map
