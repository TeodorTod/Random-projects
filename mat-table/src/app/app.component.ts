import { Component, OnInit, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { BehaviorSubject, Observable, fromEvent, interval, map, shareReplay, take, tap, throttleTime, } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentItem = '123';

  obs = interval(500)
    .pipe(
        take(5),
        tap(i => console.log("obs value "+ i)),
        shareReplay()
    );

    items = ['item1', 'item2', 'item3', 'item4'];

    addItem(newItem: string) {
      this.items.push(newItem);
    }
  

  constructor() { }

  ngOnInit() {
    this.obs.subscribe(value => console.log("observer 1 received " + value));

    this.obs.subscribe(value => console.log("observer 2 received " + value));
  }




}
