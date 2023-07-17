import { Component, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Subject, concatMap, debounceTime, delay, from, map, mergeMap, of, switchMap } from 'rxjs';

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
  inputValue = ''


  constructor() {
    
  }

  
}
