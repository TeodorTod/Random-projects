import { Component, computed, signal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  quntity = signal(1)

  constructor() {
    this.quntity.set(2);
    console.log(this.quntity());
    this.quntity.update((el) => el * 5);
    console.log(this.quntity());
    setTimeout(() => {
      this.quntity.set(10)
    }, 5000)
  }

  price = computed(() => {
  this.quntity() * 5
  })

  showSignal() {
    console.log(this.quntity());
    
  }



}
