import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {

  }

  outputs: {
    time: string,
    message: string
  }[] = [];

  ngOnInit(): void {
    this.createObservable()
  }

  createObservable() {
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.error('wrong');
      subscriber.next(3);
      subscriber.complete();
    });


    observable.subscribe({
      next: (value: any) => {
        console.log(value);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

}
