import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class OnlyAdminUsersGuard implements CanActivate {
  router: Router;
  constructor(
    router: Router
  ) {
    this.router = router;
  }

  canActivate() {
    // const user = (<any>window).user;
    const user = JSON.parse(window.localStorage.getItem('user'));
    if (user && user.isAdmin) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
