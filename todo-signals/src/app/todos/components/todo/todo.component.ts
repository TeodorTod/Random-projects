import { Component, ElementRef, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit, OnChanges{
  @Input({ required: true }) todo!: TodoInterface;
  @Input({ required: true }) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();
  todosService = inject(TodosService);

  @ViewChild('textInput') textInput?: ElementRef;

  editingText: string = '';

  ngOnInit(): void {
    this.editingText = this.todo.text;
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isEditing'].currentValue) {
      setTimeout(() => {
        this.textInput?.nativeElement.focus();
      }, 0);
    }
  }

  changeText(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  };

  changeTodo(): void {
    this.todosService.changeTodo(this.todo.id, this.editingText);
    this.setEditingId.emit(null);
    // this.todosService.todoSig().map((todo) => {
    //   if (todo.id === this.todo.id) {
    //     todo.text = this.editingText 
    //   }
    // });
  };

  setTodoInEditMode(): void {
    this.setEditingId.emit(this.todo.id);
  };

  removeTodo(): void {
    this.todosService.removeTodo(this.todo.id);
  };

  toggleTodo(): void {
    this.todosService.toggleTodo(this.todo.id);
  }
}
