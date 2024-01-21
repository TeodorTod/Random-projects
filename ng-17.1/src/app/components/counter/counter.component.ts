import { Component, Input, OnChanges, SimpleChanges, effect, input } from '@angular/core';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent { 
 value = input(0, {
  alias: 'counter',
  transform: (val: number) => val * 100
 });

 constructor() {

  effect(() => console.log(`New value change to ${this.value()}`)
  )
 }

}
