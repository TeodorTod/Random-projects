import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/api/products/products.service';
import { ProductModel } from '../services/api/models/product.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  param: any;
  private productService = inject(ProductsService);

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.queryParams['guest']
    this.productService.getAllProductsWithLimit().subscribe({
      next: (data: ProductModel[]) => {
        console.log(data);
      }
    })
  }

}
