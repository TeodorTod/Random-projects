import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';
const { v4: uuidv4 } = require('uuid');

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todosSig = signal<TodoInterface[]>([]);
  filterSignal = signal<FilterEnum>(FilterEnum.all);

  changeFilter(filterName: FilterEnum) {
    this.filterSignal.set(filterName);
  }

  addTodo(text: string) {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: uuidv4()
    }
    this.todosSig.update(data => [...data, newTodo]);
  }


  changeTodo(id: string, text: string) {
    this.todosSig.update(todos => todos.map(todo => todo.id === id ? { ...todo, text } : todo))
  }

  removeTodo(id: string) {
    this.todosSig.update(todos => todos.filter((todo) => todo.id !== id))
  }

  toggleTodo(id: string): void {
    this.todosSig.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  toggleAll(isCompleted: boolean): void {
    this.todosSig.update((todos) =>
      todos.map((todo) => ({ ...todo, isCompleted }))
    );
  }

}
