import { Component, OnInit, computed, effect, inject, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  number: number = 123123;  
  numbers: number[] = [];

  get counter() {
    return this.number;
  }

  set counter(value: number) {
    this.number = value;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  add() {
    // this.numbers.push(1);
    this.numbers = [...this.numbers, 1];
  }

}
