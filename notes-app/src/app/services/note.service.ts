import { Injectable } from '@angular/core';
import Note from '../../models/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[];
  constructor() { 
    this.notes = [
      {id: this.createId(), title: 'Note 1', marked: false},
      {id: this.createId(), title: 'Note 2', marked: true},
      {id: this.createId(), title: 'Note 3', marked: false},
    ];
  }

  createId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }
}
