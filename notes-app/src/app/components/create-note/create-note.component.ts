import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import Note from '../../../models/Note';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css'
})
export class CreateNoteComponent {

  constructor(public noteService:NoteService){}
  noteTitle:string ='';

  handelSubmit =() =>{
    if(!this.noteTitle)return;

    const newNote:Note = {
      id: this.noteService.createId(),
      title: this.noteTitle,
      marked:false
    };

    this.noteService.createNote(newNote);
    this.noteTitle ='';
  }


}
