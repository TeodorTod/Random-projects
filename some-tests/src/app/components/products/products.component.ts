import { Component, OnDestroy, OnInit } from '@angular/core';
import { concatMap, delay, exhaustMap, from, interval, map, mergeMap, Observable, of, Subscription, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  ngOnInit(): void {
    const food = ['apple', 'orange', 'tomato', 'peppers'];

    const food$ = from(food);
    food$.pipe
      (switchMap((data) => {
        return this.getData(data)
      })
      )
      .subscribe((res) => {
        console.log(res);
        
      })
  }

  getData(message: any): Observable<string> {
    return of(message + 'opaa').pipe(delay(1000));
  }
}
