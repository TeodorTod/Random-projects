import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { SignalComponent } from './components/signal/signal.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    ProductsComponent,
    SignalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
