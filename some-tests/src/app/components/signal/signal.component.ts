import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, distinctUntilChanged, map } from 'rxjs';

const users = [
  { id: 1, name: 'Spiderman' },
  { id: 2, name: 'Hulk' },
  { id: 3, name: 'Wolverine' },
  { id: 4, name: 'Cyclops' },
  { id: 5, name: 'Venom' },
];

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss']

})


export class SignalComponent {

  todos = signal([{title: 'Learn signals', done: false}]);

  constructor() {
    this.todos.mutate(value => {
      value[0]['title'] = 'Hello'
    })    
    console.log(this.todos);
  }

// Signals are getter functions - calling them reads their value.


}
