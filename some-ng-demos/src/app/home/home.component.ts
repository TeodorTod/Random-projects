import { Component } from '@angular/core';

interface Todo {
  title: string,
  isCompleted: boolean
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  todos: Todo[] = [
    { title: 'Todo 1', isCompleted: false },
    { title: 'Todo 2', isCompleted: true },
    { title: 'Todo 3', isCompleted: false },
    { title: 'Todo 4', isCompleted: true },
  ];

  handleCompletion(todoState: Todo): void {
    todoState.isCompleted = !todoState.isCompleted;
  }

  markAllTodosCompleted() {
    for (let todo of this.todos) {
      todo.isCompleted = true;
    }
  }

}
