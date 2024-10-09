import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { log } from 'console';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html' 
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode: boolean = false;
  @Input() product: Product | undefined 
  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
    
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
