import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

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


  {
    path: 'reset-password',
    loadComponent: () =>
      import('./pages/reset-password/reset-password.page').then(
        (m) => m.ResetPasswordPage,
      ),
  },

  {
    path: 'menu',
    loadComponent: () =>
      import('./pages/menu/menu.page').then((m) => m.MenuPage),
    canActivate: [AuthGuard],
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
    canActivate: [AuthGuard],
  },

  {
  path: 'configuracion',
  loadComponent: () =>
    import('./pages/configuracion/configuracion.page').then(
      (m) => m.ConfiguracionPage
    ),
  canActivate: [AuthGuard],
  },

    {
    path: '**',
    redirectTo: 'login',
  },

{
  path: 'historial',
  loadComponent: () =>
    import('./pages/historial/historial.page').then(m => m.HistorialPage)
},

{
  path: 'reportes',
  loadComponent: () =>
    import('./pages/reportes/reportes.page').then(m => m.ReportesPage)
 },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'historial',
    loadComponent: () => import('./pages/historial/historial.page').then( m => m.HistorialPage)
  },
  {
    path: 'reportes',
    loadComponent: () => import('./pages/reportes/reportes.page').then( m => m.ReportesPage)
  },


];