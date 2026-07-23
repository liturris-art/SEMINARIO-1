import {
  CallesService,
  MapViewComponent,
  RutasService,
  takeUntilDestroyed
} from "./chunk-QNWLWCFK.js";
import {
  RecorridosService
} from "./chunk-QB2Y7ELC.js";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar,
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
import "./chunk-ONELXWRX.js";
import "./chunk-APRNP3ZL.js";
import {
  AuthService
} from "./chunk-RFRASXTM.js";
import {
  CommonModule,
  Component,
  DestroyRef,
  NgIf,
  Router,
  ViewChild,
  inject,
  setClassMetadata,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
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

// src/app/pages/home-ciudadano/home-ciudadano.page.ts
function HomeCiudadanoPage_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 33);
    \u0275\u0275listener("click", function HomeCiudadanoPage_ion_button_3_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.irAlMenu());
    });
    \u0275\u0275element(1, "ion-icon", 34);
    \u0275\u0275elementEnd();
  }
}
function HomeCiudadanoPage_ion_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 35);
    \u0275\u0275listener("click", function HomeCiudadanoPage_ion_button_13_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.irAlLogin());
    });
    \u0275\u0275element(1, "ion-icon", 36);
    \u0275\u0275text(2, " Iniciar sesi\xF3n ");
    \u0275\u0275elementEnd();
  }
}
function HomeCiudadanoPage_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" A ", ctx_r1.distanciaCamion, "m \xB7 ETA ", ctx_r1.etaCamion, " ");
  }
}
function HomeCiudadanoPage_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, " Sin camiones activos ahora ");
    \u0275\u0275elementEnd();
  }
}
function HomeCiudadanoPage_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "span", 40);
    \u0275\u0275text(2, " En zona ");
    \u0275\u0275elementEnd();
  }
}
function HomeCiudadanoPage_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "ion-icon", 42);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Inicia sesi\xF3n para ver el historial y m\xE1s funciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-button", 43);
    \u0275\u0275listener("click", function HomeCiudadanoPage_div_40_Template_ion_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.irAlLogin());
    });
    \u0275\u0275text(5, " Iniciar sesi\xF3n ");
    \u0275\u0275elementEnd()();
  }
}
var _HomeCiudadanoPage = class _HomeCiudadanoPage {
  constructor(authService, rutasService, callesService, recorridosService, router) {
    this.authService = authService;
    this.rutasService = rutasService;
    this.callesService = callesService;
    this.recorridosService = recorridosService;
    this.router = router;
    this.nombreUsuario = "Visitante";
    this.inicialUsuario = "V";
    this.tieneSesion = false;
    this.rutas = [];
    this.calles = [];
    this.camionActivo = false;
    this.distanciaCamion = 0;
    this.etaCamion = "";
    this.proximaFecha = "";
    this.proximaHora = "";
    this.panelAbierto = true;
    this.destroyRef = inject(DestroyRef);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      try {
        const perfil = yield this.authService.getUserProfile();
        this.tieneSesion = !!perfil;
        this.nombreUsuario = perfil?.nombre || perfil?.email?.split("@")[0] || "Visitante";
        this.inicialUsuario = this.nombreUsuario[0].toUpperCase();
      } catch {
        this.tieneSesion = false;
        this.nombreUsuario = "Visitante";
        this.inicialUsuario = "V";
      }
      this.rutasService.getRutas().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((r) => {
        this.rutas = r?.data || [];
      });
      this.callesService.getCalles().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((c) => {
        this.calles = c?.data || [];
      });
      this.cargarEstadoCamion();
      this.calcularProximaRecoleccion();
    });
  }
  // ── Estado del camión (recorridos activos) ────────────────
  cargarEstadoCamion() {
    this.recorridosService.getRecorridos().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (res) => {
        const activos = (res?.data || []).filter((r) => !r.fin);
        this.camionActivo = activos.length > 0;
        if (this.camionActivo) {
          this.distanciaCamion = Math.round(Math.random() * 800 + 200);
          const mins = Math.round(this.distanciaCamion / 300);
          this.etaCamion = mins < 1 ? "Llegando" : `~${mins} min`;
        }
      },
      error: () => {
        this.camionActivo = false;
      }
    });
  }
  calcularProximaRecoleccion() {
    const dias = ["Domingo", "Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado"];
    const next = /* @__PURE__ */ new Date();
    next.setDate(next.getDate() + 2);
    this.proximaFecha = `${dias[next.getDay()]} ${next.getDate()}`;
    this.proximaHora = "07:00 AM";
  }
  // Refuerza el recálculo de tamaño del mapa una vez termina la
  // transición de entrada de la página (ver comentario en
  // MapViewComponent.invalidateSize).
  ionViewDidEnter() {
    this.mapView?.invalidateSize();
  }
  togglePanel() {
    this.panelAbierto = !this.panelAbierto;
  }
  irAlLogin() {
    this.router.navigate(["/login"]);
  }
  irAlMenu() {
    this.router.navigate(["/menu"]);
  }
};
_HomeCiudadanoPage.\u0275fac = function HomeCiudadanoPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomeCiudadanoPage)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(RutasService), \u0275\u0275directiveInject(CallesService), \u0275\u0275directiveInject(RecorridosService), \u0275\u0275directiveInject(Router));
};
_HomeCiudadanoPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeCiudadanoPage, selectors: [["app-home-ciudadano"]], viewQuery: function HomeCiudadanoPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MapViewComponent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapView = _t.first);
  }
}, decls: 41, vars: 18, consts: [[1, "home-header"], ["slot", "start"], [3, "click", 4, "ngIf"], [1, "header-user"], [1, "header-avatar"], [1, "header-info"], [1, "header-nombre"], [1, "header-rol"], ["slot", "end"], ["fill", "outline", "size", "small", "color", "primary", 3, "click", 4, "ngIf"], [1, "home-content", 3, "scrollY"], [1, "mapa-fullscreen"], ["userRole", "ciudadano", 3, "rutas", "calles"], [1, "panel"], [1, "panel-handle", 3, "click"], [1, "handle-bar"], [1, "handle-icon", 3, "name"], [1, "panel-body"], [1, "camion-card"], [1, "camion-icon"], ["name", "car-outline"], [1, "camion-info"], [1, "camion-titulo"], ["class", "camion-estado", 4, "ngIf"], ["class", "camion-estado sin", 4, "ngIf"], ["class", "camion-badge", 4, "ngIf"], [1, "proxima-card"], ["name", "calendar-outline", 1, "proxima-icon"], [1, "proxima-info"], [1, "proxima-label"], [1, "proxima-fecha"], [1, "proxima-hora"], ["class", "cta-login", 4, "ngIf"], [3, "click"], ["name", "arrow-back-outline", "slot", "icon-only"], ["fill", "outline", "size", "small", "color", "primary", 3, "click"], ["name", "log-in-outline", "slot", "start"], [1, "camion-estado"], [1, "camion-estado", "sin"], [1, "camion-badge"], [1, "pulse-dot"], [1, "cta-login"], ["name", "person-outline"], ["size", "small", "color", "primary", 3, "click"]], template: function HomeCiudadanoPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
    \u0275\u0275template(3, HomeCiudadanoPage_ion_button_3_Template, 2, 0, "ion-button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5)(8, "span", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 7);
    \u0275\u0275text(11, "Ciudadano");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "ion-buttons", 8);
    \u0275\u0275template(13, HomeCiudadanoPage_ion_button_13_Template, 3, 0, "ion-button", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "ion-content", 10)(15, "div", 11);
    \u0275\u0275element(16, "app-map-view", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13)(18, "div", 14);
    \u0275\u0275listener("click", function HomeCiudadanoPage_Template_div_click_18_listener() {
      return ctx.togglePanel();
    });
    \u0275\u0275element(19, "div", 15)(20, "ion-icon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "div", 18)(23, "div", 19);
    \u0275\u0275element(24, "ion-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 21)(26, "span", 22);
    \u0275\u0275text(27, "Cami\xF3n m\xE1s cercano");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, HomeCiudadanoPage_span_28_Template, 2, 2, "span", 23)(29, HomeCiudadanoPage_span_29_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, HomeCiudadanoPage_div_30_Template, 3, 0, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 26);
    \u0275\u0275element(32, "ion-icon", 27);
    \u0275\u0275elementStart(33, "div", 28)(34, "span", 29);
    \u0275\u0275text(35, "Pr\xF3xima recolecci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 30);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 31);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, HomeCiudadanoPage_div_40_Template, 6, 0, "div", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.tieneSesion);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.inicialUsuario);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.nombreUsuario);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.tieneSesion);
    \u0275\u0275advance();
    \u0275\u0275property("scrollY", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("rutas", ctx.rutas)("calles", ctx.calles);
    \u0275\u0275advance();
    \u0275\u0275classProp("panel-cerrado", !ctx.panelAbierto);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", ctx.panelAbierto ? "chevron-down-outline" : "chevron-up-outline");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("activo", ctx.camionActivo);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.camionActivo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.camionActivo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.camionActivo);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.proximaFecha);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.proximaHora);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.tieneSesion);
  }
}, dependencies: [IonicModule, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonToolbar, CommonModule, NgIf, MapViewComponent], styles: ['@charset "UTF-8";\n\n\n\n.home-content[_ngcontent-%COMP%] {\n  --background: #f2f4f8;\n  --overflow: hidden;\n}\n.home-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #e91e63;\n  --color: white;\n  --min-height: 58px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  --color: white;\n}\n.header-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 4px;\n}\n.header-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: 1.5px solid rgba(255, 255, 255, 0.5);\n  color: white;\n  font-size: 15px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.header-nombre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: white;\n}\n.header-rol[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: capitalize;\n}\n.estado-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 4px 10px;\n  border-radius: 20px;\n  margin-right: 8px;\n}\n.estado-chip.chip-activo[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.3);\n}\n.estado-chip.chip-activo[_ngcontent-%COMP%]   .chip-dot[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.chip-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.6);\n  animation: _ngcontent-%COMP%_pulso 1.5s infinite;\n}\n.home-layout[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.splash-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  gap: 12px;\n}\n.splash-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 14px;\n}\n.mapa-fullscreen[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n}\n.mapa-fullscreen[_ngcontent-%COMP%]   app-map-view[_ngcontent-%COMP%], \n.mapa-fullscreen[_ngcontent-%COMP%]     .map-wrapper {\n  height: 100% !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n}\n.mapa-fullscreen[_ngcontent-%COMP%]     .map-container {\n  height: 100% !important;\n}\n.gps-hud[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 105px;\n  left: 14px;\n  z-index: 500;\n  background: rgba(255, 255, 255, 0.92);\n  border-radius: 22px;\n  padding: 10px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  white-space: nowrap;\n  max-width: calc(100% - 80px);\n  border: 1px solid rgba(255, 255, 255, 0.55);\n  transition: bottom 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s ease;\n}\n.panel[_ngcontent-%COMP%]:not(.panel-cerrado)    ~ .gps-hud[_ngcontent-%COMP%] {\n  bottom: 185px;\n}\n.gps-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 28px;\n  background: rgba(0, 0, 0, 0.08);\n}\n.gps-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.gps-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #e91e63;\n  flex-shrink: 0;\n}\n.gps-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.gps-val[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.gps-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.gps-coords[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #555;\n  font-family: "DM Mono", monospace;\n}\n.panel[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  background: white;\n  border-radius: 24px 24px 0 0;\n  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.15);\n  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  max-height: 72vh;\n  overflow: hidden;\n}\n.panel.panel-cerrado[_ngcontent-%COMP%] {\n  transform: translateY(calc(100% - 20px));\n}\n.panel-handle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 0 4px;\n  cursor: pointer;\n  gap: 2px;\n}\n.handle-bar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 4px;\n  background: #e0e0e0;\n  border-radius: 2px;\n}\n.handle-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #bbb;\n}\n.panel-body[_ngcontent-%COMP%] {\n  padding: 4px 16px 24px;\n  overflow-y: auto;\n  max-height: calc(72vh - 52px);\n}\n.pasos-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.pasos-titulo[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.pasos-contador[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #999;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #f0f0f0;\n  border-radius: 2px;\n  margin-bottom: 14px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #e91e63,\n      #1D9E75);\n  border-radius: 2px;\n  transition: width 0.4s ease;\n}\n.paso-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 14px;\n  margin-bottom: 8px;\n  background: #f8f9fa;\n  border: 1.5px solid transparent;\n  transition: all 0.2s;\n}\n.paso-card.paso-active[_ngcontent-%COMP%] {\n  background: white;\n  border-color: #e91e63;\n  box-shadow: 0 3px 12px rgba(233, 30, 99, 0.12);\n}\n.paso-card.paso-done[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n}\n.paso-card.paso-iniciar[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 4px 0 0;\n}\n.paso-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #e0e0e0;\n  color: #666;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.paso-num.done[_ngcontent-%COMP%] {\n  background: #1D9E75;\n  color: white;\n}\n.paso-num.done[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.paso-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.paso-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #333;\n}\n.paso-select[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.paso-resumen[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n.paso-resumen.ok[_ngcontent-%COMP%] {\n  color: #1D9E75;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.paso-resumen.ok[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.paso-btn[_ngcontent-%COMP%] {\n  --border-radius: 10px;\n  height: 34px;\n  font-size: 12px;\n}\n.btn-iniciar[_ngcontent-%COMP%] {\n  --border-radius: 14px;\n  height: 50px;\n  font-size: 15px;\n  font-weight: 600;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.vehiculo-activo[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 14px;\n  border: 1.5px solid #f0f0f0;\n}\n.va-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.va-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.va-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: white;\n}\n.va-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.va-placa[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.va-modelo[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n.va-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #1D9E75;\n  background: #e1f5ee;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.va-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.va-stat[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 10px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  text-align: center;\n}\n.va-stat[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #e91e63;\n}\n.va-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #555;\n  font-weight: 500;\n}\n.btn-detener[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  height: 44px;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.camion-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: #f8f9fa;\n  border-radius: 16px;\n  margin-bottom: 10px;\n  border: 1.5px solid #f0f0f0;\n  transition: all 0.3s;\n}\n.camion-card.activo[_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  border-color: #9fe1cb;\n}\n.camion-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  flex-shrink: 0;\n}\n.camion-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #1D9E75;\n}\n.camion-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.camion-titulo[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #333;\n}\n.camion-estado[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #1D9E75;\n  font-weight: 500;\n}\n.camion-estado.sin[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n.camion-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #0F6E56;\n  background: white;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.proxima-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n  border-radius: 16px;\n}\n.proxima-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: rgba(255, 255, 255, 0.9);\n  flex-shrink: 0;\n}\n.proxima-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.proxima-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.proxima-fecha[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: white;\n}\n.proxima-hora[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  font-family: "DM Mono", monospace;\n}\n.pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #1D9E75;\n  animation: _ngcontent-%COMP%_pulso 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulso {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.8);\n  }\n}\n/*# sourceMappingURL=home-ciudadano.page.css.map */'] });
var HomeCiudadanoPage = _HomeCiudadanoPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeCiudadanoPage, [{
    type: Component,
    args: [{ selector: "app-home-ciudadano", standalone: true, imports: [IonicModule, CommonModule, MapViewComponent], template: `<ion-header class="home-header">\r
  <ion-toolbar>\r
    <ion-buttons slot="start">\r
      <ion-button (click)="irAlMenu()" *ngIf="tieneSesion">\r
        <ion-icon name="arrow-back-outline" slot="icon-only"></ion-icon>\r
      </ion-button>\r
    </ion-buttons>\r
\r
    <div class="header-user">\r
      <div class="header-avatar">{{ inicialUsuario }}</div>\r
      <div class="header-info">\r
        <span class="header-nombre">{{ nombreUsuario }}</span>\r
        <span class="header-rol">Ciudadano</span>\r
      </div>\r
    </div>\r
\r
    <ion-buttons slot="end">\r
      <ion-button *ngIf="!tieneSesion" (click)="irAlLogin()" fill="outline" size="small" color="primary">\r
        <ion-icon name="log-in-outline" slot="start"></ion-icon>\r
        Iniciar sesi\xF3n\r
      </ion-button>\r
    </ion-buttons>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="home-content" [scrollY]="false">\r
\r
  <!-- Mapa completo -->\r
  <div class="mapa-fullscreen">\r
    <app-map-view\r
      [rutas]="rutas"\r
      [calles]="calles"\r
      userRole="ciudadano">\r
    </app-map-view>\r
  </div>\r
\r
  <!-- Panel inferior -->\r
  <div class="panel" [class.panel-cerrado]="!panelAbierto">\r
\r
    <div class="panel-handle" (click)="togglePanel()">\r
      <div class="handle-bar"></div>\r
      <ion-icon [name]="panelAbierto ? 'chevron-down-outline' : 'chevron-up-outline'" class="handle-icon"></ion-icon>\r
    </div>\r
\r
    <div class="panel-body">\r
\r
      <!-- Estado del cami\xF3n -->\r
      <div class="camion-card" [class.activo]="camionActivo">\r
        <div class="camion-icon">\r
          <ion-icon name="car-outline"></ion-icon>\r
        </div>\r
        <div class="camion-info">\r
          <span class="camion-titulo">Cami\xF3n m\xE1s cercano</span>\r
          <span class="camion-estado" *ngIf="camionActivo">\r
            A {{ distanciaCamion }}m \xB7 ETA {{ etaCamion }}\r
          </span>\r
          <span class="camion-estado sin" *ngIf="!camionActivo">\r
            Sin camiones activos ahora\r
          </span>\r
        </div>\r
        <div class="camion-badge" *ngIf="camionActivo">\r
          <span class="pulse-dot"></span>\r
          En zona\r
        </div>\r
      </div>\r
\r
      <!-- Pr\xF3xima recolecci\xF3n -->\r
      <div class="proxima-card">\r
        <ion-icon name="calendar-outline" class="proxima-icon"></ion-icon>\r
        <div class="proxima-info">\r
          <span class="proxima-label">Pr\xF3xima recolecci\xF3n</span>\r
          <span class="proxima-fecha">{{ proximaFecha }}</span>\r
        </div>\r
        <div class="proxima-hora">{{ proximaHora }}</div>\r
      </div>\r
\r
      <!-- CTA login si es an\xF3nimo -->\r
      <div class="cta-login" *ngIf="!tieneSesion">\r
        <ion-icon name="person-outline"></ion-icon>\r
        <p>Inicia sesi\xF3n para ver el historial y m\xE1s funciones</p>\r
        <ion-button size="small" color="primary" (click)="irAlLogin()">\r
          Iniciar sesi\xF3n\r
        </ion-button>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
</ion-content>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/home-ciudadano/home-ciudadano.page.scss */\n.home-content {\n  --background: #f2f4f8;\n  --overflow: hidden;\n}\n.home-header ion-toolbar {\n  --background: #e91e63;\n  --color: white;\n  --min-height: 58px;\n}\n.btn-back {\n  --color: white;\n}\n.header-user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 4px;\n}\n.header-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: 1.5px solid rgba(255, 255, 255, 0.5);\n  color: white;\n  font-size: 15px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-info {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.header-nombre {\n  font-size: 14px;\n  font-weight: 600;\n  color: white;\n}\n.header-rol {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: capitalize;\n}\n.estado-chip {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 4px 10px;\n  border-radius: 20px;\n  margin-right: 8px;\n}\n.estado-chip.chip-activo {\n  background: rgba(34, 197, 94, 0.3);\n}\n.estado-chip.chip-activo .chip-dot {\n  background: #22c55e;\n}\n.chip-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.6);\n  animation: pulso 1.5s infinite;\n}\n.home-layout {\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.splash-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  gap: 12px;\n}\n.splash-loading p {\n  color: #999;\n  font-size: 14px;\n}\n.mapa-fullscreen {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n}\n.mapa-fullscreen app-map-view,\n.mapa-fullscreen ::ng-deep .map-wrapper {\n  height: 100% !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n}\n.mapa-fullscreen ::ng-deep .map-container {\n  height: 100% !important;\n}\n.gps-hud {\n  position: absolute;\n  bottom: 105px;\n  left: 14px;\n  z-index: 500;\n  background: rgba(255, 255, 255, 0.92);\n  border-radius: 22px;\n  padding: 10px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  white-space: nowrap;\n  max-width: calc(100% - 80px);\n  border: 1px solid rgba(255, 255, 255, 0.55);\n  transition: bottom 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s ease;\n}\n.panel:not(.panel-cerrado) ~ .gps-hud {\n  bottom: 185px;\n}\n.gps-sep {\n  width: 1px;\n  height: 28px;\n  background: rgba(0, 0, 0, 0.08);\n}\n.gps-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.gps-item ion-icon {\n  font-size: 16px;\n  color: #e91e63;\n  flex-shrink: 0;\n}\n.gps-item div {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.gps-val {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.gps-lbl {\n  font-size: 10px;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.gps-coords {\n  font-size: 10px;\n  color: #555;\n  font-family: "DM Mono", monospace;\n}\n.panel {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  background: white;\n  border-radius: 24px 24px 0 0;\n  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.15);\n  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  max-height: 72vh;\n  overflow: hidden;\n}\n.panel.panel-cerrado {\n  transform: translateY(calc(100% - 20px));\n}\n.panel-handle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 0 4px;\n  cursor: pointer;\n  gap: 2px;\n}\n.handle-bar {\n  width: 36px;\n  height: 4px;\n  background: #e0e0e0;\n  border-radius: 2px;\n}\n.handle-icon {\n  font-size: 16px;\n  color: #bbb;\n}\n.panel-body {\n  padding: 4px 16px 24px;\n  overflow-y: auto;\n  max-height: calc(72vh - 52px);\n}\n.pasos-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.pasos-titulo {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.pasos-contador {\n  font-size: 13px;\n  color: #999;\n}\n.progress-bar {\n  height: 4px;\n  background: #f0f0f0;\n  border-radius: 2px;\n  margin-bottom: 14px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #e91e63,\n      #1D9E75);\n  border-radius: 2px;\n  transition: width 0.4s ease;\n}\n.paso-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 14px;\n  margin-bottom: 8px;\n  background: #f8f9fa;\n  border: 1.5px solid transparent;\n  transition: all 0.2s;\n}\n.paso-card.paso-active {\n  background: white;\n  border-color: #e91e63;\n  box-shadow: 0 3px 12px rgba(233, 30, 99, 0.12);\n}\n.paso-card.paso-done {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n}\n.paso-card.paso-iniciar {\n  background: transparent;\n  border: none;\n  padding: 4px 0 0;\n}\n.paso-num {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #e0e0e0;\n  color: #666;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.paso-num.done {\n  background: #1D9E75;\n  color: white;\n}\n.paso-num.done ion-icon {\n  font-size: 16px;\n}\n.paso-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.paso-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #333;\n}\n.paso-select {\n  font-size: 13px;\n}\n.paso-resumen {\n  font-size: 12px;\n  color: #666;\n}\n.paso-resumen.ok {\n  color: #1D9E75;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.paso-resumen.ok ion-icon {\n  font-size: 14px;\n}\n.paso-btn {\n  --border-radius: 10px;\n  height: 34px;\n  font-size: 12px;\n}\n.btn-iniciar {\n  --border-radius: 14px;\n  height: 50px;\n  font-size: 15px;\n  font-weight: 600;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.vehiculo-activo {\n  background: white;\n  border-radius: 16px;\n  padding: 14px;\n  border: 1.5px solid #f0f0f0;\n}\n.va-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.va-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.va-icon ion-icon {\n  font-size: 22px;\n  color: white;\n}\n.va-info {\n  flex: 1;\n}\n.va-placa {\n  display: block;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.va-modelo {\n  font-size: 12px;\n  color: #888;\n}\n.va-badge {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #1D9E75;\n  background: #e1f5ee;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.va-stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.va-stat {\n  background: #f8f9fa;\n  border-radius: 10px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  text-align: center;\n}\n.va-stat ion-icon {\n  font-size: 16px;\n  color: #e91e63;\n}\n.va-stat span {\n  font-size: 11px;\n  color: #555;\n  font-weight: 500;\n}\n.btn-detener {\n  --border-radius: 12px;\n  height: 44px;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.camion-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: #f8f9fa;\n  border-radius: 16px;\n  margin-bottom: 10px;\n  border: 1.5px solid #f0f0f0;\n  transition: all 0.3s;\n}\n.camion-card.activo {\n  background: #e1f5ee;\n  border-color: #9fe1cb;\n}\n.camion-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  flex-shrink: 0;\n}\n.camion-icon ion-icon {\n  font-size: 22px;\n  color: #1D9E75;\n}\n.camion-info {\n  flex: 1;\n}\n.camion-titulo {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #333;\n}\n.camion-estado {\n  font-size: 12px;\n  color: #1D9E75;\n  font-weight: 500;\n}\n.camion-estado.sin {\n  color: #aaa;\n}\n.camion-badge {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #0F6E56;\n  background: white;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.proxima-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n  border-radius: 16px;\n}\n.proxima-icon {\n  font-size: 28px;\n  color: rgba(255, 255, 255, 0.9);\n  flex-shrink: 0;\n}\n.proxima-info {\n  flex: 1;\n}\n.proxima-label {\n  display: block;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.proxima-fecha {\n  font-size: 15px;\n  font-weight: 700;\n  color: white;\n}\n.proxima-hora {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  font-family: "DM Mono", monospace;\n}\n.pulse-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #1D9E75;\n  animation: pulso 1.5s infinite;\n}\n@keyframes pulso {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.8);\n  }\n}\n/*# sourceMappingURL=home-ciudadano.page.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: RutasService }, { type: CallesService }, { type: RecorridosService }, { type: Router }], { mapView: [{
    type: ViewChild,
    args: [MapViewComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeCiudadanoPage, { className: "HomeCiudadanoPage", filePath: "src/app/pages/home-ciudadano/home-ciudadano.page.ts", lineNumber: 20 });
})();
export {
  HomeCiudadanoPage
};
//# sourceMappingURL=home-ciudadano.page-TNID6XS5.js.map
