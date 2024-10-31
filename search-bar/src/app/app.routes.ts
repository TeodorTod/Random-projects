import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { PageComponent } from './page/page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './auth.guard';
import { pageResolver } from './data.resolver';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'products',
        loadComponent: () =>
            import('./products/products.component').then((c) => c.ProductsComponent),
    },
    {
        path: 'settings',
        component: SettingsComponent,
        children: [{ path: 'profile', component: ProfileComponent }],
        canActivate: [authGuard]
    },
    { path: 'pages/:pageId', component: PageComponent },
    {
        path: 'old-pages/:pageId',
        redirectTo: (route) => {
            return `/pages/${route.params['pageId']}`;
        },
        resolve: {
            page: pageResolver
        }
    },
    { path: '**', component: NotFoundComponent },
];
