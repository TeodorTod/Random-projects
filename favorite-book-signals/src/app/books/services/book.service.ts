declare var require: any
import { Injectable, signal } from '@angular/core';
import { BookI } from '../interfaces/book.interface';
const { v4: uuidv4 } = require('uuid');

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksSignal = signal<BookI[]>([]);

  addBook(author: any, name: any, yearOfWrite: number) {
    const newBook: BookI = {
      id: uuidv4(),
      author,
      name,
      yearOfWrite
    }
    this.booksSignal.update(data => [...data, newBook])
  }

  removeBook(id: any) {
    this.booksSignal.update(books => books.filter((book) => book.id !== id))
  }


}
