import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [{
      product: 'https://via.placeholder.com/150',
      name: 'Snickers',
      price: 120,
      quantity: 20,
      id: 123,
    }]
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = ['product', 'name', 'quantity', 'total', 'action'];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

}
