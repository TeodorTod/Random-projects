import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home/home.component').then(m => HomeComponent) }
];
