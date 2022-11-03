import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  contact: Contact = {
    names: '',
    lastNames: '',
    email: '',
    password: '',
  };

  private SIGN_UP_URL = 'http://localhost:3000/api/v1/contacts';

  constructor(private http: HttpClient) {}

  signUp(contact: Contact) {
    return this.http.post(this.SIGN_UP_URL, contact);
  }

  getLogin() {
    return this.http.get(`http://localhost:3000/api/v1/login`);
  }
}
