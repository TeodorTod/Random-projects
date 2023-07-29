import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookService } from '../../services/book.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent {
  bookService = inject(BookService);
  bookDataToEdit: any;
  formBuilder = inject(FormBuilder);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<EditDialogComponent>) {
    this.bookDataToEdit = this.data.bookFromSignal
  }

  editBook() {
    const { id } = this.data.bookFromSignal; // Get the book ID from the data

    if (!id) {
      console.error('Invalid book data');
      return;
    }
    const { author, name, yearOfWrite } = this.bookForm.value;
    this.bookService.editBook(id, author, name, yearOfWrite);
    this.dialogRef.close();
  }

  bookForm = new FormGroup({
    author: new FormControl(''),
    name: new FormControl(''),
    yearOfWrite: new FormControl()
  });
}
