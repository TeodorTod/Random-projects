import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private todoService: TodosService) {
    this.todoService.todos$.subscribe(todo => console.log(todo)
    )
  }

  text: string = '';
  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
    console.log(target.value);
  }

  addTodo(): void {
    console.log('addtodo', this.text);
    this.todoService.addTodo(this.text)
  }

}
