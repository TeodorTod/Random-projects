import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count = signal(0);
  colors = signal(['green', 'blue']);
  length = signal(20);
  breath = signal(40);

  area = computed(() => this.length() * this.breath());

  onIncrement() {
    this.count.update((prev) =>  prev += 1);
    this.colors.update((colors) => [...colors, 'opapa'])
    // console.log(this.colors());
    
  }

  constructor() {
    effect(() => {
      console.log('Effect due to change', this.colors());
      
    })
  }
}
