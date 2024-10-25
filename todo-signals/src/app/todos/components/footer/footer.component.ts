import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  todosService = inject(TodosService);
  filterSig = this.todosService.filterSig;
  filterEnum = FilterEnum;

  activeCount = computed(() => {
   const leftTodos = this.todosService.todoSig().filter((todo) => !todo.isCompleted)   
   return leftTodos.length;
  });

  noTodoClass = computed(() => this.todosService.todoSig().length === 0);
  itemsLeftText = computed(() => `item${this.activeCount() !== 1 ? 's' : ''} left`)

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
  }
}
