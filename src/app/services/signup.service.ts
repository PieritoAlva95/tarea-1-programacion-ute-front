import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  user: Contact = {
    names: '',
    lastNames: '',
    email: '',
    password: '',
  };

  private SIGN_UP_URL = 'http://localhost:3000/api/v1/users/signup';

  constructor(private http: HttpClient) {}

  signUp(user: Contact) {
    return this.http.post(this.SIGN_UP_URL, user);
  }
}
