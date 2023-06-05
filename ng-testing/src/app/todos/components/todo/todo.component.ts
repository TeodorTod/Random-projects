import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService } from '../../services/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Input('todo') todoProps!: TodoInterface

  filter$: Observable<string>

  constructor(private todosService: TodosService) {
    this.filter$ = this.todosService.filter$;
  }

  checkRender(): boolean {
    console.log('check render');
    return true;
  }

  changeText() {
    this.todoProps.text = 'changed from inside'
  }

  changeFilter() {
    this.todosService.filter$.next('active')
  }
}
