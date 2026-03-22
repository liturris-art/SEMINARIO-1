import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  // 🔁 REDIRECCIÓN INICIAL
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  // 🔓 RUTAS PÚBLICAS (sin protección)
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./pages/forgot-password/forgot-password.page').then(
        (m) => m.ForgotPasswordPage,
      ),
  },

  // 🔐 RUTAS PROTEGIDAS (requieren autenticación)
  {
    path: 'configuracion',
    loadComponent: () =>
      import('./pages/configuracion/configuracion.page').then(
        (m) => m.ConfiguracionPage,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
    canActivate: [AuthGuard],
  },

  // 🚫 FALLBACK
  {
    path: '**',
    redirectTo: 'login',
  },
];
