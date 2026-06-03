
// FIX #11: registrar Service Worker para tiles del mapa offline
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-tiles.js')
    .then(() => console.log('✅ SW tiles registrado'))
    .catch(e => console.warn('SW tiles error:', e));
}

import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy, provideRouter,
  withPreloading, PreloadAllModules,
} from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { addIcons } from 'ionicons';
import {
  // Navegación
  arrowBackOutline, arrowForwardOutline, arrowRedoOutline,
  chevronForwardOutline, chevronDownOutline, chevronUpOutline,
  closeOutline, refreshOutline, saveOutline, settingsOutline,
  logInOutline, logOutOutline, sendOutline, createOutline,
  checkmarkOutline, checkmarkCircleOutline, checkmarkDoneOutline,
  // Mapa / GPS
  mapOutline, navigateOutline, navigateCircleOutline,
  locateOutline, locationOutline, gitBranchOutline,
  radioButtonOnOutline, radioOutline, earthOutline, moonOutline,
  searchOutline, expandOutline, contractOutline,
  footstepsOutline, timerOutline, speedometerOutline,
  // Recorrido
  playCircleOutline, stopCircleOutline, pauseCircleOutline,
  // Usuario
  personOutline, personAddOutline, peopleOutline,
  shieldCheckmarkOutline, fingerPrintOutline,
  mailOutline, callOutline, cardOutline,
  // Cámara
  cameraOutline,
  // Configuración nuevos
  notificationsOutline,
  trashOutline,
  // Reportes
  barChartOutline, statsChartOutline, analyticsOutline,
  calendarOutline, timeOutline,
  // Sistema
  carOutline, alertCircleOutline, informationCircleOutline,
  keyOutline, lockClosed, lockClosedOutline, lockOpenOutline,
  pencilOutline, cloudOfflineOutline,
} from 'ionicons/icons';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { scanOutline, sunnyOutline, eyeOutline, removeCircleOutline } from 'ionicons/icons';
addIcons({
  'arrow-back-outline':         arrowBackOutline,
  'arrow-forward-outline':      arrowForwardOutline,
  'arrow-redo-outline':         arrowRedoOutline,
  'chevron-forward-outline':    chevronForwardOutline,
  'chevron-down-outline':       chevronDownOutline,
  'chevron-up-outline':         chevronUpOutline,
  'close-outline':              closeOutline,
  'refresh-outline':            refreshOutline,
  'save-outline':               saveOutline,
  'settings-outline':           settingsOutline,
  'log-in-outline':             logInOutline,
  'log-out-outline':            logOutOutline,
  'send-outline':               sendOutline,
  'create-outline':             createOutline,
  'checkmark-outline':          checkmarkOutline,
  'checkmark-circle-outline':   checkmarkCircleOutline,
  'checkmark-done-outline':     checkmarkDoneOutline,
  'map-outline':                mapOutline,
  'navigate-outline':           navigateOutline,
  'navigate-circle-outline':    navigateCircleOutline,
  'locate-outline':             locateOutline,
  'location-outline':           locationOutline,
  'git-branch-outline':         gitBranchOutline,
  'radio-button-on-outline':    radioButtonOnOutline,
  'radio-outline':              radioOutline,
  'earth-outline':              earthOutline,
  'moon-outline':               moonOutline,
  'search-outline':             searchOutline,
  'expand-outline':             expandOutline,
  'contract-outline':           contractOutline,
  'footsteps-outline':          footstepsOutline,
  'timer-outline':              timerOutline,
  'speedometer-outline':        speedometerOutline,
  'play-circle-outline':        playCircleOutline,
  'stop-circle-outline':        stopCircleOutline,
  'pause-circle-outline':       pauseCircleOutline,
  'person-outline':             personOutline,
  'person-add-outline':         personAddOutline,
  'people-outline':             peopleOutline,
  'shield-checkmark-outline':   shieldCheckmarkOutline,
  'finger-print-outline':       fingerPrintOutline,
  'mail-outline':               mailOutline,
  'call-outline':               callOutline,
  'card-outline':               cardOutline,
  'camera-outline':             cameraOutline,
  'notifications-outline':      notificationsOutline,
  'trash-outline':              trashOutline,
  // Configuración nuevos
  notificationsOutline,
  trashOutline,
  'bar-chart-outline':          barChartOutline,
  'stats-chart-outline':        statsChartOutline,
  'analytics-outline':          analyticsOutline,
  'calendar-outline':           calendarOutline,
  'time-outline':               timeOutline,
  'car-outline':                carOutline,
  'alert-circle-outline':       alertCircleOutline,
  'information-circle-outline': informationCircleOutline,
  'key-outline':                keyOutline,
  'lock-closed':                lockClosed,
  'lock-closed-outline':        lockClosedOutline,
  'lock-open-outline':          lockOpenOutline,
  'pencil-outline':             pencilOutline,
  'cloud-offline-outline':      cloudOfflineOutline,
  'scan-outline':           scanOutline,
'sunny-outline':          sunnyOutline,
'eye-outline':            eyeOutline,
'remove-circle-outline':  removeCircleOutline,
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
  ],
});
