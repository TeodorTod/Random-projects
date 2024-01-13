import { Component, OnInit, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bhvSubject = new BehaviorSubject('123');

  ngOnInit() {
    this.bhvSubject.subscribe((res) => {
      console.log(res);
    })
    this.bhvSubject.next('hello world')
 }

}
