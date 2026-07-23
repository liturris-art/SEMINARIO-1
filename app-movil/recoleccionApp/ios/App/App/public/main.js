import {
  OfflineSqliteService
} from "./chunk-WPKZ7BPK.js";
import "./chunk-ONELXWRX.js";
import {
  registerPlugin
} from "./chunk-APRNP3ZL.js";
import {
  AlertController,
  IonApp,
  IonRouterOutlet,
  provideIonicAngular
} from "./chunk-UHMRKJLH.js";
import {
  AuthService
} from "./chunk-RFRASXTM.js";
import {
  Component,
  IonicRouteStrategy,
  NavigationEnd,
  PreloadAllModules,
  RouteReuseStrategy,
  Router,
  SupabaseService,
  bootstrapApplication,
  filter,
  inject,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  withPreloading,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
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

// node_modules/ionicons/dist/esm-es5/utils-2c56d1c8.js
var CACHED_MAP;
var getIconMap = function() {
  if (typeof window === "undefined") {
    return /* @__PURE__ */ new Map();
  } else {
    if (!CACHED_MAP) {
      var t = window;
      t.Ionicons = t.Ionicons || {};
      CACHED_MAP = t.Ionicons.map = t.Ionicons.map || /* @__PURE__ */ new Map();
    }
    return CACHED_MAP;
  }
};
var addIcons = function(t) {
  Object.keys(t).forEach((function(e) {
    addToIconMap(e, t[e]);
    var r = e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, "$1-$2").toLowerCase();
    if (e !== r) {
      addToIconMap(r, t[e]);
    }
  }));
};
var addToIconMap = function(t, e) {
  var r = getIconMap();
  var n = r.get(t);
  if (n === void 0) {
    r.set(t, e);
  } else if (n !== e) {
    console.warn('[Ionicons Warning]: Multiple icons were mapped to name "'.concat(t, '". Ensure that multiple icons are not mapped to the same icon name.'));
  }
};

