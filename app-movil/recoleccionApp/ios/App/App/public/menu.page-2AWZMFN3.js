import {
  IonButton,
  IonContent,
  IonIcon,
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
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
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
  __async
} from "./chunk-Q3N56TRI.js";

// src/app/pages/menu/menu.page.ts
var _MenuPage = class _MenuPage {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
    this.usuario = {
      nombre: "",
      email: "",
      rol: "",
      inicial: "?"
    };
    this.saludo = "";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const perfil = yield this.authService.getUserProfile();
      if (perfil) {
        this.usuario = {
          nombre: perfil.nombre || perfil.email?.split("@")[0] || "Usuario",
          email: perfil.email || "",
          rol: perfil.rol || "",
          inicial: (perfil.nombre || perfil.email || "U")[0].toUpperCase()
        };
      }
      const hora = (/* @__PURE__ */ new Date()).getHours();
      if (hora < 12)
        this.saludo = "\xA1Buenos d\xEDas";
      else if (hora < 18)
        this.saludo = "\xA1Buenas tardes";
      else
        this.saludo = "\xA1Buenas noches";
    });
  }
  ir(ruta) {
    this.router.navigate([ruta]);
  }
};
_MenuPage.\u0275fac = function MenuPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MenuPage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
};
_MenuPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuPage, selectors: [["app-menu"]], decls: 50, vars: 4, consts: [[1, "menu-content"], [1, "hero"], [1, "hero-bg"], [1, "hero-body"], [1, "avatar"], [1, "hero-text"], [1, "saludo"], [1, "nombre"], [1, "rol-badge"], ["name", "shield-checkmark-outline"], ["fill", "clear", 1, "settings-btn", 3, "click"], ["name", "settings-outline", "slot", "icon-only"], [1, "grid-wrapper"], [1, "card", "card-large", "card-mapa", 3, "click"], [1, "card-icon-wrap"], ["name", "map-outline"], [1, "card-info"], ["name", "chevron-forward-outline", 1, "card-arrow"], [1, "row-2"], [1, "card", "card-sm", "card-perfil", 3, "click"], ["name", "person-outline"], [1, "card", "card-sm", "card-historial", 3, "click"], ["name", "time-outline"], [1, "card", "card-medium", "card-reportes", 3, "click"], ["name", "bar-chart-outline"]], template: function MenuPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "p", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h2", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 8);
    \u0275\u0275element(12, "ion-icon", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ion-button", 10);
    \u0275\u0275listener("click", function MenuPage_Template_ion_button_click_14_listener() {
      return ctx.ir("/configuracion");
    });
    \u0275\u0275element(15, "ion-icon", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
    \u0275\u0275listener("click", function MenuPage_Template_div_click_17_listener() {
      return ctx.ir("/home");
    });
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275element(19, "ion-icon", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 16)(21, "h3");
    \u0275\u0275text(22, "Mapa en vivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24, "Ver rutas y seguimiento GPS");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "ion-icon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "div", 19);
    \u0275\u0275listener("click", function MenuPage_Template_div_click_27_listener() {
      return ctx.ir("/perfil");
    });
    \u0275\u0275elementStart(28, "div", 14);
    \u0275\u0275element(29, "ion-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "h3");
    \u0275\u0275text(31, "Perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, "Mi cuenta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 21);
    \u0275\u0275listener("click", function MenuPage_Template_div_click_34_listener() {
      return ctx.ir("/historial");
    });
    \u0275\u0275elementStart(35, "div", 14);
    \u0275\u0275element(36, "ion-icon", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "h3");
    \u0275\u0275text(38, "Historial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p");
    \u0275\u0275text(40, "Recorridos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 23);
    \u0275\u0275listener("click", function MenuPage_Template_div_click_41_listener() {
      return ctx.ir("/reportes");
    });
    \u0275\u0275elementStart(42, "div", 14);
    \u0275\u0275element(43, "ion-icon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 16)(45, "h3");
    \u0275\u0275text(46, "Reportes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p");
    \u0275\u0275text(48, "Estad\xEDsticas y res\xFAmenes de actividad");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(49, "ion-icon", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.usuario.inicial);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.saludo, ",");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.usuario.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.usuario.rol || "Usuario", " ");
  }
}, dependencies: [IonicModule, IonButton, IonContent, IonIcon, CommonModule], styles: ['@charset "UTF-8";\n\n\n\n.menu-content[_ngcontent-%COMP%] {\n  --background: #f2f4f8;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 56px 24px 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63 0%,\n      #c2185b 60%,\n      #880e4f 100%);\n  overflow: hidden;\n}\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(255, 255, 255, 0.12) 0%,\n      transparent 55%),\n    radial-gradient(\n      circle at 10% 90%,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n.hero-body[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  color: white;\n  font-size: 22px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  letter-spacing: -0.5px;\n}\n.hero-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.saludo[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 13px;\n  margin: 0 0 2px;\n}\n.nombre[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rol-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.rol-badge[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.settings-btn[_ngcontent-%COMP%] {\n  --color: rgba(255,255,255,0.8);\n  --padding-start: 8px;\n  --padding-end: 0;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.grid-wrapper[_ngcontent-%COMP%] {\n  padding: 20px 16px 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);\n  cursor: pointer;\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n  overflow: hidden;\n  position: relative;\n}\n.card[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.card-icon-wrap[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.card-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.card-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.card-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.card-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #888;\n}\n.card-arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #ccc;\n  flex-shrink: 0;\n}\n.card-large[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n}\n.card-large[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  right: -20px;\n  top: -20px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: rgba(29, 158, 117, 0.07);\n}\n.card-mapa[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1D9E75,\n      #0F6E56);\n  width: 56px;\n  height: 56px;\n}\n.row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.card-sm[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 18px;\n  gap: 12px;\n}\n.card-sm[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.card-sm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  color: #999;\n}\n.card-perfil[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n}\n.card-historial[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F5A623,\n      #e08000);\n}\n.card-medium[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 18px 20px;\n}\n.card-reportes[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #378ADD,\n      #1a5fa8);\n}\n/*# sourceMappingURL=menu.page.css.map */'] });
var MenuPage = _MenuPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuPage, [{
    type: Component,
    args: [{ selector: "app-menu", standalone: true, imports: [IonicModule, CommonModule], template: `<ion-content class="menu-content">\r
\r
  <!-- \u2550\u2550 HERO HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="hero">\r
    <div class="hero-bg"></div>\r
\r
    <div class="hero-body">\r
      <div class="avatar">{{ usuario.inicial }}</div>\r
\r
      <div class="hero-text">\r
        <p class="saludo">{{ saludo }},</p>\r
        <h2 class="nombre">{{ usuario.nombre }}</h2>\r
        <span class="rol-badge">\r
          <ion-icon name="shield-checkmark-outline"></ion-icon>\r
          {{ usuario.rol || 'Usuario' }}\r
        </span>\r
      </div>\r
\r
      <ion-button fill="clear" class="settings-btn" (click)="ir('/configuracion')">\r
        <ion-icon name="settings-outline" slot="icon-only"></ion-icon>\r
      </ion-button>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550 GRID DE OPCIONES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="grid-wrapper">\r
\r
    <!-- Mapa \u2014 tarjeta grande destacada -->\r
    <div class="card card-large card-mapa" (click)="ir('/home')">\r
      <div class="card-icon-wrap">\r
        <ion-icon name="map-outline"></ion-icon>\r
      </div>\r
      <div class="card-info">\r
        <h3>Mapa en vivo</h3>\r
        <p>Ver rutas y seguimiento GPS</p>\r
      </div>\r
      <ion-icon name="chevron-forward-outline" class="card-arrow"></ion-icon>\r
    </div>\r
\r
    <!-- Fila de dos tarjetas -->\r
    <div class="row-2">\r
\r
      <div class="card card-sm card-perfil" (click)="ir('/perfil')">\r
        <div class="card-icon-wrap">\r
          <ion-icon name="person-outline"></ion-icon>\r
        </div>\r
        <h3>Perfil</h3>\r
        <p>Mi cuenta</p>\r
      </div>\r
\r
      <div class="card card-sm card-historial" (click)="ir('/historial')">\r
        <div class="card-icon-wrap">\r
          <ion-icon name="time-outline"></ion-icon>\r
        </div>\r
        <h3>Historial</h3>\r
        <p>Recorridos</p>\r
      </div>\r
\r
    </div>\r
\r
    <!-- Reportes \u2014 tarjeta mediana -->\r
    <div class="card card-medium card-reportes" (click)="ir('/reportes')">\r
      <div class="card-icon-wrap">\r
        <ion-icon name="bar-chart-outline"></ion-icon>\r
      </div>\r
      <div class="card-info">\r
        <h3>Reportes</h3>\r
        <p>Estad\xEDsticas y res\xFAmenes de actividad</p>\r
      </div>\r
      <ion-icon name="chevron-forward-outline" class="card-arrow"></ion-icon>\r
    </div>\r
\r
  </div>\r
\r
</ion-content>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/menu/menu.page.scss */\n.menu-content {\n  --background: #f2f4f8;\n}\n.hero {\n  position: relative;\n  padding: 56px 24px 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63 0%,\n      #c2185b 60%,\n      #880e4f 100%);\n  overflow: hidden;\n}\n.hero-bg {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(255, 255, 255, 0.12) 0%,\n      transparent 55%),\n    radial-gradient(\n      circle at 10% 90%,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n.hero-body {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  color: white;\n  font-size: 22px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  letter-spacing: -0.5px;\n}\n.hero-text {\n  flex: 1;\n  min-width: 0;\n}\n.saludo {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 13px;\n  margin: 0 0 2px;\n}\n.nombre {\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rol-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.rol-badge ion-icon {\n  font-size: 13px;\n}\n.settings-btn {\n  --color: rgba(255,255,255,0.8);\n  --padding-start: 8px;\n  --padding-end: 0;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.grid-wrapper {\n  padding: 20px 16px 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.card {\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);\n  cursor: pointer;\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n  overflow: hidden;\n  position: relative;\n}\n.card:active {\n  transform: scale(0.97);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.card-icon-wrap {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.card-icon-wrap ion-icon {\n  font-size: 24px;\n  color: white;\n}\n.card-info {\n  flex: 1;\n  min-width: 0;\n}\n.card-info h3 {\n  margin: 0 0 2px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.card-info p {\n  margin: 0;\n  font-size: 12px;\n  color: #888;\n}\n.card-arrow {\n  font-size: 18px;\n  color: #ccc;\n  flex-shrink: 0;\n}\n.card-large {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n}\n.card-large::before {\n  content: "";\n  position: absolute;\n  right: -20px;\n  top: -20px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: rgba(29, 158, 117, 0.07);\n}\n.card-mapa .card-icon-wrap {\n  background:\n    linear-gradient(\n      135deg,\n      #1D9E75,\n      #0F6E56);\n  width: 56px;\n  height: 56px;\n}\n.row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.card-sm {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 18px;\n  gap: 12px;\n}\n.card-sm h3 {\n  margin: 0 0 2px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.card-sm p {\n  margin: 0;\n  font-size: 11px;\n  color: #999;\n}\n.card-perfil .card-icon-wrap {\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n}\n.card-historial .card-icon-wrap {\n  background:\n    linear-gradient(\n      135deg,\n      #F5A623,\n      #e08000);\n}\n.card-medium {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 18px 20px;\n}\n.card-reportes .card-icon-wrap {\n  background:\n    linear-gradient(\n      135deg,\n      #378ADD,\n      #1a5fa8);\n}\n/*# sourceMappingURL=menu.page.css.map */\n'] }]
  }], () => [{ type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuPage, { className: "MenuPage", filePath: "src/app/pages/menu/menu.page.ts", lineNumber: 14 });
})();
export {
  MenuPage
};
//# sourceMappingURL=menu.page-2AWZMFN3.js.map
