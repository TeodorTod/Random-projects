import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ChildComponent } from './child/child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { CustomerModule } from './customer/customer.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AboutComponent } from './pages/about/about.component';
import { OurHomeComponent } from './pages/our-home/our-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoItemComponent,
    ChildComponent,
    SecondChildComponent,
    AboutComponent,
    OurHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomerModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
