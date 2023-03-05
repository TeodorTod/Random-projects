import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'user/:uuid', component: UserdetailComponent},
  {path: '**', redirectTo: 'users'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
