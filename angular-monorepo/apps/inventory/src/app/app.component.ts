import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ProductsComponent} from '@angular-monorepo/products';

@Component({
  imports: [ProductsComponent , RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'inventory';
}
