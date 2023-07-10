import { Component, OnDestroy, OnInit } from '@angular/core';
import { concatMap, delay, exhaustMap, from, interval, map, mergeMap, Observable, of, Subscription, switchMap } from 'rxjs';

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
      (map((data) => {
        return this.getData(data)
      }
      ))
      .subscribe((res) => {
        res.subscribe((el) => console.log(el))
      })
  }

  getData(message: any): Observable<string> {
    return of(message + 'opaa');
  }
}
