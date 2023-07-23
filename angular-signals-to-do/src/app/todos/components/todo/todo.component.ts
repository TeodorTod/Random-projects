import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, inject } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnChanges{
  @Input({required: true}) todo!: TodoInterface;
  @Input({required: true}) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();
  @ViewChild('textInput') textInput?: ElementRef

  todoService = inject(TodosService);
  eidtingText: string = '';

  ngOnInit(): void {
    this.eidtingText = this.todo.text;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isEditing'].currentValue) {
      setTimeout(() => {
        this.textInput?.nativeElement.focus();
      }, 0)
    }
  }

  changeText(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.eidtingText = value;
  }

  changeTodo() {
    this.todoService.changeTodo(this.todo.id, this.eidtingText);
    this.setEditingId.emit(null)
  }

  setTodoInEditMode() {
    this.setEditingId.emit(this.todo.id);
  }

  removeTodo() {
    this.todoService.removeTodo(this.todo.id)
  }

  toggleTodo() {
    this.todoService.toggleTodo(this.todo.id)
  }
}
