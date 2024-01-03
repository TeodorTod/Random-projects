import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app/app.routes";
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';

bootstrapApplication(AppComponent, {providers: [provideRouter(appRoutes), provideStore(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode(), autoPause: true, trace: false, traceLimit: 75 })]})