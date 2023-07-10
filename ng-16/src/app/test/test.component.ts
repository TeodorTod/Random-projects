import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  counter = signal(0);
  numbers = signal([1, 2, 3, 4, 5, 6]);
  sumOfNums = computed(() => 
    this.numbers().reduce((sum, i) => sum+i) 
  )

  constructor() {
    effect(() => {
      if (this.sumOfNums() > 40) {
        alert('exxed 40')
      }
    })
  }

  increment() {
    this.counter.update((el) => el + 1);
  }

  reset() {
    this.counter.set(0);
  }

  mutate() {
    this.numbers.mutate((el) => {
      el.push(10)
    })
  }
}
