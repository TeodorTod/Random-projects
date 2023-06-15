import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  data$ = interval(1000)
  // dataSubscription: Subscription | undefined;

  ngOnInit(): void {
    // this.dataSubscription = this.data$.subscribe((data) => {
    //   console.log('data');
      
    // })
  }

  ngOnDestroy(): void {
    // this.dataSubscription?.unsubscribe();
  }
}
