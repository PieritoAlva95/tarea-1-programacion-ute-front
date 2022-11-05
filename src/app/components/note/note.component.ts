import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  constructor(public noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  addNote(form: NgForm) {
    if (form.value._id) {
      this.noteService.updateNote(form.value).subscribe((_res: any) => {
        this.getNotes();
        form.reset();
      });
    } else {
      this.noteService.createNote(form.value).subscribe((_res: any) => {
        this.getNotes();
        form.reset();
      });
    }
  }

  getNotes() {
    this.noteService.getNotes().subscribe((res: any) => {
      this.noteService.notes = res.notes_list_finded;
    });
  }

  editNote(note: Note) {
    this.noteService.selectedNote = note;
  }

  deleteNote(id: string) {
    const isTrue = confirm('Estas seguro de eliminar la nota?');
    if (isTrue) {
      this.noteService.deleteNote(id).subscribe((_res: any) => {
        this.getNotes();
      });
    }
  }
}
