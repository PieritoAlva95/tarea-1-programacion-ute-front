import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../models/note';
import { SigninService } from './signin.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  URL_API = 'http://localhost:3000/api/v1/notes';
  API = 'http://localhost:3000/api/v1/contact-notes';
  selectedNote: Note = { title: '', body: '' };
  notes!: Note[];

  constructor(private http: HttpClient, private signInservice: SigninService) {}

  createNote(note: Note) {
    return this.http.post(this.URL_API, note);
  }

  getNotes() {
    return this.http.get<Note[]>(this.API);
  }

  updateNote(note: Note) {
    return this.http.put(`${this.URL_API}/${note._id}`, note);
  }

  deleteNote(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
