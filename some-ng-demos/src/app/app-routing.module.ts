import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerProfileComponentComponent } from './customer/customer-profile-component/customer-profile-component.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OurHomeComponent } from './pages/our-home/our-home.component';

const routes: Routes = [
  { path: 'home', component: OurHomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: CustomerProfileComponentComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
