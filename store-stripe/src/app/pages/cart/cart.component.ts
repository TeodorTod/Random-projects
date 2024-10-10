import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  apiKey = environment.stripeApiKey;
  cart: Cart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'Snickers',
        price: 120,
        quantity: 2,
        id: 123,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'T-shirt',
        price: 110,
        quantity: 3,
        id: 12233,
      },
    ]
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = ['product', 'name', 'price', 'quantity', 'total', 'action'];

  constructor(private cartService: CartService, private http: HttpClient) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });    
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items)
  }

  clearAll(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onCheckout(): void {
    this.http.post('http://localhost:4242/checkout', {
      items: this.cart.items
    }).subscribe(async(res: any) => {
      let stripe = await loadStripe(this.apiKey);
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    });
  }

}
