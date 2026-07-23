import {
  IonContent,
  IonSpinner,
  IonicModule
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
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
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

// src/app/pages/home/home.page.ts
var _HomePage = class _HomePage {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      try {
        const perfil = yield this.authService.getUserProfile();
        const rol = perfil?.rol?.toLowerCase().trim() || "";
        if (rol === "conductor") {
          this.router.navigate(["/home-conductor"], { replaceUrl: true });
        } else {
          this.router.navigate(["/home-ciudadano"], { replaceUrl: true });
        }
      } catch {
        this.router.navigate(["/home-ciudadano"], { replaceUrl: true });
      }
    });
  }
};
_HomePage.\u0275fac = function HomePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePage)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
};
_HomePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home"]], decls: 3, vars: 0, consts: [[2, "display", "flex", "align-items", "center", "justify-content", "center", "height", "100%"], ["name", "crescent", "color", "primary"]], template: function HomePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "div", 0);
    \u0275\u0275element(2, "ion-spinner", 1);
    \u0275\u0275elementEnd()();
  }
}, dependencies: [IonicModule, IonContent, IonSpinner, CommonModule], encapsulation: 2 });
var HomePage = _HomePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{
      selector: "app-home",
      template: `
    <ion-content>
      <div style="display:flex;align-items:center;justify-content:center;height:100%">
        <ion-spinner name="crescent" color="primary"></ion-spinner>
      </div>
    </ion-content>
  `,
      standalone: true,
      imports: [IonicModule, CommonModule]
    }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/pages/home/home.page.ts", lineNumber: 27 });
})();
export {
  HomePage
};
//# sourceMappingURL=home.page-DJTEYSW7.js.map
