import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$!: Observable<any[]>;
  allProducts!: any[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.products$ = this.productService.getAllProducts()
    //   .pipe(
    //     map((response: any) => response.data) 
    //   );
    this.productService.getAllProducts().subscribe(res => {
      this.allProducts = res.data;
      console.log(this.allProducts);
      
    })
  }
}