// node_modules/ionicons/icons/index.mjs
var alertCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z'/></svg>";
var analyticsOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M344 280l88-88M232 216l64 64M80 320l104-104' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='456' cy='168' r='24' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='320' cy='304' r='24' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='208' cy='192' r='24' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='56' cy='344' r='24' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var arrowBackOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
var arrowForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M268 112l144 144-144 144M392 256H100' class='ionicon-fill-none'/></svg>";
var arrowRedoOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var barChartOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M32 32v432a16 16 0 0016 16h432' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect x='96' y='224' width='80' height='192' rx='20' ry='20' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect x='240' y='176' width='80' height='240' rx='20' ry='20' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect x='383.64' y='112' width='80' height='304' rx='20' ry='20' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var calendarOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><rect stroke-linejoin='round' x='48' y='80' width='416' height='384' rx='48' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='296' cy='232' r='24'/><circle cx='376' cy='232' r='24'/><circle cx='296' cy='312' r='24'/><circle cx='376' cy='312' r='24'/><circle cx='136' cy='312' r='24'/><circle cx='216' cy='312' r='24'/><circle cx='136' cy='392' r='24'/><circle cx='216' cy='392' r='24'/><circle cx='296' cy='392' r='24'/><path stroke-linejoin='round' stroke-linecap='round' d='M128 48v32M384 48v32' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linejoin='round' d='M464 160H48' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var callOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var cameraOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='256' cy='272' r='80' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M124 158v-22h-24v22' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var carOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M80 224l37.78-88.15C123.93 121.5 139.6 112 157.11 112h197.78c17.51 0 33.18 9.5 39.33 23.85L432 224M80 224h352v144H80zM112 368v32H80v-32M432 368v32h-32v-32' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='144' cy='288' r='16' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='368' cy='288' r='16' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var cardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='48' y='96' width='416' height='320' rx='56' ry='56' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linejoin='round' stroke-width='60' d='M48 192h416M128 300h48v20h-48z' class='ionicon-fill-none'/></svg>";
var checkmarkCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M352 176L217.6 336 160 272' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var checkmarkDoneOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var chevronDownOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
var chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
var chevronUpOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 328l144-144 144 144' class='ionicon-fill-none'/></svg>";
var closeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M368 368L144 144M368 144L144 368' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var cloudOfflineOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M93.72 183.25C49.49 198.05 16 233.1 16 288c0 66 54 112 120 112h184.37M467.82 377.74C485.24 363.3 496 341.61 496 312c0-59.82-53-85.76-96-88-8.89-89.54-71-144-144-144-26.16 0-48.79 6.93-67.6 18.14' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M448 448L64 64' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var contractOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M304 416V304h112M314.2 314.23L432 432M208 96v112H96M197.8 197.77L80 80M416 208H304V96M314.23 197.8L432 80M96 304h112v112M197.77 314.2L80 432' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var createOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z'/></svg>";
var earthOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M445.57 172.14c-16.06.1-14.48 29.73-34.49 15.75-7.43-5.18-12-12.71-21.33-15-8.15-2-16.5.08-24.55 1.47-9.15 1.58-20 2.29-26.94 9.22-6.71 6.67-10.26 15.62-17.4 22.33-13.81 13-19.64 27.19-10.7 45.57 8.6 17.67 26.59 27.26 46 26 19.07-1.27 38.88-12.33 38.33 15.38-.2 9.8 1.85 16.6 4.86 25.71 2.79 8.4 2.6 16.54 3.24 25.21 1.18 16.2 4.16 34.36 12.2 48.67l15-21.16c1.85-2.62 5.72-6.29 6.64-9.38 1.63-5.47-1.58-14.87-1.95-21s-.19-12.34-1.13-18.47c-1.32-8.59-6.4-16.64-7.1-25.13-1.29-15.81 1.6-28.43-10.58-41.65-11.76-12.75-29-15.81-45.47-13.22-8.3 1.3-41.71 6.64-28.3-12.33 2.65-3.73 7.28-6.79 10.26-10.34 2.59-3.09 4.84-8.77 7.88-11.18s17-5.18 21-3.95 8.17 7 11.64 9.56a49.89 49.89 0 0021.81 9.36c13.66 2 42.22-5.94 42-23.46-.04-8.4-7.84-20.1-10.92-27.96zM287.45 316.3c-5.33-22.44-35.82-29.94-52.26-42.11-9.45-7-17.86-17.81-30.27-18.69-5.72-.41-10.51.83-16.18-.64-5.2-1.34-9.28-4.14-14.82-3.41-10.35 1.36-16.88 12.42-28 10.92-10.55-1.42-21.42-13.76-23.82-23.81-3.08-12.92 7.14-17.11 18.09-18.26 4.57-.48 9.7-1 14.09.67 5.78 2.15 8.51 7.81 13.7 10.67 9.73 5.33 11.7-3.19 10.21-11.83-2.23-12.94-4.83-18.22 6.71-27.12 8-6.14 14.84-10.58 13.56-21.61-.76-6.48-4.31-9.41-1-15.86 2.51-4.91 9.4-9.34 13.89-12.27 11.59-7.56 49.65-7 34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44 9.27-21.41 14.19-7.2 5.09-21.22 10.87-28.43 3-9.7-10.59 6.43-14.07 10-21.46s-8.27-21.36-14.61-24.9l-29.81 33.43a41.52 41.52 0 008.34 31.86c5.93 7.63 15.37 10.08 15.8 20.5.42 10-1.14 15.12-7.68 22.15-2.83 3-4.83 7.26-7.71 10.07-3.53 3.43-2.22 2.38-7.73 3.32-10.36 1.75-19.18 4.45-29.19 7.21C95.34 199.94 93.8 172.69 86.2 162l-25 20.19c-.27 3.31 4.1 9.4 5.29 13 6.83 20.57 20.61 36.48 29.51 56.16 9.37 20.84 34.53 15.06 45.64 33.32 9.86 16.2-.67 36.71 6.71 53.67 5.36 12.31 18 15 26.72 24 8.91 9.09 8.72 21.53 10.08 33.36a305.22 305.22 0 007.45 41.28c1.21 4.69 2.32 10.89 5.53 14.76 2.2 2.66 9.75 4.95 6.7 5.83 4.26.7 11.85 4.68 15.4 1.76 4.68-3.84 3.43-15.66 4.24-21 2.43-15.9 10.39-31.45 21.13-43.35 10.61-11.74 25.15-19.69 34.11-33 8.73-12.98 11.36-30.49 7.74-45.68zm-33.39 26.32c-6 10.71-19.36 17.88-27.95 26.39-2.33 2.31-7.29 10.31-10.21 8.58-2.09-1.24-2.8-11.62-3.57-14a61.17 61.17 0 00-21.71-29.95c-3.13-2.37-10.89-5.45-12.68-8.7-2-3.53-.2-11.86-.13-15.7.11-5.6-2.44-14.91-1.06-20 1.6-5.87-1.48-2.33 3.77-3.49 2.77-.62 14.21 1.39 17.66 2.11 5.48 1.14 8.5 4.55 12.82 8 11.36 9.11 23.87 16.16 36.6 23.14 9.86 5.46 12.76 12.37 6.46 23.62zM184.46 67.09c4.74 4.63 9.2 10.11 16.27 10.57 6.69.45 13-3.17 18.84 1.38 6.48 5 11.15 11.33 19.75 12.89 8.32 1.51 17.13-3.35 19.19-11.86 2-8.11-2.31-16.93-2.57-25.07 0-1.13.61-6.15-.17-7-.58-.64-5.42.08-6.16.1q-8.13.24-16.22 1.12a207.1 207.1 0 00-57.18 14.65c2.43 1.68 5.48 2.35 8.25 3.22zM356.4 123.27c8.49 0 17.11-3.8 14.37-13.62-2.3-8.23-6.22-17.16-15.76-12.72-6.07 2.82-14.67 10-15.38 17.12-.81 8.08 11.11 9.22 16.77 9.22zM349.62 166.24c8.67 5.19 21.53 2.75 28.07-4.66 5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0110.82 4.41c3.8 3.93 3.05 7.62 3.86 12.54 1.81 11.05 13.66.63 16.75-3.65 2-2.79 4.71-6.93 3.8-10.56-.84-3.39-4.8-7-6.56-10.11-5.14-9-9.37-19.47-17.07-26.74-7.41-7-16.52-6.19-23.55 1.08-5.76 6-12.45 10.75-16.39 18.05-2.78 5.13-5.91 7.58-11.54 8.91-3.1.73-6.64 1-9.24 3.08-7.24 5.7-3.12 19.39 3.74 23.51z'/></svg>";
var expandOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var eyeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='256' cy='256' r='80' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var fingerPrintOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M390.42 75.28a10.45 10.45 0 01-5.32-1.44C340.72 50.08 302.35 40 256.35 40c-45.77 0-89.23 11.28-128.76 33.84C122 77 115.11 74.8 111.87 69a12.4 12.4 0 014.63-16.32A281.81 281.81 0 01256.35 16c49.23 0 92.23 11.28 139.39 36.48a12 12 0 014.85 16.08 11.3 11.3 0 01-10.17 6.72zm-330.79 126a11.73 11.73 0 01-6.7-2.16 12.26 12.26 0 01-2.78-16.8c22.89-33.6 52-60 86.69-78.48 72.58-38.84 165.51-39.12 238.32-.24 34.68 18.48 63.8 44.64 86.69 78a12.29 12.29 0 01-2.78 16.8 11.26 11.26 0 01-16.18-2.88c-20.8-30.24-47.15-54-78.36-70.56-66.34-35.28-151.18-35.28-217.29.24-31.44 16.8-57.79 40.8-78.59 71a10 10 0 01-9.02 5.08zM204.1 491a10.66 10.66 0 01-8.09-3.6C175.9 466.48 165 453 149.55 424c-16-29.52-24.27-65.52-24.27-104.16 0-71.28 58.71-129.36 130.84-129.36S387 248.56 387 319.84a11.56 11.56 0 11-23.11 0c0-58.08-48.32-105.36-107.72-105.36S148.4 261.76 148.4 319.84c0 34.56 7.39 66.48 21.49 92.4 14.8 27.6 25 39.36 42.77 58.08a12.67 12.67 0 010 17 12.44 12.44 0 01-8.56 3.68zm165.75-44.4c-27.51 0-51.78-7.2-71.66-21.36a129.1 129.1 0 01-55-105.36 11.57 11.57 0 1123.12 0 104.28 104.28 0 0044.84 85.44c16.41 11.52 35.6 17 58.72 17a147.41 147.41 0 0024-2.4c6.24-1.2 12.25 3.12 13.4 9.84a11.92 11.92 0 01-9.47 13.92 152.28 152.28 0 01-27.95 2.88zM323.38 496a13 13 0 01-3-.48c-36.76-10.56-60.8-24.72-86-50.4-32.37-33.36-50.16-77.76-50.16-125.28 0-38.88 31.9-70.56 71.19-70.56s71.2 31.68 71.2 70.56c0 25.68 21.5 46.56 48.08 46.56s48.08-20.88 48.08-46.56c0-90.48-75.13-163.92-167.59-163.92-65.65 0-125.75 37.92-152.79 96.72-9 19.44-13.64 42.24-13.64 67.2 0 18.72 1.61 48.24 15.48 86.64 2.32 6.24-.69 13.2-6.7 15.36a11.34 11.34 0 01-14.79-7 276.39 276.39 0 01-16.88-95c0-28.8 5.32-55 15.72-77.76 30.75-67 98.94-110.4 173.6-110.4 105.18 0 190.71 84.24 190.71 187.92 0 38.88-31.9 70.56-71.2 70.56s-71.2-31.68-71.2-70.56c.01-25.68-21.49-46.6-48.07-46.6s-48.08 20.88-48.08 46.56c0 41 15.26 79.44 43.23 108.24 22 22.56 43 35 75.59 44.4 6.24 1.68 9.71 8.4 8.09 14.64a11.39 11.39 0 01-10.87 9.16z'/></svg>";
var footstepsOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M200 246.84c8.81 58.62-7.33 90.67-52.91 97.41-50.65 7.49-71.52-26.44-80.33-85.06-11.85-78.88 16-127.94 55.71-131.1 36.14-2.87 68.71 60.14 77.53 118.75zM223.65 409.53c3.13 33.28-14.86 64.34-42 69.66-27.4 5.36-58.71-16.37-65.09-49.19s17.75-34.56 47.32-40.21 55.99-20.4 59.77 19.74zM312 150.83c-8.81 58.62 7.33 90.67 52.9 97.41 50.66 7.49 71.52-26.44 80.33-85.06 11.86-78.89-16-128.22-55.7-131.1-36.4-2.64-68.71 60.13-77.53 118.75zM288.35 313.53c-3.13 33.27 14.86 64.34 42 69.66 27.4 5.36 58.71-16.37 65.09-49.19s-17.75-34.56-47.32-40.22-55.99-20.4-59.77 19.75z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var gitBranchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='160' cy='96' r='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='160' cy='416' r='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M160 368V144' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='352' cy='160' r='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M352 208c0 128-192 48-192 160' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var informationCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M220 220h32v116' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M208 340h88' class='ionicon-fill-none ionicon-stroke-width'/><path d='M248 130a26 26 0 1026 26 26 26 0 00-26-26z'/></svg>";
var keyOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 00-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 11-32-32 32 32 0 0132 32z' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var locateOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M256 96V56M256 456v-40' class='ionicon-fill-none'/><path d='M256 112a144 144 0 10144 144 144 144 0 00-144-144z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M416 256h40M56 256h40' class='ionicon-fill-none'/></svg>";
var locationOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='256' cy='192' r='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var lockClosed = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 192h-16v-80a96 96 0 10-192 0v80h-16a64.07 64.07 0 00-64 64v176a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V256a64.07 64.07 0 00-64-64zm-48 0H192v-80a64 64 0 11128 0z'/></svg>";
var lockClosedOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M336 208v-95a80 80 0 00-160 0v95' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect x='96' y='208' width='320' height='272' rx='48' ry='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var lockOpenOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M336 112a80 80 0 00-160 0v96' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect x='96' y='208' width='320' height='272' rx='48' ry='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var logInOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M192 176v-40a40 40 0 0140-40h160a40 40 0 0140 40v240a40 40 0 01-40 40H240c-22.09 0-48-17.91-48-40v-40' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M288 336l80-80-80-80M80 256h272' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var logOutOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var mailOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='48' y='96' width='416' height='320' rx='40' ry='40' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M112 160l144 112 144-112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var mapOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M313.27 124.64L198.73 51.36a32 32 0 00-29.28.35L56.51 127.49A16 16 0 0048 141.63v295.8a16 16 0 0023.49 14.14l97.82-63.79a32 32 0 0129.5-.24l111.86 73a32 32 0 0029.27-.11l115.43-75.94a16 16 0 008.63-14.2V74.57a16 16 0 00-23.49-14.14l-98 63.86a32 32 0 01-29.24.35zM328 128v336M184 48v336' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var moonOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var navigateCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 014 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 00336.76 161z'/><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var navigateOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 64L64 240.14h200a8 8 0 018 8V448z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var notificationsOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var pauseCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M208 192v128M304 192v128' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var pencilOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zM420.69 68.69l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62h0a16 16 0 00-22.62 0z' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var peopleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var personAddOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M288 304c-87 0-175.3 48-191.64 138.6-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M88 176v112M144 232H32' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var personOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var playCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M216.32 334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z'/></svg>";
var radioButtonOnOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='256' cy='256' r='144'/></svg>";
var radioOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256.02' r='32'/><path d='M184.25 192.25a96 96 0 000 127.52M327.77 319.77a96 96 0 000-127.52M133.28 141.28a168 168 0 000 229.44M378.72 370.72a168 168 0 000-229.44M435 416a240.34 240.34 0 000-320M77 96a240.34 240.34 0 000 320' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var refreshOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M320 146s24.36-12-64-12a160 160 0 10160 160' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M256 58l80 80-80 80' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var removeCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M336 256H176' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var saveOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M380.93 57.37A32 32 0 00358.3 48H94.22A46.21 46.21 0 0048 94.22v323.56A46.21 46.21 0 0094.22 464h323.56A46.36 46.36 0 00464 417.78V153.7a32 32 0 00-9.37-22.63zM256 416a64 64 0 1164-64 63.92 63.92 0 01-64 64zm48-224H112a16 16 0 01-16-16v-64a16 16 0 0116-16h192a16 16 0 0116 16v64a16 16 0 01-16 16z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var scanOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M336 448h56a56 56 0 0056-56v-56M448 176v-56a56 56 0 00-56-56h-56M176 448h-56a56 56 0 01-56-56v-56M64 176v-56a56 56 0 0156-56h56' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var sendOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M470.3 271.15L43.16 447.31a7.83 7.83 0 01-11.16-7V327a8 8 0 016.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 01-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 010 29.39z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var settingsOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var shieldCheckmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M336 176L225.2 304 176 255.8' class='ionicon-fill-none ionicon-stroke-width'/><path d='M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var speedometerOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M326.1 231.9l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14z'/><path d='M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0056.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0037.1-.1 173.13 173.13 0 01254.8 0 25.19 25.19 0 0037.1.1l3.2-3.5A223.18 223.18 0 00480 287.9C480 164.2 379.7 64 256 64z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M256 128v32M416 288h-32M128 288H96M165.49 197.49l-22.63-22.63M346.51 197.49l22.63-22.63' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var statsChartOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='64' y='320' width='48' height='160' rx='8' ry='8' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect x='288' y='224' width='48' height='256' rx='8' ry='8' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect x='400' y='112' width='48' height='368' rx='8' ry='8' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect x='176' y='32' width='48' height='448' rx='8' ry='8' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var stopCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M310.4 336H201.6a25.62 25.62 0 01-25.6-25.6V201.6a25.62 25.62 0 0125.6-25.6h108.8a25.62 25.62 0 0125.6 25.6v108.8a25.62 25.62 0 01-25.6 25.6z'/></svg>";
var sunnyOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='256' cy='256' r='80' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var timeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M256 128v144h96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var timerOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M112.91 128A191.85 191.85 0 0064 254c-1.18 106.35 85.65 193.8 192 194 106.2.2 192-85.83 192-192 0-104.54-83.55-189.61-187.5-192a4.36 4.36 0 00-4.5 4.37V152' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M233.38 278.63l-79-113a8.13 8.13 0 0111.32-11.32l113 79a32.5 32.5 0 01-37.25 53.26 33.21 33.21 0 01-8.07-7.94z'/></svg>";
var trashOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M80 112h352' class='ionicon-stroke-width'/><path d='M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";

