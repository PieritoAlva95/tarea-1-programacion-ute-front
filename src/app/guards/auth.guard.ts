import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SigninService } from '../services/signin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private signService: SigninService, private router: Router) {}

  canActivate(): boolean {
    if (this.signService.loggedIn()) {
      return true;
    }
    this.router.navigate(['/sign-in']);
    return false;
  }
}
