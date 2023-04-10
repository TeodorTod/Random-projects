import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { HighlightComponent } from './highlight/highlight.component';
import { TemplatesFormDemoComponent } from './templates-form-demo/templates-form-demo.component';
import { ReactiveFormsDemoComponent } from './reactive-forms-demo/reactive-forms-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectivesDemoComponent,
    HighlightComponent,
    TemplatesFormDemoComponent,
    ReactiveFormsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
