import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/AuthService';
import { map, take } from 'rxjs/operators';

export const loginGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getUser().pipe(
    take(1),
    map(user => user ? router.createUrlTree(['/vehiculos']) : true)
  );
};