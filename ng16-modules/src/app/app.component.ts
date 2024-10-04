import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { catchError, filter, finalize, from, map, mergeMap, Observable, of, take, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  source = from([1, 2, 3, 4, 5]);
  doubled = this.source.pipe(filter(value => value % 2 !== 0));

  constructor() {
    this.doubled.subscribe(result => console.log(result));
  }
}
