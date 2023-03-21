import { Component } from '@angular/core';
import { Todo } from '../todo-item/todo-item.component';



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


  markAllTodosCompleted() {
    for (let todo of this.todos) {
      todo.isCompleted = true;
    }
  }

  handleStateChange(todoItem: Todo): void {
    todoItem.isCompleted = !todoItem.isCompleted;
    
  }

}
