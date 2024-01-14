import { Component, OnInit, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { BehaviorSubject, Observable, fromEvent, interval, take, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  obs = interval(1000).pipe(take(5));
  constructor() { }

  ngOnInit() {
   this.obs.subscribe((res) => {
    console.log(res);
    
   })
  }

  
}
