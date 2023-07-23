import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  todoService = inject(TodosService);
  editingId: string | null = null;

  visibleTodos = computed(() => {
    const todos = this.todoService.todosSig();
    const filter = this.todoService.filterSignal();

    if (filter === FilterEnum.active) {
      return todos.filter(todo => !todo.isCompleted);
    } else if (filter === FilterEnum.completed) {
      return todos.filter(todo => todo.isCompleted);
    }

    return todos
  });

  setEditingId(editingId: string | null) {
    this.editingId = editingId;
  }

  noTodosClass = computed(() => this.todoService.todosSig().length === 0);

  isAllTodosSelected = computed(() =>
  this.todoService.todosSig().every((todo) => todo.isCompleted)
);


toggleAllTodos(event: Event): void {
  const target = event.target as HTMLInputElement;
  this.todoService.toggleAll(target.checked);
}

}
