import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class MasterService implements OnInit{
  count = new BehaviorSubject(1);
  counter = 1;

  listArr = [{
    name: "Gosho",
    mark: 'pesho'
  }];

  constructor() { }

  ngOnInit(): void {
   
  }

  nextCount() {
    this.count.next(++ this.counter)
  }

  getData() {
    return this.listArr;
  }

  saveData(input: any) {
    this.listArr.push(input);
  }
}
