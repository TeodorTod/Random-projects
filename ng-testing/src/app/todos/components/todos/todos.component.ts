import { Component } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  todos: TodoInterface[] = [
    {
      id: '1',
      text: 'First todo',
      isCompleted: true
    },
    {
      id: '2',
      text: 'Second todo',
      isCompleted: true
    },
    {
      id: '3',
      text: 'Third todo',
      isCompleted: false
    }
  ]

  // changeText() {
  //   console.log('change text');
  // }

  changeArr() {
    // this.todos[0].text = 'opaa';
    this.todos[0] = {...this.todos[0], text: 'opaa'}
    console.log(this.todos);
    
  }
}
