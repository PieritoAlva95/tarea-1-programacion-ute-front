import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  userLogin = {
    email: '',
    password: '',
  };

  private SIGN_IN_URL = 'http://172.105.151.84/api/v1/users/signin';

  constructor(private http: HttpClient, private router: Router) {}

  signIn(user: any) {
    return this.http.post(this.SIGN_IN_URL, user);
  }

  loggedIn() {
    if (sessionStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  logOut() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/sign-in']);
  }
}
