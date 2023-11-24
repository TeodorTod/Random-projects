import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = signal(0);
  numbers = signal([2, 4, 6])
  sumOfNumbers = computed(() => this.numbers().map((el) => el * 2))

  increment() {
    this.counter.update((el) => el + 1)
  }

  constructor() {
    effect(() => {
      if (this.counter() > 10) {
        alert('Over 10')
      }
    })
  }


}
