import { NgModule } from '@angular/core';

import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [TodosComponent, HeaderComponent, TodoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TodosModule {}
