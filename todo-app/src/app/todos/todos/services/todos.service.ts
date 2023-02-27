import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterEnum } from '../types/filter.enum';
import { TodoInterface } from '../types/todo.interface';
const { v4: uuidv4 } = require('uuid'); 

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos$ = new BehaviorSubject<TodoInterface[]>([]);
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all)

  constructor() {
    
   }

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text, 
      isCompleted: false,
      id: uuidv4(),
    }
    const updatedTodos = [...this.todos$.getValue(), newTodo]
    this.todos$.next(updatedTodos)
  }

  toggleAll(isCompleted: boolean): void {
    
    const updatedTodos = this.todos$.getValue().map(todo => {
      return {
        ...todo,
        isCompleted
      }
    })
    this.todos$.next(updatedTodos);
  }
}