// src/app/guards/auth.guard.ts
var authGuard = () => __async(null, null, function* () {
  const authService = inject(AuthService);
  const router = inject(Router);
  try {
    const isLoggedIn = yield authService.isLoggedIn();
    if (!isLoggedIn) {
      router.navigate(["/login"]);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error en authGuard:", error);
    router.navigate(["/login"]);
    return false;
  }
});

// src/app/app.routes.ts
var routes = [
  // ── RAÍZ → home enruta según el rol ────────────────────────
  { path: "", redirectTo: "home", pathMatch: "full" },
  // ── PÚBLICAS ────────────────────────────────────────────────
  { path: "login", loadComponent: () => import("./login.page-X5UX3BLV.js").then((m) => m.LoginPage) },
  { path: "register", loadComponent: () => import("./register.page-H4CW6QJH.js").then((m) => m.RegisterPage) },
  { path: "forgot-password", loadComponent: () => import("./forgot-password.page-UJCZIRHI.js").then((m) => m.ForgotPasswordPage) },
  { path: "reset-password", loadComponent: () => import("./reset-password.page-7SSX4WGS.js").then((m) => m.ResetPasswordPage) },
  // ── HOME ENRUTADOR (detecta rol y redirige) ─────────────────
  // Sin canActivate: ciudadano anónimo puede entrar
  { path: "home", loadComponent: () => import("./home.page-DJTEYSW7.js").then((m) => m.HomePage) },
  { path: "menu", loadComponent: () => import("./menu.page-2AWZMFN3.js").then((m) => m.MenuPage) },
  // ── VISTAS POR ROL (completamente separadas) ────────────────
  // home-ciudadano: sin guard, accesible anónimamente
  {
    path: "home-ciudadano",
    loadComponent: () => import("./home-ciudadano.page-TNID6XS5.js").then((m) => m.HomeCiudadanoPage)
  },
  // home-conductor: requiere sesión activa
  {
    path: "home-conductor",
    canActivate: [authGuard],
    loadComponent: () => import("./home-conductor.page-3K4JRB7H.js").then((m) => m.HomeConductorPage)
  },
  // ── PROTEGIDAS ──────────────────────────────────────────────
  { path: "configuracion", canActivate: [authGuard], loadComponent: () => import("./configuracion.page-4X5ZP7N2.js").then((m) => m.ConfiguracionPage) },
  { path: "historial", canActivate: [authGuard], loadComponent: () => import("./historial.page-JAKF5S2A.js").then((m) => m.HistorialPage) },
  { path: "reportes", canActivate: [authGuard], loadComponent: () => import("./reportes.page-S45WGCXT.js").then((m) => m.ReportesPage) },
  { path: "perfil", canActivate: [authGuard], loadComponent: () => import("./perfil.page-WAGEXT5F.js").then((m) => m.PerfilPage) },
  // ── WILDCARD ────────────────────────────────────────────────
  { path: "**", redirectTo: "home" }
];

// node_modules/@capacitor/app/dist/esm/index.js
var App = registerPlugin("App", {
  web: () => import("./web-FWRDE2VR.js").then((m) => new m.AppWeb())
});

// src/app/app.component.ts
var RUTAS_RAIZ = ["/home", "/menu", "/login"];
var _AppComponent = class _AppComponent {
  constructor(authService, supabaseService, offlineService, router, alertCtrl) {
    this.authService = authService;
    this.supabaseService = supabaseService;
    this.offlineService = offlineService;
    this.router = router;
    this.alertCtrl = alertCtrl;
    this.historialRutas = [];
    this.initializeApp();
    this.escucharDeepLinks();
    this.rastrearHistorial();
    this.manejarBotonAtras();
  }
  // ── FIX #14: rastrear historial de rutas ─────────────────
  // Permite que el botón atrás navegue al sitio correcto
  // y NO vuelva al login si ya hay sesión activa.
  rastrearHistorial() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      this.historialRutas.push(e.urlAfterRedirects);
    });
  }
  // ── FIX #14: botón atrás del hardware Android ────────────
  manejarBotonAtras() {
    App.addListener("backButton", () => __async(this, null, function* () {
      const rutaActual = this.router.url;
      if (RUTAS_RAIZ.some((r) => rutaActual.startsWith(r))) {
        const alert = yield this.alertCtrl.create({
          header: "Salir",
          message: "\xBFDeseas salir de la aplicaci\xF3n?",
          buttons: [
            { text: "Cancelar", role: "cancel" },
            { text: "Salir", handler: () => App.exitApp() }
          ]
        });
        yield alert.present();
        return;
      }
      const hayHistorial = this.historialRutas.length > 1;
      if (hayHistorial) {
        this.historialRutas.pop();
        const anterior = this.historialRutas[this.historialRutas.length - 1];
        if (anterior?.includes("login")) {
          let logueado = false;
          try {
            logueado = yield this.authService.isLoggedIn();
          } catch (e) {
            console.warn("Error verificando sesi\xF3n en bot\xF3n atr\xE1s:", e);
          }
          if (logueado) {
            this.router.navigate(["/menu"], { replaceUrl: true });
            return;
          }
        }
        window.history.back();
      } else {
        this.router.navigate(["/home"]);
      }
    }));
  }
  // ── DEEP LINKS ────────────────────────────────────────────
  escucharDeepLinks() {
    App.addListener("appUrlOpen", (_0) => __async(this, [_0], function* ({ url }) {
      yield this.manejarDeepLink(url);
    }));
  }
  manejarDeepLink(url) {
    return __async(this, null, function* () {
      try {
        if (!url.includes("reset-password") && !url.includes("type=recovery"))
          return;
        const fragmento = url.includes("#") ? url.split("#")[1] : url.split("?")[1];
        if (fragmento) {
          const params = new URLSearchParams(fragmento);
          const accessToken = params.get("access_token");
          const refresh = params.get("refresh_token");
          const tokenHash = params.get("token_hash");
          const type = params.get("type");
          const sb = this.supabaseService.getClient();
          if (accessToken && refresh) {
            yield sb.auth.setSession({ access_token: accessToken, refresh_token: refresh });
          } else if (tokenHash && type === "recovery") {
            yield sb.auth.verifyOtp({ token_hash: tokenHash, type: "recovery" });
          }
        }
        this.router.navigate(["/reset-password"], { replaceUrl: true });
      } catch {
        this.router.navigate(["/login"]);
      }
    });
  }
  // ── INICIALIZACIÓN ────────────────────────────────────────
  initializeApp() {
    return __async(this, null, function* () {
      try {
        yield this.offlineService.init();
        const isLogged = yield this.authService.isLoggedIn();
        if (!isLogged) {
          const url = this.router.url;
          if (!url || url === "/")
            this.router.navigate(["/home"]);
        }
      } catch (e) {
        console.error("Error en initializeApp:", e);
      }
    });
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SupabaseService), \u0275\u0275directiveInject(OfflineSqliteService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertController));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-app");
    \u0275\u0275element(1, "ion-router-outlet");
    \u0275\u0275elementEnd();
  }
}, dependencies: [IonApp, IonRouterOutlet], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [IonApp, IonRouterOutlet], template: "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n" }]
  }], () => [{ type: AuthService }, { type: SupabaseService }, { type: OfflineSqliteService }, { type: Router }, { type: AlertController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 19 });
})();

