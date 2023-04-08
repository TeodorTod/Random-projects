import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { HighlightComponent } from './highlight/highlight.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectivesDemoComponent,
    HighlightComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
