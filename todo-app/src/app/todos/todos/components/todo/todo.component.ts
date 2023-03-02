import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{
  @Input('todo') todoProps: TodoInterface;
  @Input('isEditing') isEditingProps: boolean;
  @Output('setEiditingId') setEditingEvent: EventEmitter<string | null> = new EventEmitter();
  eidtingText: string = '';

  ngOnInit() {
    this.eidtingText = this.todoProps.text;
  }

  constructor(private todosService: TodosService) {

  }

  setTodoInEditMode(): void {    
    this.setEditingEvent.emit(this.todoProps.id);
  }

  removoTodo(): void {
    this.todosService.removeTodo(this.todoProps.id);
  }

  toggleTodo(): void {
   this.todosService.toggleTodo(this.todoProps.id);
    
  }

  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.eidtingText = value;
  }

  changeTodo(): void {
    this.todosService.changeTodo(this.todoProps.id, this.eidtingText);
    this.setEditingEvent.emit(null)
  }
}
