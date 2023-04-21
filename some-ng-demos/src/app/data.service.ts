import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataEmitter = new EventEmitter<string>();

  raiseDataEmitter(data: string) {
    this.dataEmitter.emit(data);
  }

  constructor() { }
}
