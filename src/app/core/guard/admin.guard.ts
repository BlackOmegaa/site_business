import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();
  const role = authService.getUserRole();

  if (!token) {
    router.navigate(['/home']);
    return false;
  }

  if (role !== 'ADMIN') {
    router.navigate(['/']);
    return false;
  }

  return true;
};
