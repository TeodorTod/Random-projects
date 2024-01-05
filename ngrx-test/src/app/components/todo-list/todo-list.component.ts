import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import { addTodo, removeTodo, toggleTodo } from 'src/app/store/actions/todo.actions';
const { v4: uuidv4 } = require('uuid');

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos$!: Todo[];
  newTodoTitle = '';

  constructor(private store: Store<{ todos: { todos: Todo[] } }>) {
    store.select('todos').subscribe((todoState: { todos: Todo[] }) => {
      this.todos$ = todoState.todos;
    })
  }

  addTodo() {
    if (this.newTodoTitle.trim() === '') {
      return
    }

    const todo: Todo = {
      id: uuidv4(),
      title: this.newTodoTitle,
      completed: false,
      userId: Math.random()
    }

    this.store.dispatch(addTodo({ todo }));
    this.newTodoTitle = '';
  }

  toggleTodo(id: string) {
    this.store.dispatch(toggleTodo({ id }));
  }

  removeTodo(id: string) {
    this.store.dispatch(removeTodo({ id }));
  }

}
