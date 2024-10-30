import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClickOutsideDirective } from './clickOutside.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClickOutsideDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMenuOpened = signal<boolean>(false);


  toggleMenu(): void {
    this.isMenuOpened.set(!this.isMenuOpened());
  };

  clickedOutside(): void {
    this.isMenuOpened.set(false);
  }
}
