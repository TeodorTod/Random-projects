import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  subjectData = new Subject<string>();
  behaviourSubject = new BehaviorSubject<string>('initial value');

  sendData(data: string) {
    this.subjectData.next(data);
    this.behaviourSubject.next(data);
  }

  getSubjectData() {
    return this.subjectData.asObservable();
  }

  getBehaviourSubject() {
    return this.behaviourSubject.asObservable();
  }
}
