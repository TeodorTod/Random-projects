import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { SignalComponent } from './components/signal/signal.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'signal', component: SignalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
