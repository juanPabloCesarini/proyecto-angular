import { Injectable } from '@angular/core';
import Note from '../../models/Note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[];
  constructor() {
    this.notes = [
      { id: this.createId(), title: 'Note 1', marked: false },
      { id: this.createId(), title: 'Note 2', marked: true },
      { id: this.createId(), title: 'Note 3', marked: false },
    ];
  }

  updateTitle(id: string, newTitle: string) {
    const noteToUpdate = this.notes.find((note) => note.id === id);
    if (!noteToUpdate) return;
    noteToUpdate.title = newTitle;
  }

  updateMark(id: string) {
    const noteToUpdate = this.notes.find((note) => note.id === id);
    if (!noteToUpdate) return;
    noteToUpdate.marked = !noteToUpdate.marked;
  }

  createNote(note:Note){
    this.notes.unshift(note);
  }
  createId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  };
}
