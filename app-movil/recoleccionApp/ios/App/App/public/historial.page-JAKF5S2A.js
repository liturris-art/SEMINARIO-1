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

// src/app/pages/historial/historial.page.ts
function HistorialPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "ion-spinner", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando recorridos...");
    \u0275\u0275elementEnd()();
  }
}
function HistorialPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "ion-icon", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No se pudo cargar el historial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-button", 12);
    \u0275\u0275listener("click", function HistorialPage_div_12_Template_ion_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cargar());
    });
    \u0275\u0275text(5, " Reintentar ");
    \u0275\u0275elementEnd()();
  }
}
function HistorialPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "ion-icon", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "A\xFAn no hay recorridos registrados");
    \u0275\u0275elementEnd()();
  }
}
function HistorialPage_div_14_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "div", 24)(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 27)(10, "span");
    \u0275\u0275element(11, "ion-icon", 28);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275element(14, "ion-icon", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", ctx_r1.recorridos.length - i_r4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.fecha(r_r3.inicio));
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-activo", !r_r3.fin && r_r3.estado !== "suspendido")("badge-suspendido", r_r3.estado === "suspendido");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.etiqueta(r_r3), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.duracion(r_r3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r3.vehiculo_id || "\u2014");
  }
}
function HistorialPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6, "recorridos");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "div", 19);
    \u0275\u0275elementStart(8, "div", 16)(9, "span", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 18);
    \u0275\u0275text(12, "\xFAltimo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, HistorialPage_div_14_div_13_Template, 16, 9, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.recorridos.length);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.recorridos[0] ? ctx_r1.fecha(ctx_r1.recorridos[0].inicio).split(",")[0] : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.recorridos);
  }
}
var _HistorialPage = class _HistorialPage {
  constructor(recorridosService, router) {
    this.recorridosService = recorridosService;
    this.router = router;
    this.recorridos = [];
    this.cargando = true;
    this.error = false;
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
      } catch (e) {
        console.error("Error cargando historial:", e);
        try {
          this.recorridos = yield this.recorridosService.getRecorridosLocales();
        } catch {
          this.error = true;
        }
      } finally {
        this.cargando = false;
      }
    });
  }
  duracion(r) {
    if (!r.fin)
      return "En curso";
    const mins = Math.round((new Date(r.fin).getTime() - new Date(r.inicio).getTime()) / 6e4);
    if (mins < 60)
      return `${mins} min`;
    return `${Math.floor(mins / 60)}h ${mins % 60}m`;
  }
  // Un recorrido suspendido (caducidad de 24h) tiene fin_en igual que uno
  // finalizado normalmente — sin esto se mostraría como "Completado".
  etiqueta(r) {
    if (r.estado === "suspendido")
      return "Suspendido";
    return r.fin ? "Completado" : "En curso";
  }
  fecha(iso) {
    return new Date(iso).toLocaleDateString("es-CO", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  volver() {
    this.router.navigate(["/menu"]);
  }
};
_HistorialPage.\u0275fac = function HistorialPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HistorialPage)(\u0275\u0275directiveInject(RecorridosService), \u0275\u0275directiveInject(Router));
};
_HistorialPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistorialPage, selectors: [["app-historial"]], decls: 15, vars: 4, consts: [[2, "--background", "#e91e63", "--color", "white"], ["slot", "start"], [3, "click"], ["name", "arrow-back-outline", "slot", "icon-only"], ["slot", "end"], ["name", "refresh-outline", "slot", "icon-only"], [1, "hist-content"], ["class", "estado-center", 4, "ngIf"], ["class", "lista", 4, "ngIf"], [1, "estado-center"], ["name", "crescent", "color", "primary"], ["name", "cloud-offline-outline", 1, "estado-icon"], ["size", "small", "fill", "outline", "color", "primary", 3, "click"], ["name", "map-outline", 1, "estado-icon"], [1, "lista"], [1, "resumen-banner"], [1, "res-stat"], [1, "res-num"], [1, "res-label"], [1, "res-divider"], ["class", "card-recorrido", 4, "ngFor", "ngForOf"], [1, "card-recorrido"], [1, "rec-num"], [1, "rec-body"], [1, "rec-header"], [1, "rec-fecha"], [1, "rec-badge"], [1, "rec-stats"], ["name", "timer-outline"], ["name", "car-outline"]], template: function HistorialPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1)(3, "ion-button", 2);
    \u0275\u0275listener("click", function HistorialPage_Template_ion_button_click_3_listener() {
      return ctx.volver();
    });
    \u0275\u0275element(4, "ion-icon", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-title");
    \u0275\u0275text(6, "Historial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-buttons", 4)(8, "ion-button", 2);
    \u0275\u0275listener("click", function HistorialPage_Template_ion_button_click_8_listener() {
      return ctx.cargar();
    });
    \u0275\u0275element(9, "ion-icon", 5);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "ion-content", 6);
    \u0275\u0275template(11, HistorialPage_div_11_Template, 4, 0, "div", 7)(12, HistorialPage_div_12_Template, 6, 0, "div", 7)(13, HistorialPage_div_13_Template, 4, 0, "div", 7)(14, HistorialPage_div_14_Template, 14, 3, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx.cargando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.cargando && ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.cargando && !ctx.error && ctx.recorridos.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.cargando && !ctx.error && ctx.recorridos.length > 0);
  }
}, dependencies: [IonicModule, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonSpinner, IonTitle, IonToolbar, CommonModule, NgForOf, NgIf], styles: ["\n\n.hist-content[_ngcontent-%COMP%] {\n  --background: #f2f4f8;\n}\n.estado-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 60%;\n  gap: 12px;\n}\n.estado-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 14px;\n}\n.estado-icon[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: #ddd;\n}\n.lista[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.resumen-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n  border-radius: 16px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  margin-bottom: 4px;\n}\n.res-stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.res-num[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 24px;\n  font-weight: 700;\n  color: white;\n}\n.res-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.res-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.25);\n}\n.card-recorrido[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 14px;\n  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.06);\n  padding: 14px 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.rec-num[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #ccc;\n  min-width: 28px;\n  padding-top: 2px;\n}\n.rec-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.rec-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.rec-fecha[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #444;\n  font-weight: 500;\n}\n.rec-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 10px;\n  border-radius: 20px;\n  background: #e8f5e9;\n  color: #388e3c;\n  font-weight: 600;\n}\n.rec-badge.badge-activo[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #f57c00;\n}\n.rec-badge.badge-suspendido[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.rec-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.rec-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #888;\n}\n.rec-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #bbb;\n}\n/*# sourceMappingURL=historial.page.css.map */"] });
var HistorialPage = _HistorialPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistorialPage, [{
    type: Component,
    args: [{ selector: "app-historial", standalone: true, imports: [IonicModule, CommonModule], template: `<ion-header>\r
  <ion-toolbar style="--background:#e91e63;--color:white">\r
    <ion-buttons slot="start">\r
      <ion-button (click)="volver()">\r
        <ion-icon name="arrow-back-outline" slot="icon-only"></ion-icon>\r
      </ion-button>\r
    </ion-buttons>\r
    <ion-title>Historial</ion-title>\r
    <ion-buttons slot="end">\r
      <ion-button (click)="cargar()">\r
        <ion-icon name="refresh-outline" slot="icon-only"></ion-icon>\r
      </ion-button>\r
    </ion-buttons>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="hist-content">\r
\r
  <!-- Cargando -->\r
  <div *ngIf="cargando" class="estado-center">\r
    <ion-spinner name="crescent" color="primary"></ion-spinner>\r
    <p>Cargando recorridos...</p>\r
  </div>\r
\r
  <!-- Error -->\r
  <div *ngIf="!cargando && error" class="estado-center">\r
    <ion-icon name="cloud-offline-outline" class="estado-icon"></ion-icon>\r
    <p>No se pudo cargar el historial</p>\r
    <ion-button size="small" fill="outline" color="primary" (click)="cargar()">\r
      Reintentar\r
    </ion-button>\r
  </div>\r
\r
  <!-- Sin datos -->\r
  <div *ngIf="!cargando && !error && recorridos.length === 0" class="estado-center">\r
    <ion-icon name="map-outline" class="estado-icon"></ion-icon>\r
    <p>A\xFAn no hay recorridos registrados</p>\r
  </div>\r
\r
  <!-- Lista -->\r
  <div *ngIf="!cargando && !error && recorridos.length > 0" class="lista">\r
\r
    <div class="resumen-banner">\r
      <div class="res-stat">\r
        <span class="res-num">{{ recorridos.length }}</span>\r
        <span class="res-label">recorridos</span>\r
      </div>\r
      <div class="res-divider"></div>\r
      <div class="res-stat">\r
        <span class="res-num">{{ recorridos[0] ? fecha(recorridos[0].inicio).split(',')[0] : '\u2014' }}</span>\r
        <span class="res-label">\xFAltimo</span>\r
      </div>\r
    </div>\r
\r
    <div class="card-recorrido" *ngFor="let r of recorridos; let i = index">\r
      <div class="rec-num">#{{ recorridos.length - i }}</div>\r
      <div class="rec-body">\r
        <div class="rec-header">\r
          <span class="rec-fecha">{{ fecha(r.inicio) }}</span>\r
          <span class="rec-badge" [class.badge-activo]="!r.fin && r.estado !== 'suspendido'" [class.badge-suspendido]="r.estado === 'suspendido'">\r
            {{ etiqueta(r) }}\r
          </span>\r
        </div>\r
        <div class="rec-stats">\r
          <span><ion-icon name="timer-outline"></ion-icon> {{ duracion(r) }}</span>\r
          <span><ion-icon name="car-outline"></ion-icon> {{ r.vehiculo_id || '\u2014' }}</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
</ion-content>\r
`, styles: ["/* src/app/pages/historial/historial.page.scss */\n.hist-content {\n  --background: #f2f4f8;\n}\n.estado-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 60%;\n  gap: 12px;\n}\n.estado-center p {\n  color: #888;\n  font-size: 14px;\n}\n.estado-icon {\n  font-size: 52px;\n  color: #ddd;\n}\n.lista {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.resumen-banner {\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n  border-radius: 16px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  margin-bottom: 4px;\n}\n.res-stat {\n  text-align: center;\n}\n.res-num {\n  display: block;\n  font-size: 24px;\n  font-weight: 700;\n  color: white;\n}\n.res-label {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.res-divider {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.25);\n}\n.card-recorrido {\n  background: white;\n  border-radius: 14px;\n  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.06);\n  padding: 14px 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.rec-num {\n  font-size: 12px;\n  font-weight: 700;\n  color: #ccc;\n  min-width: 28px;\n  padding-top: 2px;\n}\n.rec-body {\n  flex: 1;\n}\n.rec-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.rec-fecha {\n  font-size: 13px;\n  color: #444;\n  font-weight: 500;\n}\n.rec-badge {\n  font-size: 11px;\n  padding: 2px 10px;\n  border-radius: 20px;\n  background: #e8f5e9;\n  color: #388e3c;\n  font-weight: 600;\n}\n.rec-badge.badge-activo {\n  background: #fff3e0;\n  color: #f57c00;\n}\n.rec-badge.badge-suspendido {\n  background: #ffebee;\n  color: #c62828;\n}\n.rec-stats {\n  display: flex;\n  gap: 16px;\n}\n.rec-stats span {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #888;\n}\n.rec-stats span ion-icon {\n  font-size: 14px;\n  color: #bbb;\n}\n/*# sourceMappingURL=historial.page.css.map */\n"] }]
  }], () => [{ type: RecorridosService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistorialPage, { className: "HistorialPage", filePath: "src/app/pages/historial/historial.page.ts", lineNumber: 15 });
})();
export {
  HistorialPage
};
//# sourceMappingURL=historial.page-JAKF5S2A.js.map
