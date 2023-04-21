import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // dataEmitter = new EventEmitter<string>();

  mySubject = new Subject<string>();

  // raiseDataEmitter(data: string) {
  //   this.dataEmitter.emit(data);
  // }

  subjEmmit(data: string) {
    this.mySubject.next(data);
  }

  constructor() { }
}
