import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-item/todo-item.component';
import { TodoService } from '../todo.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [
    { title: 'Todo 1', isCompleted: false },
    { title: 'Todo 2', isCompleted: true },
    { title: 'Todo 3', isCompleted: false },
    { title: 'Todo 4', isCompleted: true },
  ];

  message: any;

  constructor(private todoService: TodoService) {
    
  }

  onClick(event: any) {
    console.log(event);
    this.message = event;
  }

  ngOnInit(): void {
    this.todoService.getTodos();
  }


  markAllTodosCompleted() {
    for (let todo of this.todos) {
      todo.isCompleted = true;
    }
  }

  handleStateChange(todoItem: Todo): void {
    todoItem.isCompleted = !todoItem.isCompleted;
    
  }

  update(event: Event) {
    console.log('opa');
    
  }

}
