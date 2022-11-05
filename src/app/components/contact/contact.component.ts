import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(public contactService: ContactService) {}

  ngOnInit(): void {
    this.getContacts();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  createContact(form: NgForm) {
    if (form.value._id) {
      this.contactService.editContact(form.value).subscribe((_res: any) => {
        this.getContacts();
        form.reset();
      });
    } else {
      this.contactService.createContact(form.value).subscribe((_res: any) => {
        this.getContacts();
        form.reset();
      });
    }
  }

  getContacts() {
    this.contactService.getContacts().subscribe((res: any) => {
      this.contactService.contacts = res.contact_list_finded;
    });
  }

  editContact(contact: any) {
    this.contactService.selectedContact = contact;
  }

  deleteContact(id: string) {
    const isTrue = confirm('Estas seguro de eliminar el contacto?');
    if (isTrue) {
      this.contactService.deleteNote(id).subscribe((_res: any) => {
        this.getContacts();
      });
    }
  }
}
