import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private timePeriodSubject = new BehaviorSubject<string>('weeks'); // Default to weeks
  timePeriod$ = this.timePeriodSubject.asObservable();

  changeTimePeriod(timePeriod: string) {
    this.timePeriodSubject.next(timePeriod);
  }

  private toggleDatasetSubject = new Subject<number>();
  toggleDataset$ = this.toggleDatasetSubject.asObservable();

  toggleDataset(datasetIndex: number) {
    this.toggleDatasetSubject.next(datasetIndex);
  }
}
