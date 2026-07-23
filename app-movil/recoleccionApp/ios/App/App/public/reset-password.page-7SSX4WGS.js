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
  LoadingController,
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
  Router,
  SupabaseService,
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

// src/app/pages/reset-password/reset-password.page.ts
function ResetPasswordPage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "ion-spinner", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Verificando enlace...");
    \u0275\u0275elementEnd()();
  }
}
function ResetPasswordPage_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "ion-icon", 8);
    \u0275\u0275elementStart(3, "h2", 9);
    \u0275\u0275text(4, "Crea tu nueva contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 10);
    \u0275\u0275text(6, "M\xEDnimo 6 caracteres.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-item", 11)(8, "ion-input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ResetPasswordPage_div_6_Template_ion_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-button", 13);
    \u0275\u0275listener("click", function ResetPasswordPage_div_6_Template_ion_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePassword());
    });
    \u0275\u0275element(10, "ion-icon", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-item", 11)(12, "ion-input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ResetPasswordPage_div_6_Template_ion_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.confirmPassword, $event) || (ctx_r1.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-button", 16);
    \u0275\u0275listener("click", function ResetPasswordPage_div_6_Template_ion_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updatePassword());
    });
    \u0275\u0275element(14, "ion-icon", 17);
    \u0275\u0275text(15, " Actualizar contrase\xF1a ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.password);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r1.showPassword ? "eye-off-outline" : "eye-outline");
    \u0275\u0275advance(2);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.confirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.password || !ctx_r1.confirmPassword);
  }
}
var _ResetPasswordPage = class _ResetPasswordPage {
  constructor(auth, supabaseService, router, toastCtrl, loadingCtrl) {
    this.auth = auth;
    this.supabaseService = supabaseService;
    this.router = router;
    this.toastCtrl = toastCtrl;
    this.loadingCtrl = loadingCtrl;
    this.password = "";
    this.confirmPassword = "";
    this.showPassword = false;
    this.sesionActiva = false;
    this.verificando = true;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.verificarSesion();
    });
  }
  verificarSesion() {
    return __async(this, null, function* () {
      this.verificando = true;
      try {
        const { data } = yield this.supabaseService.getClient().auth.getSession();
        this.sesionActiva = !!data.session;
        if (!this.sesionActiva) {
          yield this.showToast("El enlace expir\xF3 o ya fue usado. Solicita uno nuevo.", "warning");
          this.router.navigate(["/forgot-password"], { replaceUrl: true });
        }
      } catch {
        this.router.navigate(["/login"], { replaceUrl: true });
      } finally {
        this.verificando = false;
      }
    });
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  updatePassword() {
    return __async(this, null, function* () {
      if (!this.password || !this.confirmPassword)
        return this.showToast("Completa ambos campos", "warning");
      if (this.password.length < 6)
        return this.showToast("La contrase\xF1a debe tener al menos 6 caracteres", "warning");
      if (this.password !== this.confirmPassword)
        return this.showToast("Las contrase\xF1as no coinciden", "danger");
      const loading = yield this.loadingCtrl.create({ message: "Actualizando contrase\xF1a..." });
      yield loading.present();
      try {
        yield this.auth.updatePassword(this.password);
        yield loading.dismiss();
        yield this.showToast("\u2705 Contrase\xF1a actualizada correctamente", "success");
        setTimeout(() => this.router.navigate(["/login"], { replaceUrl: true }), 1500);
      } catch (error) {
        yield loading.dismiss();
        this.showToast(error.message || "Error al actualizar la contrase\xF1a", "danger");
      }
    });
  }
  showToast(message, color) {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({ message, color, duration: 3500, position: "top" });
      yield toast.present();
    });
  }
};
_ResetPasswordPage.\u0275fac = function ResetPasswordPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResetPasswordPage)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SupabaseService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(LoadingController));
};
_ResetPasswordPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordPage, selectors: [["app-reset-password"]], decls: 7, vars: 2, consts: [[2, "--background", "#e91e63", "--color", "white"], [1, "ion-padding"], ["style", "display:flex;flex-direction:column;align-items:center;justify-content:center;height:60%;color:#777", 4, "ngIf"], ["style", "max-width:400px;margin:30px auto", 4, "ngIf"], [2, "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "height", "60%", "color", "#777"], ["name", "crescent"], [2, "max-width", "400px", "margin", "30px auto"], [2, "text-align", "center", "margin-bottom", "30px"], ["name", "lock-open-outline", 2, "font-size", "60px", "color", "#e91e63"], [2, "font-weight", "600", "color", "#333"], [2, "color", "#777", "font-size", "14px"], [2, "--border-radius", "12px", "margin-bottom", "12px"], ["label", "Nueva contrase\xF1a", "label-placement", "floating", 3, "ngModelChange", "type", "ngModel"], ["slot", "end", "fill", "clear", "tabindex", "-1", 3, "click"], [3, "name"], ["label", "Confirmar contrase\xF1a", "label-placement", "floating", 3, "ngModelChange", "type", "ngModel"], ["expand", "block", 2, "--background", "#e91e63", "--border-radius", "12px", "height", "48px", "font-weight", "bold", "margin-top", "20px", 3, "click", "disabled"], ["name", "checkmark-circle-outline", "slot", "start"]], template: function ResetPasswordPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
    \u0275\u0275text(3, "Nueva contrase\xF1a");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 1);
    \u0275\u0275template(5, ResetPasswordPage_div_5_Template, 4, 0, "div", 2)(6, ResetPasswordPage_div_6_Template, 16, 6, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.verificando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.verificando && ctx.sesionActiva);
  }
}, dependencies: [
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonButton,
  IonItem,
  IonIcon,
  IonSpinner,
  FormsModule,
  NgControlStatus,
  NgModel,
  CommonModule,
  NgIf
], encapsulation: 2 });
var ResetPasswordPage = _ResetPasswordPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordPage, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: true, imports: [
      IonContent,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonInput,
      IonButton,
      IonItem,
      IonIcon,
      IonSpinner,
      FormsModule,
      CommonModule
    ], template: `<ion-header>\r
  <ion-toolbar style="--background:#e91e63; --color:white;">\r
    <ion-title>Nueva contrase\xF1a</ion-title>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="ion-padding">\r
\r
  <div *ngIf="verificando" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:60%;color:#777">\r
    <ion-spinner name="crescent"></ion-spinner>\r
    <p>Verificando enlace...</p>\r
  </div>\r
\r
  <div *ngIf="!verificando && sesionActiva" style="max-width:400px;margin:30px auto">\r
\r
    <div style="text-align:center;margin-bottom:30px">\r
      <ion-icon name="lock-open-outline" style="font-size:60px;color:#e91e63"></ion-icon>\r
      <h2 style="font-weight:600;color:#333">Crea tu nueva contrase\xF1a</h2>\r
      <p style="color:#777;font-size:14px">M\xEDnimo 6 caracteres.</p>\r
    </div>\r
\r
    <ion-item style="--border-radius:12px;margin-bottom:12px">\r
      <ion-input label="Nueva contrase\xF1a" label-placement="floating"\r
        [type]="showPassword ? 'text' : 'password'" [(ngModel)]="password">\r
      </ion-input>\r
      <ion-button slot="end" fill="clear" (click)="togglePassword()" tabindex="-1">\r
        <ion-icon [name]="showPassword ? 'eye-off-outline' : 'eye-outline'"></ion-icon>\r
      </ion-button>\r
    </ion-item>\r
\r
    <ion-item style="--border-radius:12px;margin-bottom:12px">\r
      <ion-input label="Confirmar contrase\xF1a" label-placement="floating"\r
        [type]="showPassword ? 'text' : 'password'" [(ngModel)]="confirmPassword">\r
      </ion-input>\r
    </ion-item>\r
\r
    <ion-button expand="block"\r
      style="--background:#e91e63;--border-radius:12px;height:48px;font-weight:bold;margin-top:20px"\r
      [disabled]="!password || !confirmPassword"\r
      (click)="updatePassword()">\r
      <ion-icon name="checkmark-circle-outline" slot="start"></ion-icon>\r
      Actualizar contrase\xF1a\r
    </ion-button>\r
\r
  </div>\r
\r
</ion-content>\r
` }]
  }], () => [{ type: AuthService }, { type: SupabaseService }, { type: Router }, { type: ToastController }, { type: LoadingController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordPage, { className: "ResetPasswordPage", filePath: "src/app/pages/reset-password/reset-password.page.ts", lineNumber: 23 });
})();
export {
  ResetPasswordPage
};
//# sourceMappingURL=reset-password.page-7SSX4WGS.js.map
