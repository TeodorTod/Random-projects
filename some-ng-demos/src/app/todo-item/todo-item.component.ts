import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Todo {
  title: string,
  isCompleted: boolean
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() completeStateChange: EventEmitter<Todo> = new EventEmitter;

  handleCompletion(todoState: Todo): void {
    // todoState.isCompleted = !todoState.isCompleted;
    this.completeStateChange.emit(todoState);
  }

}
