import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { SignalComponent } from './components/signal/signal.component';
import { TestComponent } from './test/test.component';
import { ExampleComponent } from './components/example/example.component';
import { MapsComponent } from './components/maps/maps.component';
import { TerminalComponent } from './components/terminal/terminal.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'signal', component: SignalComponent },
  { path: 'test', component: TestComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'terminal', component: TerminalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
