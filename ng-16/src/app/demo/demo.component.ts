import { Component, computed, effect, signal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  quantity = signal(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);
  selectedVehicle = signal({id: 1, name: 'Tora-Bora', price: 20000});
  vehicles = signal<[]>([]);

  exPrice = computed(() => this.selectedVehicle().price * this.quantity())


  constructor() {
    this.quantity.update((el) => el * 2)
  }

  qtyEff = effect(() => console.log('latest quntity', this.quantity()))

  onQuantitySelected(qty: number) {
    this.quantity.set(qty)

    // this.quantity.set(5);
    // this.quantity.set(42);
  }



}
