import { Component, OnInit, signal } from '@angular/core';
import { BehaviorSubject, Subject, delay, from, map, mergeMap, of, switchMap } from 'rxjs';

interface UserInterface {
  id: string,
  name: string
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {

  foo$ = from([1,2,3,4,5,6]);

  constructor() {
    // this.foo$.subscribe(console.log)
    const example = (operator: (source: any) => any) => () => {
      from([1, 2, 3, 4, 5, 6])
        .pipe(
          operator((x: any) => of(x).pipe(delay(500)))
        )
        .subscribe({
          next: console.log,
          error: () => {},
          complete: () => console.log(`${operator.name} completed`)
        });
    }
    example(mergeMap)()
    this.foo$.pipe(switchMap((x: any) => of(x).pipe(delay(1500))))
    .subscribe(console.log)
  }

}
