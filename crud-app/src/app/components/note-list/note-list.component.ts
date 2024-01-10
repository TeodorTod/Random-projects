import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit{
  @Output() selectedNote = new EventEmitter<Note>();
  notes$!: Observable<Note[]>;
  // isEditNote: boolean = false;

  constructor(private noteService: NoteService) {

  }

  ngOnInit(): void {
    this.notes$ = this.noteService.getNotesObservable();
  }

  editNote(note: Note) {
    this.noteService.setIsEditTable(true);
    this.selectedNote.emit(note); 
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id)
  }
}