// src/main.ts
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw-tiles.js").then(() => console.log("\u2705 SW tiles registrado")).catch((e) => console.warn("SW tiles error:", e));
}
addIcons({
  "arrow-back-outline": arrowBackOutline,
  "arrow-forward-outline": arrowForwardOutline,
  "arrow-redo-outline": arrowRedoOutline,
  "chevron-forward-outline": chevronForwardOutline,
  "chevron-down-outline": chevronDownOutline,
  "chevron-up-outline": chevronUpOutline,
  "close-outline": closeOutline,
  "refresh-outline": refreshOutline,
  "save-outline": saveOutline,
  "settings-outline": settingsOutline,
  "log-in-outline": logInOutline,
  "log-out-outline": logOutOutline,
  "send-outline": sendOutline,
  "create-outline": createOutline,
  "checkmark-outline": checkmarkOutline,
  "checkmark-circle-outline": checkmarkCircleOutline,
  "checkmark-done-outline": checkmarkDoneOutline,
  "map-outline": mapOutline,
  "navigate-outline": navigateOutline,
  "navigate-circle-outline": navigateCircleOutline,
  "locate-outline": locateOutline,
  "location-outline": locationOutline,
  "git-branch-outline": gitBranchOutline,
  "radio-button-on-outline": radioButtonOnOutline,
  "radio-outline": radioOutline,
  "earth-outline": earthOutline,
  "moon-outline": moonOutline,
  "search-outline": searchOutline,
  "expand-outline": expandOutline,
  "contract-outline": contractOutline,
  "footsteps-outline": footstepsOutline,
  "timer-outline": timerOutline,
  "speedometer-outline": speedometerOutline,
  "play-circle-outline": playCircleOutline,
  "stop-circle-outline": stopCircleOutline,
  "pause-circle-outline": pauseCircleOutline,
  "person-outline": personOutline,
  "person-add-outline": personAddOutline,
  "people-outline": peopleOutline,
  "shield-checkmark-outline": shieldCheckmarkOutline,
  "finger-print-outline": fingerPrintOutline,
  "mail-outline": mailOutline,
  "call-outline": callOutline,
  "card-outline": cardOutline,
  "camera-outline": cameraOutline,
  "notifications-outline": notificationsOutline,
  "trash-outline": trashOutline,
  // Configuración nuevos
  notificationsOutline,
  trashOutline,
  "bar-chart-outline": barChartOutline,
  "stats-chart-outline": statsChartOutline,
  "analytics-outline": analyticsOutline,
  "calendar-outline": calendarOutline,
  "time-outline": timeOutline,
  "car-outline": carOutline,
  "alert-circle-outline": alertCircleOutline,
  "information-circle-outline": informationCircleOutline,
  "key-outline": keyOutline,
  "lock-closed": lockClosed,
  "lock-closed-outline": lockClosedOutline,
  "lock-open-outline": lockOpenOutline,
  "pencil-outline": pencilOutline,
  "cloud-offline-outline": cloudOfflineOutline,
  "scan-outline": scanOutline,
  "sunny-outline": sunnyOutline,
  "eye-outline": eyeOutline,
  "remove-circle-outline": removeCircleOutline
});
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient()
  ]
});
//# sourceMappingURL=main.js.map
