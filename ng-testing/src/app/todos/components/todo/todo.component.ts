import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Input('todo') todoProps!: TodoInterface

  checkRender(): boolean {
    console.log('check render');
    return true;
  }

  changeText() {
    this.todoProps.text = 'changed from inside'
  }
}
