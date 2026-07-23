import {
  RecorridosService
} from "./chunk-QB2Y7ELC.js";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonSpinner,
  IonTitle,
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
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  Router,
  firstValueFrom,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L4S7MW2T.js";
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

// src/app/pages/reportes/reportes.page.ts
function ReportesPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "ion-spinner", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Calculando estad\xEDsticas...");
    \u0275\u0275elementEnd()();
  }
}
function ReportesPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "ion-icon", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No se pudieron cargar los datos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-button", 12);
    \u0275\u0275listener("click", function ReportesPage_div_12_Template_ion_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cargar());
    });
    \u0275\u0275text(5, "Reintentar");
    \u0275\u0275elementEnd()();
  }
}
function ReportesPage_div_13_div_31_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r3.count);
  }
}
function ReportesPage_div_13_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div", 39);
    \u0275\u0275template(3, ReportesPage_div_13_div_31_span_3_Template, 2, 1, "span", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", b_r3.pct || 4, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r3.count > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r3.dia);
  }
}
function ReportesPage_div_13_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span");
    \u0275\u0275element(2, "ion-icon", 43);
    \u0275\u0275text(3, " Suspendidos (superaron 24h)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.stats.suspendidos);
  }
}
function ReportesPage_div_13_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "ion-icon", 45);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "A\xFAn no hay datos para mostrar.");
    \u0275\u0275element(4, "br");
    \u0275\u0275text(5, "Realiza tu primer recorrido.");
    \u0275\u0275elementEnd()();
  }
}
function ReportesPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 13)(2, "div", 14);
    \u0275\u0275element(3, "ion-icon", 15);
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 17);
    \u0275\u0275text(7, "Total recorridos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275element(9, "ion-icon", 19);
    \u0275\u0275elementStart(10, "span", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 17);
    \u0275\u0275text(13, "Completados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 20);
    \u0275\u0275element(15, "ion-icon", 21);
    \u0275\u0275elementStart(16, "span", 16);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 17);
    \u0275\u0275text(19, "En curso");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 22);
    \u0275\u0275element(21, "ion-icon", 23);
    \u0275\u0275elementStart(22, "span", 16);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 17);
    \u0275\u0275text(25, "Promedio");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 24)(27, "h3", 25);
    \u0275\u0275element(28, "ion-icon", 26);
    \u0275\u0275text(29, " Actividad semanal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 27);
    \u0275\u0275template(31, ReportesPage_div_13_div_31_Template, 6, 4, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 24)(33, "h3", 25);
    \u0275\u0275element(34, "ion-icon", 29);
    \u0275\u0275text(35, " Resumen ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 30)(37, "div", 31)(38, "span");
    \u0275\u0275element(39, "ion-icon", 32);
    \u0275\u0275text(40, " D\xEDas activos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "strong");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 31)(44, "span");
    \u0275\u0275element(45, "ion-icon", 33);
    \u0275\u0275text(46, " Tasa de completados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "strong");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 31)(50, "span");
    \u0275\u0275element(51, "ion-icon", 34);
    \u0275\u0275text(52, " Tiempo promedio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(55, ReportesPage_div_13_div_55_Template, 6, 1, "div", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(56, ReportesPage_div_13_div_56_Template, 6, 0, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.stats.total);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.stats.completados);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.stats.enCurso);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.duracionStr(ctx_r1.stats.tiempoPromedioMin));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.barras);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.stats.diasActivos);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.total ? (ctx_r1.stats.completados / ctx_r1.stats.total * 100).toFixed(0) : 0, "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.duracionStr(ctx_r1.stats.tiempoPromedioMin));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.suspendidos > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.total === 0);
  }
}
var _ReportesPage = class _ReportesPage {
  constructor(recorridosService, router) {
    this.recorridosService = recorridosService;
    this.router = router;
    this.stats = { total: 0, completados: 0, suspendidos: 0, enCurso: 0, tiempoPromedioMin: 0, diasActivos: 0 };
    this.recorridos = [];
    this.cargando = true;
    this.error = false;
    this.barras = [];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.cargar();
    });
  }
  cargar() {
    return __async(this, null, function* () {
      this.cargando = true;
      this.error = false;
      try {
        const res = yield firstValueFrom(this.recorridosService.getRecorridos());
        this.recorridos = Array.isArray(res) ? res : res?.data || [];
        this.calcularEstadisticas();
        this.generarBarras();
      } catch (e) {
        console.error("Error cargando reportes:", e);
        try {
          this.recorridos = yield this.recorridosService.getRecorridosLocales();
          this.calcularEstadisticas();
          this.generarBarras();
        } catch {
          this.error = true;
        }
      } finally {
        this.cargando = false;
      }
    });
  }
  calcularEstadisticas() {
    const r = this.recorridos;
    const validos = r.filter((x) => x.estado !== "suspendido");
    this.stats.total = r.length;
    this.stats.suspendidos = r.filter((x) => x.estado === "suspendido").length;
    this.stats.completados = validos.filter((x) => !!x.fin).length;
    this.stats.enCurso = validos.filter((x) => !x.fin).length;
    const tiempos = validos.filter((x) => !!x.fin).map((x) => (new Date(x.fin).getTime() - new Date(x.inicio).getTime()) / 6e4);
    this.stats.tiempoPromedioMin = tiempos.length ? Math.round(tiempos.reduce((a, b) => a + b, 0) / tiempos.length) : 0;
    const dias = new Set(validos.map((x) => new Date(x.inicio).toDateString()));
    this.stats.diasActivos = dias.size;
  }
  generarBarras() {
    const dias = ["Dom", "Lun", "Mar", "Mi\xE9", "Jue", "Vie", "S\xE1b"];
    const conteos = new Array(7).fill(0);
    const hoy = (/* @__PURE__ */ new Date()).getDay();
    this.recorridos.filter((r) => r.estado !== "suspendido").forEach((r) => {
      const d = new Date(r.inicio).getDay();
      conteos[d]++;
    });
    const max = Math.max(...conteos, 1);
    this.barras = Array.from({ length: 7 }, (_, i) => {
      const idx = (hoy - 6 + i + 7) % 7;
      return { dia: dias[idx], pct: Math.round(conteos[idx] / max * 100), count: conteos[idx] };
    });
  }
  duracionStr(min) {
    if (min < 60)
      return `${min} min`;
    return `${Math.floor(min / 60)}h ${min % 60}m`;
  }
  volver() {
    this.router.navigate(["/menu"]);
  }
};
_ReportesPage.\u0275fac = function ReportesPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportesPage)(\u0275\u0275directiveInject(RecorridosService), \u0275\u0275directiveInject(Router));
};
_ReportesPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportesPage, selectors: [["app-reportes"]], decls: 14, vars: 3, consts: [[2, "--background", "#e91e63", "--color", "white"], ["slot", "start"], [3, "click"], ["name", "arrow-back-outline", "slot", "icon-only"], ["slot", "end"], ["name", "refresh-outline", "slot", "icon-only"], [1, "rep-content"], ["class", "estado-center", 4, "ngIf"], [4, "ngIf"], [1, "estado-center"], ["name", "crescent", "color", "primary"], ["name", "cloud-offline-outline", 1, "estado-icon"], ["size", "small", "fill", "outline", 3, "click"], [1, "kpi-grid"], [1, "kpi", "kpi-total"], ["name", "car-outline"], [1, "kpi-num"], [1, "kpi-label"], [1, "kpi", "kpi-ok"], ["name", "checkmark-circle-outline"], [1, "kpi", "kpi-live"], ["name", "radio-outline"], [1, "kpi", "kpi-time"], ["name", "timer-outline"], [1, "card-seccion"], [1, "sec-titulo"], ["name", "bar-chart-outline"], [1, "chart-barras"], ["class", "barra-wrap", 4, "ngFor", "ngForOf"], ["name", "stats-chart-outline"], [1, "resumen-lista"], [1, "res-fila"], ["name", "calendar-outline"], ["name", "checkmark-done-outline"], ["name", "time-outline"], ["class", "res-fila", 4, "ngIf"], ["class", "sin-datos", 4, "ngIf"], [1, "barra-wrap"], [1, "barra-outer"], [1, "barra-inner"], ["class", "barra-count", 4, "ngIf"], [1, "barra-dia"], [1, "barra-count"], ["name", "alert-circle-outline"], [1, "sin-datos"], ["name", "analytics-outline"]], template: function ReportesPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1)(3, "ion-button", 2);
    \u0275\u0275listener("click", function ReportesPage_Template_ion_button_click_3_listener() {
      return ctx.volver();
    });
    \u0275\u0275element(4, "ion-icon", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-title");
    \u0275\u0275text(6, "Reportes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-buttons", 4)(8, "ion-button", 2);
    \u0275\u0275listener("click", function ReportesPage_Template_ion_button_click_8_listener() {
      return ctx.cargar();
    });
    \u0275\u0275element(9, "ion-icon", 5);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "ion-content", 6);
    \u0275\u0275template(11, ReportesPage_div_11_Template, 4, 0, "div", 7)(12, ReportesPage_div_12_Template, 6, 0, "div", 7)(13, ReportesPage_div_13_Template, 57, 10, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx.cargando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.cargando && ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.cargando && !ctx.error);
  }
}, dependencies: [IonicModule, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonSpinner, IonTitle, IonToolbar, CommonModule, NgForOf, NgIf], styles: ["\n\n.rep-content[_ngcontent-%COMP%] {\n  --background: #f2f4f8;\n}\n.estado-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 60%;\n  gap: 12px;\n}\n.estado-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 14px;\n}\n.estado-icon[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: #ddd;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  padding: 16px 16px 4px;\n}\n.kpi[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 16px;\n  text-align: center;\n  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.kpi[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  margin-bottom: 4px;\n}\n.kpi-num[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-total[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #1D9E75;\n}\n.kpi-ok[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.kpi-live[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #F5A623;\n}\n.kpi-time[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.card-seccion[_ngcontent-%COMP%] {\n  margin: 12px 16px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.06);\n  padding: 16px;\n}\n.sec-titulo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 16px;\n}\n.sec-titulo[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #e91e63;\n  font-size: 18px;\n}\n.chart-barras[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-around;\n  height: 90px;\n  gap: 6px;\n}\n.barra-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  flex: 1;\n}\n.barra-outer[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.barra-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 28px;\n  background:\n    linear-gradient(\n      180deg,\n      #e91e63,\n      #c2185b);\n  border-radius: 6px 6px 0 0;\n  min-height: 4px;\n  position: relative;\n  transition: height 0.4s ease;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.barra-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n  font-size: 10px;\n  font-weight: 700;\n  color: #e91e63;\n}\n.barra-dia[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #aaa;\n}\n.resumen-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.res-fila[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 0;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.06);\n}\n.res-fila[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.res-fila[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.res-fila[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #bbb;\n  font-size: 16px;\n}\n.res-fila[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.sin-datos[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n}\n.sin-datos[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: #ddd;\n  display: block;\n  margin-bottom: 12px;\n}\n.sin-datos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #aaa;\n  font-size: 14px;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=reportes.page.css.map */"] });
var ReportesPage = _ReportesPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportesPage, [{
    type: Component,
    args: [{ selector: "app-reportes", standalone: true, imports: [IonicModule, CommonModule], template: '<ion-header>\r\n  <ion-toolbar style="--background:#e91e63;--color:white">\r\n    <ion-buttons slot="start">\r\n      <ion-button (click)="volver()">\r\n        <ion-icon name="arrow-back-outline" slot="icon-only"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Reportes</ion-title>\r\n    <ion-buttons slot="end">\r\n      <ion-button (click)="cargar()">\r\n        <ion-icon name="refresh-outline" slot="icon-only"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class="rep-content">\r\n\r\n  <div *ngIf="cargando" class="estado-center">\r\n    <ion-spinner name="crescent" color="primary"></ion-spinner>\r\n    <p>Calculando estad\xEDsticas...</p>\r\n  </div>\r\n\r\n  <div *ngIf="!cargando && error" class="estado-center">\r\n    <ion-icon name="cloud-offline-outline" class="estado-icon"></ion-icon>\r\n    <p>No se pudieron cargar los datos</p>\r\n    <ion-button size="small" fill="outline" (click)="cargar()">Reintentar</ion-button>\r\n  </div>\r\n\r\n  <div *ngIf="!cargando && !error">\r\n\r\n    <!-- KPIs -->\r\n    <div class="kpi-grid">\r\n\r\n      <div class="kpi kpi-total">\r\n        <ion-icon name="car-outline"></ion-icon>\r\n        <span class="kpi-num">{{ stats.total }}</span>\r\n        <span class="kpi-label">Total recorridos</span>\r\n      </div>\r\n\r\n      <div class="kpi kpi-ok">\r\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\r\n        <span class="kpi-num">{{ stats.completados }}</span>\r\n        <span class="kpi-label">Completados</span>\r\n      </div>\r\n\r\n      <div class="kpi kpi-live">\r\n        <ion-icon name="radio-outline"></ion-icon>\r\n        <span class="kpi-num">{{ stats.enCurso }}</span>\r\n        <span class="kpi-label">En curso</span>\r\n      </div>\r\n\r\n      <div class="kpi kpi-time">\r\n        <ion-icon name="timer-outline"></ion-icon>\r\n        <span class="kpi-num">{{ duracionStr(stats.tiempoPromedioMin) }}</span>\r\n        <span class="kpi-label">Promedio</span>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- Actividad semanal -->\r\n    <div class="card-seccion">\r\n      <h3 class="sec-titulo">\r\n        <ion-icon name="bar-chart-outline"></ion-icon>\r\n        Actividad semanal\r\n      </h3>\r\n\r\n      <div class="chart-barras">\r\n        <div class="barra-wrap" *ngFor="let b of barras">\r\n          <div class="barra-outer">\r\n            <div class="barra-inner" [style.height.%]="b.pct || 4">\r\n              <span class="barra-count" *ngIf="b.count > 0">{{ b.count }}</span>\r\n            </div>\r\n          </div>\r\n          <span class="barra-dia">{{ b.dia }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Resumen adicional -->\r\n    <div class="card-seccion">\r\n      <h3 class="sec-titulo">\r\n        <ion-icon name="stats-chart-outline"></ion-icon>\r\n        Resumen\r\n      </h3>\r\n\r\n      <div class="resumen-lista">\r\n        <div class="res-fila">\r\n          <span><ion-icon name="calendar-outline"></ion-icon> D\xEDas activos</span>\r\n          <strong>{{ stats.diasActivos }}</strong>\r\n        </div>\r\n        <div class="res-fila">\r\n          <span><ion-icon name="checkmark-done-outline"></ion-icon> Tasa de completados</span>\r\n          <strong>{{ stats.total ? ((stats.completados / stats.total) * 100).toFixed(0) : 0 }}%</strong>\r\n        </div>\r\n        <div class="res-fila">\r\n          <span><ion-icon name="time-outline"></ion-icon> Tiempo promedio</span>\r\n          <strong>{{ duracionStr(stats.tiempoPromedioMin) }}</strong>\r\n        </div>\r\n        <div class="res-fila" *ngIf="stats.suspendidos > 0">\r\n          <span><ion-icon name="alert-circle-outline"></ion-icon> Suspendidos (superaron 24h)</span>\r\n          <strong>{{ stats.suspendidos }}</strong>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Sin datos -->\r\n    <div *ngIf="stats.total === 0" class="sin-datos">\r\n      <ion-icon name="analytics-outline"></ion-icon>\r\n      <p>A\xFAn no hay datos para mostrar.<br>Realiza tu primer recorrido.</p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n', styles: ["/* src/app/pages/reportes/reportes.page.scss */\n.rep-content {\n  --background: #f2f4f8;\n}\n.estado-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 60%;\n  gap: 12px;\n}\n.estado-center p {\n  color: #888;\n  font-size: 14px;\n}\n.estado-icon {\n  font-size: 52px;\n  color: #ddd;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  padding: 16px 16px 4px;\n}\n.kpi {\n  background: white;\n  border-radius: 16px;\n  padding: 16px;\n  text-align: center;\n  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.kpi ion-icon {\n  font-size: 26px;\n  margin-bottom: 4px;\n}\n.kpi-num {\n  font-size: 26px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1;\n}\n.kpi-label {\n  font-size: 11px;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-total ion-icon {\n  color: #1D9E75;\n}\n.kpi-ok ion-icon {\n  color: #4caf50;\n}\n.kpi-live ion-icon {\n  color: #F5A623;\n}\n.kpi-time ion-icon {\n  color: #e91e63;\n}\n.card-seccion {\n  margin: 12px 16px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.06);\n  padding: 16px;\n}\n.sec-titulo {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 16px;\n}\n.sec-titulo ion-icon {\n  color: #e91e63;\n  font-size: 18px;\n}\n.chart-barras {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-around;\n  height: 90px;\n  gap: 6px;\n}\n.barra-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  flex: 1;\n}\n.barra-outer {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.barra-inner {\n  width: 100%;\n  max-width: 28px;\n  background:\n    linear-gradient(\n      180deg,\n      #e91e63,\n      #c2185b);\n  border-radius: 6px 6px 0 0;\n  min-height: 4px;\n  position: relative;\n  transition: height 0.4s ease;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.barra-count {\n  position: absolute;\n  top: -18px;\n  font-size: 10px;\n  font-weight: 700;\n  color: #e91e63;\n}\n.barra-dia {\n  font-size: 10px;\n  color: #aaa;\n}\n.resumen-lista {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.res-fila {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 0;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.06);\n}\n.res-fila:last-child {\n  border-bottom: none;\n}\n.res-fila span {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.res-fila span ion-icon {\n  color: #bbb;\n  font-size: 16px;\n}\n.res-fila strong {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.sin-datos {\n  text-align: center;\n  padding: 32px 16px;\n}\n.sin-datos ion-icon {\n  font-size: 52px;\n  color: #ddd;\n  display: block;\n  margin-bottom: 12px;\n}\n.sin-datos p {\n  color: #aaa;\n  font-size: 14px;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=reportes.page.css.map */\n"] }]
  }], () => [{ type: RecorridosService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportesPage, { className: "ReportesPage", filePath: "src/app/pages/reportes/reportes.page.ts", lineNumber: 24 });
})();
export {
  ReportesPage
};
//# sourceMappingURL=reportes.page-S45WGCXT.js.map
