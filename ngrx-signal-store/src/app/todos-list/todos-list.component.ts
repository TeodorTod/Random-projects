import { Component, effect, inject, viewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatSuffix } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { TodosFilter, TodosStore } from '../store/todos.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todos-list',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSuffix, MatIconModule, MatButtonToggleModule, MatListModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  store = inject(TodosStore);

  filter = viewChild.required(MatButtonToggleGroup);

  constructor() {
    effect(() => {
      const filter = this.filter();
      filter.value = this.store.filter();
    }); 
  }

  async onAddTodo(inputElement: HTMLInputElement) {
    const title = inputElement.value.trim();
    if (title) {
      await this.store.addTodo(title);
      inputElement.value = '';
    }
  }

  async onDelete(id: string) {
    await this.store.deleteTodo(id);
  }

  async onTodoToggled(id: string, completed: boolean) {
    await this.store.updateTodo(id, completed);
  }

  onFilterTodos(event: MatButtonToggleChange) {
    const filter = event.value as TodosFilter;
    this.store.updateFilter(filter);
  }

}
