import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  URL_API = 'http://172.105.151.84/api/v1';
  selectedContact: Contact = {
    names: '',
    lastNames: '',
    email: '',
    phoneNumber: '',
  };
  contacts!: Contact[];

  constructor(private http: HttpClient) {}

  createContact(contact: Contact) {
    return this.http.post(`${this.URL_API}/contacts`, contact);
  }

  getContacts() {
    return this.http.get<Contact[]>(`${this.URL_API}/user-contacts`);
  }

  editContact(contact: Contact) {
    return this.http.put(`${this.URL_API}/contacts/${contact._id}`, contact);
  }

  deleteNote(_id: string) {
    return this.http.delete(`${this.URL_API}/contacts/${_id}`);
  }
}
