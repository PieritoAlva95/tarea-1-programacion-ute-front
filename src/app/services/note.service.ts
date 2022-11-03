import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  URL_API = 'http://localhost:3000/api/v1/notes';
  selectedNote: Note = { title: '', body: '' };
  notes!: Note[];

  constructor(private http: HttpClient) {}

  createNote(note: Note) {
    return this.http.post(this.URL_API, note);
  }

  getNotes() {
    return this.http.get<Note[]>(this.URL_API);
  }

  updateNote(note: Note) {
    return this.http.put(`${this.URL_API}/${note._id}`, note);
  }

  deleteNote(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}