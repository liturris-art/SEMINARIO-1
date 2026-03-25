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
} from 'ionicons/icons';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// Registrar TODOS los iconos usados
addIcons({
  'car-outline': carOutline,
  'finger-print-outline': fingerPrintOutline,
  'refresh-outline': refreshOutline,
  'log-in': logInOutline,
  'person-add': personAddOutline,
  'key': keyOutline,
  'lock-closed': lockClosedOutline,
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
  ],
});