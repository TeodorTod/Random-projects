import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
const { v4: uuidv4 } = require('uuid');

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todosSig = signal<TodoInterface[]>([]);

  addTodo(text: string) {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: uuidv4()
    }
    this.todosSig.update(data => [...data, newTodo]);
  }



}
