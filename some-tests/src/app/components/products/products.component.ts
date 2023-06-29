import { Component, OnDestroy, OnInit } from '@angular/core';
import { concatMap, delay, exhaustMap, from, interval, map, mergeMap, of, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {


  constructor() {
    const example = from([1, 2, 3, 4, 5])
        .pipe(exhaustMap((x: any) => of(x).pipe(delay(500))))
        .subscribe(console.log);
    
  }

}
