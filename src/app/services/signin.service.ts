import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  contact = {
    email: '',
    password: '',
  };

  private SIGN_IN_URL = 'http://localhost:3000/api/v1/contacts/signin';

  constructor(private http: HttpClient, private router: Router) {}

  signIn(contact: any) {
    return this.http.post(this.SIGN_IN_URL, contact);
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
