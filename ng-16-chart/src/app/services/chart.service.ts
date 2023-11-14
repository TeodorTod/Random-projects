import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private timePeriodSubject = new BehaviorSubject<string>('weeks');
  timePeriod$ = this.timePeriodSubject.asObservable();

  private toggleDatasetSubject = new Subject<number>();
  toggleDataset$ = this.toggleDatasetSubject.asObservable();

  private chartDataRangeSubject = new BehaviorSubject<{ min: number, max: number }>({ min: 0, max: 0 });
  chartDataRange$ = this.chartDataRangeSubject.asObservable();

  changeTimePeriod(timePeriod: string) {
    this.timePeriodSubject.next(timePeriod);
  }

  toggleDataset(datasetIndex: number) {
    this.toggleDatasetSubject.next(datasetIndex);
  }

  updateChartDataRange(data: number[][]) {
    const flatData = data.flat();
    const min = Math.min(...flatData);
    const max = Math.max(...flatData);
    this.chartDataRangeSubject.next({ min, max });
  }
}
