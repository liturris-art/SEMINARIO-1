import { Routes } from '@angular/router';
import { VehiculosListaComponent } from './components/vehiculos-lista/vehiculos-lista';
import { VehiculosActualizacion } from './components/vehiculos-actualizacion/vehiculos-actualizacion';
import { VehiculosRegistro } from './components/vehiculos-registro/vehiculos-registro';
import { CallesListaComponent } from './components/calle-lista/calle-lista';
import { RutasMapaComponent } from './components/rutas-lista/rutas-lista';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';

import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [

  // 🔓 RUTAS PÚBLICAS
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginGuard]   // evita entrar si ya está logueado
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [loginGuard]
  },

  // 🔐 RUTAS PROTEGIDAS
  {
    path: '',
    canActivate: [authGuard],
    children: [

      { path: 'vehiculos', component: VehiculosListaComponent },
      { path: 'vehiculos/registro', component: VehiculosRegistro },
      { path: 'vehiculos/editar/:id', component: VehiculosActualizacion },

      { path: 'calles', component: CallesListaComponent },
      { path: 'rutas', component: RutasMapaComponent }

    ]
  },

  // Redirecciones
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }

];