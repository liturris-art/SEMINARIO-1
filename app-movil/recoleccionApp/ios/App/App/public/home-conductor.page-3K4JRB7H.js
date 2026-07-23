import {
  CallesService,
  Geolocation,
  MapViewComponent,
  RutasService,
  takeUntilDestroyed
} from "./chunk-QNWLWCFK.js";
import {
  RecorridosService
} from "./chunk-QB2Y7ELC.js";
import {
  AlertController,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonToolbar,
  IonicModule,
  SelectValueAccessorDirective,
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
  Camera,
  CameraDirection,
  CameraResultType,
  CameraSource,
  FaceRecognitionService
} from "./chunk-4AX262RL.js";
import {
  OfflineSqliteService
} from "./chunk-WPKZ7BPK.js";
import {
  Preferences
} from "./chunk-ONELXWRX.js";
import "./chunk-APRNP3ZL.js";
import {
  AuthService
} from "./chunk-RFRASXTM.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DestroyRef,
  FormsModule,
  HttpClient,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  ViewChild,
  environment,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
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

// src/app/pages/home-conductor/home-conductor.page.ts
function HomeConductorPage_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275element(2, "ion-icon", 26);
    \u0275\u0275elementStart(3, "div")(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 28);
    \u0275\u0275text(7, "km/h");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(8, "div", 29);
    \u0275\u0275elementStart(9, "div", 25);
    \u0275\u0275element(10, "ion-icon", 30);
    \u0275\u0275elementStart(11, "div")(12, "span", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 28);
    \u0275\u0275text(15, "km");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(16, "div", 29);
    \u0275\u0275elementStart(17, "div", 25);
    \u0275\u0275element(18, "ion-icon", 31);
    \u0275\u0275elementStart(19, "div")(20, "span", 32);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 32);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.velocidad);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.distStr);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.latStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lngStr);
  }
}
function HomeConductorPage_ng_container_27_ion_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 52);
  }
}
function HomeConductorPage_ng_container_27_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function HomeConductorPage_ng_container_27_ion_select_15_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r5 = ctx.$implicit;
    \u0275\u0275property("value", v_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", v_r5.placa, " \xB7 ", v_r5.marca, " ", v_r5.modelo, " ");
  }
}
function HomeConductorPage_ng_container_27_ion_select_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-select", 53);
    \u0275\u0275twoWayListener("ngModelChange", function HomeConductorPage_ng_container_27_ion_select_15_Template_ion_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.vehiculoSeleccionado, $event) || (ctx_r1.vehiculoSeleccionado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function HomeConductorPage_ng_container_27_ion_select_15_Template_ion_select_ionChange_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onVehiculoChange());
    });
    \u0275\u0275template(1, HomeConductorPage_ng_container_27_ion_select_15_ion_select_option_1_Template, 2, 4, "ion-select-option", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vehiculoSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.vehiculos);
  }
}
function HomeConductorPage_ng_container_27_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.vehiculoSeleccionado.placa, " \xB7 ", ctx_r1.vehiculoSeleccionado.marca, " ");
  }
}
function HomeConductorPage_ng_container_27_ion_icon_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 52);
  }
}
function HomeConductorPage_ng_container_27_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "2");
    \u0275\u0275elementEnd();
  }
}
function HomeConductorPage_ng_container_27_ion_select_24_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    \u0275\u0275property("value", r_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r7.nombre_ruta, " ");
  }
}
function HomeConductorPage_ng_container_27_ion_select_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function HomeConductorPage_ng_container_27_ion_select_24_Template_ion_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.rutaSeleccionada, $event) || (ctx_r1.rutaSeleccionada = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function HomeConductorPage_ng_container_27_ion_select_24_Template_ion_select_ionChange_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRutaChange());
    });
    \u0275\u0275template(1, HomeConductorPage_ng_container_27_ion_select_24_ion_select_option_1_Template, 2, 2, "ion-select-option", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rutaSeleccionada);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.rutas);
  }
}
function HomeConductorPage_ng_container_27_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "ion-button", 59);
    \u0275\u0275listener("click", function HomeConductorPage_ng_container_27_div_25_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.guardarRutaSeleccionada());
    });
    \u0275\u0275element(2, "ion-icon", 60);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r1.rutaGuardada ? "success" : "primary")("disabled", ctx_r1.guardandoRuta);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.rutaGuardada ? "checkmark-circle-outline" : "save-outline");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.rutaGuardada ? "Ruta guardada \u2713" : "Guardar ruta", " ");
  }
}
function HomeConductorPage_ng_container_27_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.rutaSeleccionada.nombre_ruta, " ");
  }
}
function HomeConductorPage_ng_container_27_ion_icon_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 52);
  }
}
function HomeConductorPage_ng_container_27_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "3");
    \u0275\u0275elementEnd();
  }
}
function HomeConductorPage_ng_container_27_ion_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 61);
    \u0275\u0275listener("click", function HomeConductorPage_ng_container_27_ion_button_34_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.validarIdentidad());
    });
    \u0275\u0275element(1, "ion-icon", 62);
    \u0275\u0275text(2, " Abrir c\xE1mara ");
    \u0275\u0275elementEnd();
  }
}
function HomeConductorPage_ng_container_27_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275element(1, "ion-icon", 64);
    \u0275\u0275text(2, " Verificado ");
    \u0275\u0275elementEnd();
  }
}
function HomeConductorPage_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 33)(2, "span", 34);
    \u0275\u0275text(3, "Preparar recorrido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36);
    \u0275\u0275element(7, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 38)(9, "div", 39);
    \u0275\u0275template(10, HomeConductorPage_ng_container_27_ion_icon_10_Template, 1, 0, "ion-icon", 40)(11, HomeConductorPage_ng_container_27_span_11_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 41)(13, "span", 42);
    \u0275\u0275text(14, "Veh\xEDculo");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, HomeConductorPage_ng_container_27_ion_select_15_Template, 2, 2, "ion-select", 43)(16, HomeConductorPage_ng_container_27_span_16_Template, 2, 2, "span", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 38)(18, "div", 39);
    \u0275\u0275template(19, HomeConductorPage_ng_container_27_ion_icon_19_Template, 1, 0, "ion-icon", 40)(20, HomeConductorPage_ng_container_27_span_20_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 41)(22, "span", 42);
    \u0275\u0275text(23, "Ruta asignada");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, HomeConductorPage_ng_container_27_ion_select_24_Template, 2, 2, "ion-select", 45)(25, HomeConductorPage_ng_container_27_div_25_Template, 4, 4, "div", 46)(26, HomeConductorPage_ng_container_27_span_26_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 38)(28, "div", 39);
    \u0275\u0275template(29, HomeConductorPage_ng_container_27_ion_icon_29_Template, 1, 0, "ion-icon", 40)(30, HomeConductorPage_ng_container_27_span_30_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 41)(32, "span", 42);
    \u0275\u0275text(33, "Verificar identidad");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, HomeConductorPage_ng_container_27_ion_button_34_Template, 3, 0, "ion-button", 47)(35, HomeConductorPage_ng_container_27_span_35_Template, 3, 0, "span", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 49)(37, "ion-button", 50);
    \u0275\u0275listener("click", function HomeConductorPage_ng_container_27_Template_ion_button_click_37_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.iniciarRecorrido());
    });
    \u0275\u0275element(38, "ion-icon", 51);
    \u0275\u0275text(39, " Iniciar recorrido ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.pasoActual, "/4");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", (ctx_r1.pasoActual - 1) * 33.3, "%");
    \u0275\u0275advance();
    \u0275\u0275classProp("paso-done", ctx_r1.pasoCompletado(1))("paso-active", ctx_r1.pasoActual === 1);
    \u0275\u0275advance();
    \u0275\u0275classProp("done", ctx_r1.pasoCompletado(1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pasoCompletado(1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.pasoCompletado(1));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.pasoActual === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vehiculoSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275classProp("paso-done", ctx_r1.pasoCompletado(2))("paso-active", ctx_r1.pasoActual === 2);
    \u0275\u0275advance();
    \u0275\u0275classProp("done", ctx_r1.pasoCompletado(2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pasoCompletado(2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.pasoCompletado(2));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.pasoActual === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rutaSeleccionada);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rutaSeleccionada);
    \u0275\u0275advance();
    \u0275\u0275classProp("paso-done", ctx_r1.pasoCompletado(3))("paso-active", ctx_r1.pasoActual === 3);
    \u0275\u0275advance();
    \u0275\u0275classProp("done", ctx_r1.pasoCompletado(3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pasoCompletado(3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.pasoCompletado(3));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.pasoActual === 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.identidadValidada);
    \u0275\u0275advance();
    \u0275\u0275classProp("paso-active", ctx_r1.pasoActual === 4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.pasoCompletado(1) || !ctx_r1.pasoCompletado(2) || !ctx_r1.pasoCompletado(3));
  }
}
function HomeConductorPage_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "div", 67);
    \u0275\u0275element(3, "ion-icon", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 69)(5, "span", 70);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 71);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 72);
    \u0275\u0275element(10, "span", 73);
    \u0275\u0275text(11, " En ruta ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 74)(13, "div", 75);
    \u0275\u0275element(14, "ion-icon", 76);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 75);
    \u0275\u0275element(18, "ion-icon", 30);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 75);
    \u0275\u0275element(22, "ion-icon", 77);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "ion-button", 78);
    \u0275\u0275listener("click", function HomeConductorPage_div_28_Template_ion_button_click_25_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.detenerRecorrido());
    });
    \u0275\u0275element(26, "ion-icon", 79);
    \u0275\u0275text(27, " Finalizar y guardar recorrido ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.vehiculoSeleccionado == null ? null : ctx_r1.vehiculoSeleccionado.placa);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.vehiculoSeleccionado == null ? null : ctx_r1.vehiculoSeleccionado.marca, " ", ctx_r1.vehiculoSeleccionado == null ? null : ctx_r1.vehiculoSeleccionado.modelo);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.velocidad, " km/h");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.distStr, " km");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r1.rutaSeleccionada == null ? null : ctx_r1.rutaSeleccionada.nombre_ruta) || "\u2014");
  }
}
var KEY_ACTIVO = "recorridoActivoId";
var KEY_INICIO = "recorridoInicioTimestamp";
var LIMITE_24H = 24 * 60 * 60 * 1e3;
var CHECK_5MIN = 5 * 60 * 1e3;
var _HomeConductorPage = class _HomeConductorPage {
  constructor(http, authService, faceService, rutasService, callesService, recorridosService, offlineService, router, toastCtrl, alertCtrl, cdr) {
    this.http = http;
    this.authService = authService;
    this.faceService = faceService;
    this.rutasService = rutasService;
    this.callesService = callesService;
    this.recorridosService = recorridosService;
    this.offlineService = offlineService;
    this.router = router;
    this.toastCtrl = toastCtrl;
    this.alertCtrl = alertCtrl;
    this.cdr = cdr;
    this.nombreUsuario = "";
    this.inicialUsuario = "?";
    this.rutas = [];
    this.calles = [];
    this.vehiculos = [];
    this.vehiculoSeleccionado = null;
    this.rutaSeleccionada = null;
    this.identidadValidada = false;
    this.tracking = false;
    this.pasoActual = 1;
    this.panelAbierto = true;
    this.rutaGuardada = false;
    this.guardandoRuta = false;
    this.lat = 0;
    this.lng = 0;
    this.velocidad = 0;
    this.watchId = null;
    this.ultimaLat = null;
    this.ultimaLng = null;
    this.distanciaAcumulada = 0;
    this.distanciaTotal = 0;
    this.recorridoActivoId = null;
    this.inicioRecorridoMs = null;
    this.timerCaducidad = null;
    this.hitoEnCurso = false;
    this._onOnline = () => this.sincronizarDatos();
    this.destroyRef = inject(DestroyRef);
    this.destruido = false;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const perfil = yield this.authService.getUserProfile();
      this.nombreUsuario = perfil?.nombre || perfil?.email?.split("@")[0] || "Conductor";
      this.inicialUsuario = this.nombreUsuario[0].toUpperCase();
      this.rutasService.getRutas().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((r) => {
        this.rutas = r?.data || [];
      });
      this.callesService.getCalles().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((c) => {
        this.calles = c?.data || [];
      });
      this.http.get(`${environment.apiUrl}/vehiculos?perfil_id=${environment.perfilUrl}`).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({ next: (r) => this.vehiculos = r?.data || r, error: () => {
      } });
      yield this.verificarRecorridoGuardado();
      window.addEventListener("online", this._onOnline);
    });
  }
  ngOnDestroy() {
    this.destruido = true;
    if (this.watchId)
      Geolocation.clearWatch({ id: this.watchId });
    if (this.timerCaducidad)
      clearInterval(this.timerCaducidad);
    window.removeEventListener("online", this._onOnline);
  }
  // Refuerza el recálculo de tamaño del mapa una vez termina la
  // transición de entrada de la página (ver comentario en
  // MapViewComponent.invalidateSize) — la misma causa del mapa "gris"
  // aplica aquí, y este flujo además vuelve del plugin nativo Camera
  // (verificación facial, hito fotográfico) que puede dejar el WebView
  // necesitando un repintado.
  ionViewDidEnter() {
    this.mapView?.invalidateSize();
  }
  volver() {
    this.router.navigateByUrl("/menu");
  }
  togglePanel() {
    this.panelAbierto = !this.panelAbierto;
  }
  pasoCompletado(p) {
    if (p === 1)
      return !!this.vehiculoSeleccionado;
    if (p === 2)
      return !!this.rutaSeleccionada;
    if (p === 3)
      return this.identidadValidada;
    if (p === 4)
      return this.tracking;
    return false;
  }
  avanzarPaso() {
    if (this.pasoActual < 4)
      this.pasoActual = this.pasoActual + 1;
  }
  onVehiculoChange() {
    if (this.vehiculoSeleccionado && this.pasoActual === 1)
      this.avanzarPaso();
  }
  onRutaChange() {
    this.rutaGuardada = false;
    if (this.rutaSeleccionada && this.pasoActual === 2)
      this.avanzarPaso();
  }
  // ── Guardar ruta en mapa + historial ─────────────────────
  guardarRutaSeleccionada() {
    return __async(this, null, function* () {
      if (!this.rutaSeleccionada) {
        this.showToast("Selecciona una ruta primero", "warning");
        return;
      }
      this.guardandoRuta = true;
      try {
        const registro = {
          rutaId: this.rutaSeleccionada.id,
          nombreRuta: this.rutaSeleccionada.nombre_ruta,
          vehiculoId: this.vehiculoSeleccionado?.id || null,
          placa: this.vehiculoSeleccionado?.placa || null,
          fechaRegistro: (/* @__PURE__ */ new Date()).toISOString(),
          conductor: this.nombreUsuario,
          estado: "programada"
        };
        yield Preferences.set({ key: "rutaRegistrada", value: JSON.stringify(registro) });
        yield this.recorridosService.registrarRutaProgramada(registro);
        this.mapView?.destacarRuta(this.rutaSeleccionada);
        this.rutaGuardada = true;
        this.showToast(`\u2705 Ruta "${this.rutaSeleccionada.nombre_ruta}" guardada`, "success");
      } catch (e) {
        console.error(e);
        this.showToast("Error al guardar la ruta", "danger");
      } finally {
        this.guardandoRuta = false;
      }
    });
  }
  // ── Validar identidad facial ──────────────────────────────
  validarIdentidad() {
    return __async(this, null, function* () {
      const tieneRef = yield this.faceService.tieneDescriptorGuardado();
      if (!tieneRef) {
        this.showToast("\u26A0\uFE0F No hay foto de referencia. Vuelve a registrarte.", "warning");
        return;
      }
      try {
        this.showToast("\u{1F4F8} Toma la foto mirando de frente", "warning");
        const foto = yield Camera.getPhoto({
          quality: 85,
          resultType: CameraResultType.Base64,
          source: CameraSource.Camera,
          saveToGallery: false,
          direction: CameraDirection.Front
        });
        if (!foto.base64String) {
          this.showToast("No se pudo obtener la foto", "danger");
          return;
        }
        this.showToast("\u{1F50D} Verificando identidad...", "warning");
        const resultado = yield this.faceService.verificarIdentidad(foto.base64String);
        if (resultado.error) {
          this.showToast(`\u274C ${resultado.error}`, "danger");
          return;
        }
        if (resultado.verificado) {
          this.identidadValidada = true;
          this.avanzarPaso();
          this.showToast(`\u2705 Identidad verificada (${resultado.confianza}%)`, "success");
        } else {
          this.showToast(`\u274C Rostro no reconocido (${resultado.confianza}%). Mejor iluminaci\xF3n.`, "danger");
        }
      } catch {
        this.showToast("Verificaci\xF3n cancelada", "warning");
      }
    });
  }
  // ── Iniciar recorrido ─────────────────────────────────────
  iniciarRecorrido() {
    return __async(this, null, function* () {
      if (!this.vehiculoSeleccionado)
        return this.showToast("Seleccione un veh\xEDculo", "warning");
      if (!this.rutaSeleccionada)
        return this.showToast("Seleccione una ruta", "warning");
      if (!this.identidadValidada)
        return this.showToast("Valide su identidad", "warning");
      let pos;
      try {
        pos = yield Geolocation.getCurrentPosition();
      } catch {
        this.showToast("\u274C No se pudo obtener la ubicaci\xF3n. Verifica que el GPS est\xE9 activado.", "danger");
        return;
      }
      let rec;
      try {
        rec = yield this.recorridosService.iniciarRecorrido(this.rutaSeleccionada?.id, this.vehiculoSeleccionado?.id);
      } catch (e) {
        this.showToast(`\u274C ${e?.error?.message || e?.message || "Error al iniciar"}`, "danger");
        return;
      }
      this.recorridoActivoId = rec.id;
      this.inicioRecorridoMs = Date.now();
      this.tracking = true;
      this.pasoActual = 4;
      this.panelAbierto = false;
      this.distanciaTotal = 0;
      this.distanciaAcumulada = 0;
      this.ultimaLat = null;
      this.ultimaLng = null;
      this.hitoEnCurso = false;
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
      try {
        yield Preferences.set({ key: KEY_ACTIVO, value: rec.id });
        yield Preferences.set({ key: KEY_INICIO, value: Date.now().toString() });
        this._iniciarTimerCaducidad();
        yield this.sincronizarDatos();
        const watchId = yield Geolocation.watchPosition({ enableHighAccuracy: true }, (pos2) => {
          if (!pos2)
            return;
          this.lat = pos2.coords.latitude;
          this.lng = pos2.coords.longitude;
          this.velocidad = Math.round((pos2.coords.speed || 0) * 3.6);
          this.mapView?.actualizarCamion(this.lat, this.lng, this.velocidad);
          this.procesarDistancia();
          this.cdr.detectChanges();
        });
        if (this.destruido) {
          Geolocation.clearWatch({ id: watchId });
          return;
        }
        this.watchId = watchId;
        this.showToast("\u{1F69B} Recorrido iniciado", "success");
      } catch (e) {
        yield this._revertirInicioFallido();
        this.showToast(`\u274C ${e?.error?.message || e?.message || "No se pudo iniciar el seguimiento GPS"}`, "danger");
      }
    });
  }
  _revertirInicioFallido() {
    return __async(this, null, function* () {
      try {
        if (this.recorridoActivoId) {
          yield this.recorridosService.finalizarRecorrido(this.recorridoActivoId, 0, this.rutaSeleccionada?.nombre_ruta, this.vehiculoSeleccionado?.placa);
        }
      } catch (e) {
        console.warn("Error revirtiendo recorrido:", e);
      }
      yield this._resetEstadoTracking();
    });
  }
  _resetEstadoTracking() {
    return __async(this, null, function* () {
      this.tracking = false;
      this.recorridoActivoId = null;
      this.hitoEnCurso = false;
      this.inicioRecorridoMs = null;
      if (this.watchId) {
        Geolocation.clearWatch({ id: this.watchId });
        this.watchId = null;
      }
      if (this.timerCaducidad) {
        clearInterval(this.timerCaducidad);
        this.timerCaducidad = null;
      }
      yield Preferences.remove({ key: KEY_ACTIVO });
      yield Preferences.remove({ key: KEY_INICIO });
      this.panelAbierto = true;
      this.pasoActual = 1;
    });
  }
  // ── Detener recorrido → guarda en historial ───────────────
  // estado='suspendido' lo usa el timer de caducidad de 24h (ver
  // _iniciarTimerCaducidad) para que el recorrido quede marcado como
  // inválido en vez de "finalizado" normalmente.
  detenerRecorrido(estado = "finalizado") {
    return __async(this, null, function* () {
      if (!this.tracking)
        return;
      try {
        if (this.recorridoActivoId) {
          yield this.recorridosService.finalizarRecorrido(this.recorridoActivoId, this.distanciaTotal, this.rutaSeleccionada?.nombre_ruta, this.vehiculoSeleccionado?.placa, estado);
        }
      } catch (e) {
        console.warn("Error finalizando recorrido:", e);
      }
      yield this._resetEstadoTracking();
      if (estado === "suspendido") {
        this.showToast("\u23F0 Recorrido suspendido por superar 24 h", "warning");
      } else {
        this.showToast("\u2705 Recorrido finalizado y guardado en historial", "success");
      }
    });
  }
  // ── GPS ───────────────────────────────────────────────────
  procesarDistancia() {
    if (this.ultimaLat == null || this.ultimaLng == null) {
      this.ultimaLat = this.lat;
      this.ultimaLng = this.lng;
      this.enviarPosicion(this.lat, this.lng);
      return;
    }
    const d = this.calcHaversine(this.ultimaLat, this.ultimaLng, this.lat, this.lng);
    if (d >= 5e-3)
      this.enviarPosicion(this.lat, this.lng);
    this.distanciaAcumulada += d;
    this.distanciaTotal += d;
    if (this.distanciaAcumulada >= 1 && !this.hitoEnCurso) {
      this.dispararHito();
      this.distanciaAcumulada = 0;
    }
    this.ultimaLat = this.lat;
    this.ultimaLng = this.lng;
  }
  calcHaversine(la1, lo1, la2, lo2) {
    const R = 6371, dL = this.rad(la2 - la1), dO = this.rad(lo2 - lo1);
    const a = Math.sin(dL / 2) ** 2 + Math.cos(this.rad(la1)) * Math.cos(this.rad(la2)) * Math.sin(dO / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  rad(v) {
    return v * Math.PI / 180;
  }
  enviarPosicion(lat, lon, foto) {
    return __async(this, null, function* () {
      if (!this.recorridoActivoId)
        return;
      if (navigator.onLine) {
        try {
          yield this.recorridosService.registrarPosicion(this.recorridoActivoId, lat, lon, foto);
        } catch {
          yield this.offlineService.guardar({ recorridoId: this.recorridoActivoId, lat, lon, foto: foto ?? null, timestamp: Date.now() });
        }
      } else {
        yield this.offlineService.guardar({ recorridoId: this.recorridoActivoId, lat, lon, foto: foto ?? null, timestamp: Date.now() });
      }
    });
  }
  sincronizarDatos() {
    return __async(this, null, function* () {
      if (!navigator.onLine)
        return;
      const pendientes = yield this.offlineService.obtenerTodos();
      if (!pendientes.length)
        return;
      let ok = true;
      for (const item of pendientes) {
        try {
          yield this.recorridosService.registrarPosicion(item.recorridoId, item.lat, item.lon, item.foto);
        } catch {
          ok = false;
          break;
        }
      }
      if (ok)
        yield this.offlineService.limpiar();
    });
  }
  // ── Hito fotográfico ──────────────────────────────────────
  dispararHito() {
    return __async(this, null, function* () {
      if (this.hitoEnCurso)
        return;
      this.hitoEnCurso = true;
      const alert = yield this.alertCtrl.create({
        header: "\u{1F4CD} Hito de control \u2014 1 km",
        message: "\xBFDeseas capturar una fotograf\xEDa de evidencia?",
        buttons: [
          { text: "Omitir", role: "cancel", handler: () => {
            this.enviarPosicion(this.lat, this.lng, null);
            this.hitoEnCurso = false;
          } },
          { text: "\u{1F4F8} Foto", handler: () => __async(this, null, function* () {
            try {
              const img = yield Camera.getPhoto({ quality: 50, resultType: CameraResultType.Base64, source: CameraSource.Camera, saveToGallery: false });
              if (img.base64String) {
                yield this.enviarPosicion(this.lat, this.lng, img.base64String);
                this.showToast("\u2705 Foto registrada", "success");
              } else {
                yield this.enviarPosicion(this.lat, this.lng, null);
              }
            } catch {
              yield this.enviarPosicion(this.lat, this.lng, null);
            }
            this.hitoEnCurso = false;
          }) }
        ]
      });
      yield alert.present();
    });
  }
  // ── Caducidad 24 h ────────────────────────────────────────
  _iniciarTimerCaducidad() {
    if (this.timerCaducidad)
      clearInterval(this.timerCaducidad);
    this.timerCaducidad = setInterval(() => __async(this, null, function* () {
      if (!this.inicioRecorridoMs || !this.tracking)
        return;
      if (Date.now() - this.inicioRecorridoMs >= LIMITE_24H) {
        clearInterval(this.timerCaducidad);
        this.timerCaducidad = null;
        yield this.detenerRecorrido("suspendido");
        const a = yield this.alertCtrl.create({
          header: "\u23F0 Recorrido suspendido",
          message: "El recorrido super\xF3 24 h y fue guardado autom\xE1ticamente.",
          buttons: [{ text: "Entendido" }]
        });
        yield a.present();
      }
    }), CHECK_5MIN);
  }
  // ── Verificar recorrido activo al volver a la app ─────────
  verificarRecorridoGuardado() {
    return __async(this, null, function* () {
      const { value: id } = yield Preferences.get({ key: KEY_ACTIVO });
      if (!id)
        return;
      const { value: tsStr } = yield Preferences.get({ key: KEY_INICIO });
      const inicioMs = tsStr ? parseInt(tsStr, 10) : 0;
      if (!inicioMs || Date.now() - inicioMs >= LIMITE_24H) {
        try {
          yield this.recorridosService.finalizarRecorrido(id, 0, void 0, void 0, "suspendido");
        } catch (e) {
          console.warn("Error suspendiendo recorrido vencido:", e);
        }
        yield Preferences.remove({ key: KEY_ACTIVO });
        yield Preferences.remove({ key: KEY_INICIO });
        this.showToast("Recorrido anterior suspendido por superar 24 h.", "warning");
        return;
      }
      const mins = Math.floor((LIMITE_24H - (Date.now() - inicioMs)) / 6e4);
      const alert = yield this.alertCtrl.create({
        header: "Recorrido en curso",
        message: `Tienes un recorrido activo con ${mins} min restantes. \xBFRetomar?`,
        buttons: [
          { text: "Descartar", role: "cancel", handler: () => __async(this, null, function* () {
            try {
              yield this.recorridosService.finalizarRecorrido(id, 0, void 0, void 0, "suspendido");
            } catch (e) {
              console.warn("Error suspendiendo recorrido descartado:", e);
            }
            yield Preferences.remove({ key: KEY_ACTIVO });
            yield Preferences.remove({ key: KEY_INICIO });
          }) },
          { text: "Retomar", handler: () => {
            this.recorridoActivoId = id;
            this.inicioRecorridoMs = inicioMs;
            this.tracking = true;
            this.pasoActual = 4;
            this.panelAbierto = false;
            this._iniciarTimerCaducidad();
            Geolocation.watchPosition({ enableHighAccuracy: true }, (pos) => {
              if (!pos)
                return;
              this.lat = pos.coords.latitude;
              this.lng = pos.coords.longitude;
              this.velocidad = Math.round((pos.coords.speed || 0) * 3.6);
              this.mapView?.actualizarCamion(this.lat, this.lng, this.velocidad);
              this.procesarDistancia();
              this.cdr.detectChanges();
            }).then((id2) => {
              if (this.destruido) {
                Geolocation.clearWatch({ id: id2 });
                return;
              }
              this.watchId = id2;
            });
          } }
        ]
      });
      yield alert.present();
    });
  }
  showToast(msg, color) {
    return __async(this, null, function* () {
      const t = yield this.toastCtrl.create({ message: msg, color, duration: 3e3, position: "top" });
      yield t.present();
    });
  }
  get latStr() {
    return this.lat ? this.lat.toFixed(6) : "\u2014";
  }
  get lngStr() {
    return this.lng ? this.lng.toFixed(6) : "\u2014";
  }
  get distStr() {
    return this.distanciaTotal.toFixed(2);
  }
};
_HomeConductorPage.\u0275fac = function HomeConductorPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomeConductorPage)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FaceRecognitionService), \u0275\u0275directiveInject(RutasService), \u0275\u0275directiveInject(CallesService), \u0275\u0275directiveInject(RecorridosService), \u0275\u0275directiveInject(OfflineSqliteService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_HomeConductorPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeConductorPage, selectors: [["app-home-conductor"]], viewQuery: function HomeConductorPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MapViewComponent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapView = _t.first);
  }
}, decls: 29, vars: 14, consts: [["mapView", ""], [1, "home-header"], ["slot", "start"], [3, "click"], ["name", "arrow-back-outline", "slot", "icon-only"], [1, "header-user"], [1, "header-avatar"], [1, "header-info"], [1, "header-nombre"], [1, "header-rol"], ["slot", "end"], [1, "estado-chip"], [1, "chip-dot"], [1, "home-content", 3, "scrollY"], [1, "mapa-fullscreen"], ["userRole", "conductor", 3, "rutas", "calles"], ["class", "gps-hud", 4, "ngIf"], [1, "panel"], [1, "panel-handle", 3, "click"], [1, "handle-bar"], [1, "handle-icon", 3, "name"], [1, "panel-body"], [4, "ngIf"], ["class", "vehiculo-activo", 4, "ngIf"], [1, "gps-hud"], [1, "gps-item"], ["name", "navigate-outline"], [1, "gps-val"], [1, "gps-lbl"], [1, "gps-sep"], ["name", "footsteps-outline"], ["name", "location-outline"], [1, "gps-coords"], [1, "pasos-header"], [1, "pasos-titulo"], [1, "pasos-contador"], [1, "progress-bar"], [1, "progress-fill"], [1, "paso-card"], [1, "paso-num"], ["name", "checkmark-outline", 4, "ngIf"], [1, "paso-content"], [1, "paso-label"], ["placeholder", "Seleccionar veh\xEDculo", "class", "paso-select", 3, "ngModel", "ngModelChange", "ionChange", 4, "ngIf"], ["class", "paso-resumen", 4, "ngIf"], ["placeholder", "Seleccionar ruta", "class", "paso-select", 3, "ngModel", "ngModelChange", "ionChange", 4, "ngIf"], ["class", "paso-guardar-ruta", 4, "ngIf"], ["size", "small", "color", "medium", "fill", "outline", "class", "paso-btn", 3, "click", 4, "ngIf"], ["class", "paso-resumen ok", 4, "ngIf"], [1, "paso-card", "paso-iniciar"], ["expand", "block", "color", "success", 1, "btn-iniciar", 3, "click", "disabled"], ["name", "play-circle-outline", "slot", "start"], ["name", "checkmark-outline"], ["placeholder", "Seleccionar veh\xEDculo", 1, "paso-select", 3, "ngModelChange", "ionChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "paso-resumen"], ["placeholder", "Seleccionar ruta", 1, "paso-select", 3, "ngModelChange", "ionChange", "ngModel"], [1, "paso-guardar-ruta"], ["size", "small", "fill", "outline", 3, "click", "color", "disabled"], ["slot", "start", 3, "name"], ["size", "small", "color", "medium", "fill", "outline", 1, "paso-btn", 3, "click"], ["name", "camera-outline", "slot", "start"], [1, "paso-resumen", "ok"], ["name", "shield-checkmark-outline"], [1, "vehiculo-activo"], [1, "va-header"], [1, "va-icon"], ["name", "car-outline"], [1, "va-info"], [1, "va-placa"], [1, "va-modelo"], [1, "va-badge"], [1, "pulse-dot"], [1, "va-stats"], [1, "va-stat"], ["name", "speedometer-outline"], ["name", "map-outline"], ["expand", "block", "color", "danger", "fill", "outline", 1, "btn-detener", 3, "click"], ["name", "stop-circle-outline", "slot", "start"]], template: function HomeConductorPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-buttons", 2)(3, "ion-button", 3);
    \u0275\u0275listener("click", function HomeConductorPage_Template_ion_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.volver());
    });
    \u0275\u0275element(4, "ion-icon", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7)(9, "span", 8);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 9);
    \u0275\u0275text(12, "Conductor");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "ion-buttons", 10)(14, "div", 11);
    \u0275\u0275element(15, "span", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "ion-content", 13)(18, "div", 14);
    \u0275\u0275element(19, "app-map-view", 15, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, HomeConductorPage_div_21_Template, 24, 4, "div", 16);
    \u0275\u0275elementStart(22, "div", 17)(23, "div", 18);
    \u0275\u0275listener("click", function HomeConductorPage_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.togglePanel());
    });
    \u0275\u0275element(24, "div", 19)(25, "ion-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 21);
    \u0275\u0275template(27, HomeConductorPage_ng_container_27_Template, 40, 37, "ng-container", 22)(28, HomeConductorPage_div_28_Template, 28, 6, "div", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.inicialUsuario);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.nombreUsuario);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("chip-activo", ctx.tracking);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.tracking ? "En ruta" : "Listo", " ");
    \u0275\u0275advance();
    \u0275\u0275property("scrollY", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("rutas", ctx.rutas)("calles", ctx.calles);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.tracking);
    \u0275\u0275advance();
    \u0275\u0275classProp("panel-cerrado", !ctx.panelAbierto);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", ctx.panelAbierto ? "chevron-down-outline" : "chevron-up-outline");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.tracking);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.tracking);
  }
}, dependencies: [IonicModule, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonSelect, IonSelectOption, IonToolbar, SelectValueAccessorDirective, CommonModule, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, MapViewComponent], styles: ['@charset "UTF-8";\n\n\n\n.home-content[_ngcontent-%COMP%] {\n  --background: #f2f4f8;\n  --overflow: hidden;\n}\n.home-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #e91e63;\n  --color: white;\n  --min-height: 58px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  --color: white;\n}\n.header-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 4px;\n}\n.header-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: 1.5px solid rgba(255, 255, 255, 0.5);\n  color: white;\n  font-size: 15px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.header-nombre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: white;\n}\n.header-rol[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: capitalize;\n}\n.estado-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 4px 10px;\n  border-radius: 20px;\n  margin-right: 8px;\n}\n.estado-chip.chip-activo[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.3);\n}\n.estado-chip.chip-activo[_ngcontent-%COMP%]   .chip-dot[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.chip-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.6);\n  animation: _ngcontent-%COMP%_pulso 1.5s infinite;\n}\n.home-layout[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.splash-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  gap: 12px;\n}\n.splash-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 14px;\n}\n.mapa-fullscreen[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n}\n.mapa-fullscreen[_ngcontent-%COMP%]   app-map-view[_ngcontent-%COMP%], \n.mapa-fullscreen[_ngcontent-%COMP%]     .map-wrapper {\n  height: 100% !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n}\n.mapa-fullscreen[_ngcontent-%COMP%]     .map-container {\n  height: 100% !important;\n}\n.gps-hud[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 105px;\n  left: 14px;\n  z-index: 500;\n  background: rgba(255, 255, 255, 0.92);\n  border-radius: 22px;\n  padding: 10px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  white-space: nowrap;\n  max-width: calc(100% - 80px);\n  border: 1px solid rgba(255, 255, 255, 0.55);\n  transition: bottom 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s ease;\n}\n.panel[_ngcontent-%COMP%]:not(.panel-cerrado)    ~ .gps-hud[_ngcontent-%COMP%] {\n  bottom: 185px;\n}\n.gps-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 28px;\n  background: rgba(0, 0, 0, 0.08);\n}\n.gps-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.gps-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #e91e63;\n  flex-shrink: 0;\n}\n.gps-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.gps-val[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.gps-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.gps-coords[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #555;\n  font-family: "DM Mono", monospace;\n}\n.panel[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  background: white;\n  border-radius: 24px 24px 0 0;\n  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.15);\n  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  max-height: 72vh;\n  overflow: hidden;\n}\n.panel.panel-cerrado[_ngcontent-%COMP%] {\n  transform: translateY(calc(100% - 20px));\n}\n.panel-handle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 0 4px;\n  cursor: pointer;\n  gap: 2px;\n}\n.handle-bar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 4px;\n  background: #e0e0e0;\n  border-radius: 2px;\n}\n.handle-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #bbb;\n}\n.panel-body[_ngcontent-%COMP%] {\n  padding: 4px 16px 24px;\n  overflow-y: auto;\n  max-height: calc(72vh - 52px);\n}\n.pasos-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.pasos-titulo[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.pasos-contador[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #999;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #f0f0f0;\n  border-radius: 2px;\n  margin-bottom: 14px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #e91e63,\n      #1D9E75);\n  border-radius: 2px;\n  transition: width 0.4s ease;\n}\n.paso-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 14px;\n  margin-bottom: 8px;\n  background: #f8f9fa;\n  border: 1.5px solid transparent;\n  transition: all 0.2s;\n}\n.paso-card.paso-active[_ngcontent-%COMP%] {\n  background: white;\n  border-color: #e91e63;\n  box-shadow: 0 3px 12px rgba(233, 30, 99, 0.12);\n}\n.paso-card.paso-done[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n}\n.paso-card.paso-iniciar[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 4px 0 0;\n}\n.paso-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #e0e0e0;\n  color: #666;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.paso-num.done[_ngcontent-%COMP%] {\n  background: #1D9E75;\n  color: white;\n}\n.paso-num.done[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.paso-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.paso-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #333;\n}\n.paso-select[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.paso-resumen[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n.paso-resumen.ok[_ngcontent-%COMP%] {\n  color: #1D9E75;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.paso-resumen.ok[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.paso-btn[_ngcontent-%COMP%] {\n  --border-radius: 10px;\n  height: 34px;\n  font-size: 12px;\n}\n.btn-iniciar[_ngcontent-%COMP%] {\n  --border-radius: 14px;\n  height: 50px;\n  font-size: 15px;\n  font-weight: 600;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.vehiculo-activo[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 14px;\n  border: 1.5px solid #f0f0f0;\n}\n.va-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.va-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.va-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: white;\n}\n.va-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.va-placa[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.va-modelo[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n.va-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #1D9E75;\n  background: #e1f5ee;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.va-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.va-stat[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 10px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  text-align: center;\n}\n.va-stat[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #e91e63;\n}\n.va-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #555;\n  font-weight: 500;\n}\n.btn-detener[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  height: 44px;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.camion-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: #f8f9fa;\n  border-radius: 16px;\n  margin-bottom: 10px;\n  border: 1.5px solid #f0f0f0;\n  transition: all 0.3s;\n}\n.camion-card.activo[_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  border-color: #9fe1cb;\n}\n.camion-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  flex-shrink: 0;\n}\n.camion-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #1D9E75;\n}\n.camion-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.camion-titulo[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #333;\n}\n.camion-estado[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #1D9E75;\n  font-weight: 500;\n}\n.camion-estado.sin[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n.camion-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #0F6E56;\n  background: white;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.proxima-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n  border-radius: 16px;\n}\n.proxima-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: rgba(255, 255, 255, 0.9);\n  flex-shrink: 0;\n}\n.proxima-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.proxima-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.proxima-fecha[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: white;\n}\n.proxima-hora[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  font-family: "DM Mono", monospace;\n}\n.pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #1D9E75;\n  animation: _ngcontent-%COMP%_pulso 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulso {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.8);\n  }\n}\n/*# sourceMappingURL=home-conductor.page.css.map */'] });
var HomeConductorPage = _HomeConductorPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeConductorPage, [{
    type: Component,
    args: [{ selector: "app-home-conductor", standalone: true, imports: [IonicModule, CommonModule, FormsModule, MapViewComponent], template: `<ion-header class="home-header">\r
  <ion-toolbar>\r
    <ion-buttons slot="start">\r
      <ion-button (click)="volver()">\r
        <ion-icon name="arrow-back-outline" slot="icon-only"></ion-icon>\r
      </ion-button>\r
    </ion-buttons>\r
\r
    <div class="header-user">\r
      <div class="header-avatar">{{ inicialUsuario }}</div>\r
      <div class="header-info">\r
        <span class="header-nombre">{{ nombreUsuario }}</span>\r
        <span class="header-rol">Conductor</span>\r
      </div>\r
    </div>\r
\r
    <ion-buttons slot="end">\r
      <div class="estado-chip" [class.chip-activo]="tracking">\r
        <span class="chip-dot"></span>\r
        {{ tracking ? 'En ruta' : 'Listo' }}\r
      </div>\r
    </ion-buttons>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="home-content" [scrollY]="false">\r
\r
  <!-- Mapa completo de fondo -->\r
  <div class="mapa-fullscreen">\r
    <app-map-view\r
      #mapView\r
      [rutas]="rutas"\r
      [calles]="calles"\r
      userRole="conductor">\r
    </app-map-view>\r
  </div>\r
\r
  <!-- HUD GPS en vivo -->\r
  <div class="gps-hud" *ngIf="tracking">\r
    <div class="gps-item">\r
      <ion-icon name="navigate-outline"></ion-icon>\r
      <div>\r
        <span class="gps-val">{{ velocidad }}</span>\r
        <span class="gps-lbl">km/h</span>\r
      </div>\r
    </div>\r
    <div class="gps-sep"></div>\r
    <div class="gps-item">\r
      <ion-icon name="footsteps-outline"></ion-icon>\r
      <div>\r
        <span class="gps-val">{{ distStr }}</span>\r
        <span class="gps-lbl">km</span>\r
      </div>\r
    </div>\r
    <div class="gps-sep"></div>\r
    <div class="gps-item">\r
      <ion-icon name="location-outline"></ion-icon>\r
      <div>\r
        <span class="gps-coords">{{ latStr }}</span>\r
        <span class="gps-coords">{{ lngStr }}</span>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Panel inferior deslizable -->\r
  <div class="panel" [class.panel-cerrado]="!panelAbierto">\r
\r
    <div class="panel-handle" (click)="togglePanel()">\r
      <div class="handle-bar"></div>\r
      <ion-icon [name]="panelAbierto ? 'chevron-down-outline' : 'chevron-up-outline'" class="handle-icon"></ion-icon>\r
    </div>\r
\r
    <div class="panel-body">\r
\r
      <!-- \u2550\u2550 PASOS (antes de iniciar) \u2550\u2550 -->\r
      <ng-container *ngIf="!tracking">\r
\r
        <div class="pasos-header">\r
          <span class="pasos-titulo">Preparar recorrido</span>\r
          <span class="pasos-contador">{{ pasoActual }}/4</span>\r
        </div>\r
\r
        <div class="progress-bar">\r
          <div class="progress-fill" [style.width.%]="(pasoActual - 1) * 33.3"></div>\r
        </div>\r
\r
        <!-- Paso 1: Veh\xEDculo -->\r
        <div class="paso-card" [class.paso-done]="pasoCompletado(1)" [class.paso-active]="pasoActual === 1">\r
          <div class="paso-num" [class.done]="pasoCompletado(1)">\r
            <ion-icon *ngIf="pasoCompletado(1)" name="checkmark-outline"></ion-icon>\r
            <span *ngIf="!pasoCompletado(1)">1</span>\r
          </div>\r
          <div class="paso-content">\r
            <span class="paso-label">Veh\xEDculo</span>\r
            <ion-select *ngIf="pasoActual === 1" placeholder="Seleccionar veh\xEDculo"\r
              [(ngModel)]="vehiculoSeleccionado" (ionChange)="onVehiculoChange()" class="paso-select">\r
              <ion-select-option *ngFor="let v of vehiculos" [value]="v">\r
                {{ v.placa }} \xB7 {{ v.marca }} {{ v.modelo }}\r
              </ion-select-option>\r
            </ion-select>\r
            <span class="paso-resumen" *ngIf="vehiculoSeleccionado">\r
              {{ vehiculoSeleccionado.placa }} \xB7 {{ vehiculoSeleccionado.marca }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Paso 2: Ruta -->\r
        <div class="paso-card" [class.paso-done]="pasoCompletado(2)" [class.paso-active]="pasoActual === 2">\r
          <div class="paso-num" [class.done]="pasoCompletado(2)">\r
            <ion-icon *ngIf="pasoCompletado(2)" name="checkmark-outline"></ion-icon>\r
            <span *ngIf="!pasoCompletado(2)">2</span>\r
          </div>\r
          <div class="paso-content">\r
            <span class="paso-label">Ruta asignada</span>\r
            <ion-select *ngIf="pasoActual === 2" placeholder="Seleccionar ruta"\r
              [(ngModel)]="rutaSeleccionada" (ionChange)="onRutaChange()" class="paso-select">\r
              <ion-select-option *ngFor="let r of rutas" [value]="r">\r
                {{ r.nombre_ruta }}\r
              </ion-select-option>\r
            </ion-select>\r
            <!-- Bot\xF3n guardar ruta en mapa + historial -->\r
            <div class="paso-guardar-ruta" *ngIf="rutaSeleccionada">\r
              <ion-button size="small"\r
                [color]="rutaGuardada ? 'success' : 'primary'"\r
                fill="outline"\r
                (click)="guardarRutaSeleccionada()"\r
                [disabled]="guardandoRuta">\r
                <ion-icon [name]="rutaGuardada ? 'checkmark-circle-outline' : 'save-outline'" slot="start"></ion-icon>\r
                {{ rutaGuardada ? 'Ruta guardada \u2713' : 'Guardar ruta' }}\r
              </ion-button>\r
            </div>\r
            <span class="paso-resumen" *ngIf="rutaSeleccionada">\r
              {{ rutaSeleccionada.nombre_ruta }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Paso 3: Identidad -->\r
        <div class="paso-card" [class.paso-done]="pasoCompletado(3)" [class.paso-active]="pasoActual === 3">\r
          <div class="paso-num" [class.done]="pasoCompletado(3)">\r
            <ion-icon *ngIf="pasoCompletado(3)" name="checkmark-outline"></ion-icon>\r
            <span *ngIf="!pasoCompletado(3)">3</span>\r
          </div>\r
          <div class="paso-content">\r
            <span class="paso-label">Verificar identidad</span>\r
            <ion-button *ngIf="pasoActual === 3" size="small" color="medium"\r
              fill="outline" (click)="validarIdentidad()" class="paso-btn">\r
              <ion-icon name="camera-outline" slot="start"></ion-icon>\r
              Abrir c\xE1mara\r
            </ion-button>\r
            <span class="paso-resumen ok" *ngIf="identidadValidada">\r
              <ion-icon name="shield-checkmark-outline"></ion-icon> Verificado\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Paso 4: Iniciar -->\r
        <div class="paso-card paso-iniciar" [class.paso-active]="pasoActual === 4">\r
          <ion-button expand="block" color="success" class="btn-iniciar"\r
            [disabled]="!pasoCompletado(1) || !pasoCompletado(2) || !pasoCompletado(3)"\r
            (click)="iniciarRecorrido()">\r
            <ion-icon name="play-circle-outline" slot="start"></ion-icon>\r
            Iniciar recorrido\r
          </ion-button>\r
        </div>\r
\r
      </ng-container>\r
\r
      <!-- \u2550\u2550 TARJETA VEH\xCDCULO ACTIVO (durante tracking) \u2550\u2550 -->\r
      <div class="vehiculo-activo" *ngIf="tracking">\r
\r
        <div class="va-header">\r
          <div class="va-icon"><ion-icon name="car-outline"></ion-icon></div>\r
          <div class="va-info">\r
            <span class="va-placa">{{ vehiculoSeleccionado?.placa }}</span>\r
            <span class="va-modelo">{{ vehiculoSeleccionado?.marca }} {{ vehiculoSeleccionado?.modelo }}</span>\r
          </div>\r
          <div class="va-badge">\r
            <span class="pulse-dot"></span>\r
            En ruta\r
          </div>\r
        </div>\r
\r
        <div class="va-stats">\r
          <div class="va-stat">\r
            <ion-icon name="speedometer-outline"></ion-icon>\r
            <span>{{ velocidad }} km/h</span>\r
          </div>\r
          <div class="va-stat">\r
            <ion-icon name="footsteps-outline"></ion-icon>\r
            <span>{{ distStr }} km</span>\r
          </div>\r
          <div class="va-stat">\r
            <ion-icon name="map-outline"></ion-icon>\r
            <span>{{ rutaSeleccionada?.nombre_ruta || '\u2014' }}</span>\r
          </div>\r
        </div>\r
\r
        <ion-button expand="block" color="danger" fill="outline"\r
          class="btn-detener" (click)="detenerRecorrido()">\r
          <ion-icon name="stop-circle-outline" slot="start"></ion-icon>\r
          Finalizar y guardar recorrido\r
        </ion-button>\r
\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
</ion-content>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/home-conductor/home-conductor.page.scss */\n.home-content {\n  --background: #f2f4f8;\n  --overflow: hidden;\n}\n.home-header ion-toolbar {\n  --background: #e91e63;\n  --color: white;\n  --min-height: 58px;\n}\n.btn-back {\n  --color: white;\n}\n.header-user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 4px;\n}\n.header-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: 1.5px solid rgba(255, 255, 255, 0.5);\n  color: white;\n  font-size: 15px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-info {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.header-nombre {\n  font-size: 14px;\n  font-weight: 600;\n  color: white;\n}\n.header-rol {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: capitalize;\n}\n.estado-chip {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 4px 10px;\n  border-radius: 20px;\n  margin-right: 8px;\n}\n.estado-chip.chip-activo {\n  background: rgba(34, 197, 94, 0.3);\n}\n.estado-chip.chip-activo .chip-dot {\n  background: #22c55e;\n}\n.chip-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.6);\n  animation: pulso 1.5s infinite;\n}\n.home-layout {\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.splash-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  gap: 12px;\n}\n.splash-loading p {\n  color: #999;\n  font-size: 14px;\n}\n.mapa-fullscreen {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n}\n.mapa-fullscreen app-map-view,\n.mapa-fullscreen ::ng-deep .map-wrapper {\n  height: 100% !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n}\n.mapa-fullscreen ::ng-deep .map-container {\n  height: 100% !important;\n}\n.gps-hud {\n  position: absolute;\n  bottom: 105px;\n  left: 14px;\n  z-index: 500;\n  background: rgba(255, 255, 255, 0.92);\n  border-radius: 22px;\n  padding: 10px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  white-space: nowrap;\n  max-width: calc(100% - 80px);\n  border: 1px solid rgba(255, 255, 255, 0.55);\n  transition: bottom 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s ease;\n}\n.panel:not(.panel-cerrado) ~ .gps-hud {\n  bottom: 185px;\n}\n.gps-sep {\n  width: 1px;\n  height: 28px;\n  background: rgba(0, 0, 0, 0.08);\n}\n.gps-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.gps-item ion-icon {\n  font-size: 16px;\n  color: #e91e63;\n  flex-shrink: 0;\n}\n.gps-item div {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.gps-val {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.gps-lbl {\n  font-size: 10px;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.gps-coords {\n  font-size: 10px;\n  color: #555;\n  font-family: "DM Mono", monospace;\n}\n.panel {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  background: white;\n  border-radius: 24px 24px 0 0;\n  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.15);\n  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  max-height: 72vh;\n  overflow: hidden;\n}\n.panel.panel-cerrado {\n  transform: translateY(calc(100% - 20px));\n}\n.panel-handle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 0 4px;\n  cursor: pointer;\n  gap: 2px;\n}\n.handle-bar {\n  width: 36px;\n  height: 4px;\n  background: #e0e0e0;\n  border-radius: 2px;\n}\n.handle-icon {\n  font-size: 16px;\n  color: #bbb;\n}\n.panel-body {\n  padding: 4px 16px 24px;\n  overflow-y: auto;\n  max-height: calc(72vh - 52px);\n}\n.pasos-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.pasos-titulo {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.pasos-contador {\n  font-size: 13px;\n  color: #999;\n}\n.progress-bar {\n  height: 4px;\n  background: #f0f0f0;\n  border-radius: 2px;\n  margin-bottom: 14px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #e91e63,\n      #1D9E75);\n  border-radius: 2px;\n  transition: width 0.4s ease;\n}\n.paso-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 14px;\n  margin-bottom: 8px;\n  background: #f8f9fa;\n  border: 1.5px solid transparent;\n  transition: all 0.2s;\n}\n.paso-card.paso-active {\n  background: white;\n  border-color: #e91e63;\n  box-shadow: 0 3px 12px rgba(233, 30, 99, 0.12);\n}\n.paso-card.paso-done {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n}\n.paso-card.paso-iniciar {\n  background: transparent;\n  border: none;\n  padding: 4px 0 0;\n}\n.paso-num {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #e0e0e0;\n  color: #666;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.paso-num.done {\n  background: #1D9E75;\n  color: white;\n}\n.paso-num.done ion-icon {\n  font-size: 16px;\n}\n.paso-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.paso-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #333;\n}\n.paso-select {\n  font-size: 13px;\n}\n.paso-resumen {\n  font-size: 12px;\n  color: #666;\n}\n.paso-resumen.ok {\n  color: #1D9E75;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.paso-resumen.ok ion-icon {\n  font-size: 14px;\n}\n.paso-btn {\n  --border-radius: 10px;\n  height: 34px;\n  font-size: 12px;\n}\n.btn-iniciar {\n  --border-radius: 14px;\n  height: 50px;\n  font-size: 15px;\n  font-weight: 600;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.vehiculo-activo {\n  background: white;\n  border-radius: 16px;\n  padding: 14px;\n  border: 1.5px solid #f0f0f0;\n}\n.va-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.va-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.va-icon ion-icon {\n  font-size: 22px;\n  color: white;\n}\n.va-info {\n  flex: 1;\n}\n.va-placa {\n  display: block;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.va-modelo {\n  font-size: 12px;\n  color: #888;\n}\n.va-badge {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #1D9E75;\n  background: #e1f5ee;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.va-stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.va-stat {\n  background: #f8f9fa;\n  border-radius: 10px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  text-align: center;\n}\n.va-stat ion-icon {\n  font-size: 16px;\n  color: #e91e63;\n}\n.va-stat span {\n  font-size: 11px;\n  color: #555;\n  font-weight: 500;\n}\n.btn-detener {\n  --border-radius: 12px;\n  height: 44px;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.camion-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: #f8f9fa;\n  border-radius: 16px;\n  margin-bottom: 10px;\n  border: 1.5px solid #f0f0f0;\n  transition: all 0.3s;\n}\n.camion-card.activo {\n  background: #e1f5ee;\n  border-color: #9fe1cb;\n}\n.camion-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  flex-shrink: 0;\n}\n.camion-icon ion-icon {\n  font-size: 22px;\n  color: #1D9E75;\n}\n.camion-info {\n  flex: 1;\n}\n.camion-titulo {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #333;\n}\n.camion-estado {\n  font-size: 12px;\n  color: #1D9E75;\n  font-weight: 500;\n}\n.camion-estado.sin {\n  color: #aaa;\n}\n.camion-badge {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #0F6E56;\n  background: white;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.proxima-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #e91e63,\n      #c2185b);\n  border-radius: 16px;\n}\n.proxima-icon {\n  font-size: 28px;\n  color: rgba(255, 255, 255, 0.9);\n  flex-shrink: 0;\n}\n.proxima-info {\n  flex: 1;\n}\n.proxima-label {\n  display: block;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.proxima-fecha {\n  font-size: 15px;\n  font-weight: 700;\n  color: white;\n}\n.proxima-hora {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  font-family: "DM Mono", monospace;\n}\n.pulse-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #1D9E75;\n  animation: pulso 1.5s infinite;\n}\n@keyframes pulso {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.8);\n  }\n}\n/*# sourceMappingURL=home-conductor.page.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: AuthService }, { type: FaceRecognitionService }, { type: RutasService }, { type: CallesService }, { type: RecorridosService }, { type: OfflineSqliteService }, { type: Router }, { type: ToastController }, { type: AlertController }, { type: ChangeDetectorRef }], { mapView: [{
    type: ViewChild,
    args: [MapViewComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeConductorPage, { className: "HomeConductorPage", filePath: "src/app/pages/home-conductor/home-conductor.page.ts", lineNumber: 38 });
})();
export {
  HomeConductorPage
};
//# sourceMappingURL=home-conductor.page-3K4JRB7H.js.map
