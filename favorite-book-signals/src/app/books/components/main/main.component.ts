import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  formBuilder = inject(FormBuilder);
  bookSevice = inject(BookService);
  
  submitBook() {
    const { author, name, yearOfWrite } = this.bookForm.value;
    this.bookSevice.addBook(author, name, yearOfWrite);
    this.bookSevice.allTimeBooks();
    this.bookForm.reset();
  }

  bookForm = new FormGroup({
    author: new FormControl(''),
    name: new FormControl(''),
    yearOfWrite: new FormControl()
  });


}
