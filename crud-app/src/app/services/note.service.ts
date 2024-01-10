import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[] = [];
  notesSubject = new BehaviorSubject<Note[]>([]);
  private isEdit = new BehaviorSubject<boolean>(false);

  constructor() { }

  getNotesObservable(): Observable<Note[]> {
    return this.notesSubject.asObservable();
  }

  createNote(note: Note) {
    note.id = this.notes.length;
    this.notes.push(note);
    this.notesSubject.next(this.notes);
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter((note) => note.id !== id);
    this.notesSubject.next(this.notes);
  }

  setIsEditTable(value: boolean) {
    this.isEdit.next(value);
  }

  getIsEditTable(): Observable<boolean> {
    return this.isEdit.asObservable();
  }

  updateNote(updatedNote: Note) {
    const index = this.notes.findIndex((note) => note.id === updatedNote.id);
    if (index !== -1) { 
      this.notes[index] = updatedNote;
      this.notesSubject.next(this.notes);
    }
  }
}
