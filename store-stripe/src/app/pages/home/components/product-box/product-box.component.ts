import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html' 
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
