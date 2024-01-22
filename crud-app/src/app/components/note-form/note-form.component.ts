import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit, OnChanges {
  @Input() selectedNote!: Note;
  noteForm!: FormGroup;
  isEdit!: boolean;

  constructor(private noteService: NoteService, private formBuilder: FormBuilder) {
    this.noteService.getIsEditTable().subscribe((response) =>
      this.isEdit = response
    );
  }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      id: new Date().getTime(),
      title: ['', Validators.required],
      content: ['']
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedNote']?.currentValue) {
      const value = changes['selectedNote']?.currentValue;
      this.noteForm.patchValue({
        id: value.id,
        title: value.title,
        content: value.content
      })
    }
    
  }

  onSubmit() {
    if (this.noteForm.invalid) {
      return
    }
    const note: Note = this.noteForm.getRawValue();
    console.log(note);
    
    if (this.isEdit) {
      this.noteService.updateNote(note);
      this.noteService.setIsEditTable(false);
    } else {
      this.noteService.createNote(note);
    }


    this.noteForm.reset();
  }

  editNote(note: Note) {
    this.noteService.setIsEditTable(true);

  }
}
