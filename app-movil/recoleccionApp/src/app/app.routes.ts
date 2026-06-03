import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

  // ── RAÍZ → home enruta según el rol ────────────────────────
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // ── PÚBLICAS ────────────────────────────────────────────────
  { path: 'login',           loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) },
  { path: 'register',        loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage) },
  { path: 'forgot-password', loadComponent: () => import('./pages/forgot-password/forgot-password.page').then(m => m.ForgotPasswordPage) },
  { path: 'reset-password',  loadComponent: () => import('./pages/reset-password/reset-password.page').then(m => m.ResetPasswordPage) },

  // ── HOME ENRUTADOR (detecta rol y redirige) ─────────────────
  // Sin canActivate: ciudadano anónimo puede entrar
  { path: 'home', loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },
  { path: 'menu', loadComponent: () => import('./pages/menu/menu.page').then(m => m.MenuPage) },

  // ── VISTAS POR ROL (completamente separadas) ────────────────
  // home-ciudadano: sin guard, accesible anónimamente
  {
    path: 'home-ciudadano',
    loadComponent: () => import('./pages/home-ciudadano/home-ciudadano.page').then(m => m.HomeCiudadanoPage),
  },
  // home-conductor: requiere sesión activa
  {
    path: 'home-conductor',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/home-conductor/home-conductor.page').then(m => m.HomeConductorPage),
  },

  // ── PROTEGIDAS ──────────────────────────────────────────────
  { path: 'configuracion', canActivate: [authGuard], loadComponent: () => import('./pages/configuracion/configuracion.page').then(m => m.ConfiguracionPage) },
  { path: 'historial',     canActivate: [authGuard], loadComponent: () => import('./pages/historial/historial.page').then(m => m.HistorialPage) },
  { path: 'reportes',      canActivate: [authGuard], loadComponent: () => import('./pages/reportes/reportes.page').then(m => m.ReportesPage) },
  { path: 'perfil',        canActivate: [authGuard], loadComponent: () => import('./pages/perfil/perfil.page').then(m => m.PerfilPage) },

  // ── WILDCARD ────────────────────────────────────────────────
  { path: '**', redirectTo: 'home' },
];
