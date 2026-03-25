import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';

import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { provideHttpClient } from '@angular/common/http';

import { addIcons } from 'ionicons';

import {
  carOutline,
  fingerPrintOutline,
  refreshOutline,
  logInOutline,
  personAddOutline,
  keyOutline,
  lockClosedOutline,
  informationCircleOutline
} from 'ionicons/icons';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// Registrar TODOS los iconos usados en la app
addIcons({
  'car-outline': carOutline,
  'finger-print-outline': fingerPrintOutline,
  'refresh-outline': refreshOutline,
  'log-in-outline': logInOutline,
  'person-add-outline': personAddOutline,
  'key-outline': keyOutline,
  'lock-closed-outline': lockClosedOutline,
  'information-circle-outline': informationCircleOutline
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
  ],
});