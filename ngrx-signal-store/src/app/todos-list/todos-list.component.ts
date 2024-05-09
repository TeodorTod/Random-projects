import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatSuffix } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { TodosStore } from '../store/todos.store';

@Component({
  selector: 'todos-list',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSuffix, MatIconModule, MatButtonToggleModule, MatListModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  store = inject(TodosStore);

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


}
