import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerProfileComponentComponent } from './customer/customer-profile-component/customer-profile-component.component';
import { AboutComponent } from './pages/about/about.component';
import { OurHomeComponent } from './pages/our-home/our-home.component';

const routes: Routes = [
  { path: 'home', component: OurHomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: CustomerProfileComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
