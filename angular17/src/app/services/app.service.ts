import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  private categorySubject = new Subject();
  categorySubject$ = this.categorySubject.asObservable();
}
