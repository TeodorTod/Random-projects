import { NgModule } from '@angular/core';
import { TodosComponent } from './components/todos/todos.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [
  {
    path: '', component: TodosComponent
  }
]

@NgModule({
  declarations: [
    TodosComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TodosModule { }
