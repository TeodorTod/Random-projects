
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, filter, find, from, map, of } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements OnInit {


  // myObservable = new Observable((observer) => {
  //   console.log('start');
  //   setTimeout(() => {observer.next('1')}, 1000);
  //   setTimeout(() => {observer.next('2')}, 2000);
  //   setTimeout(() => {observer.next('3')}, 3000);
  //   // setTimeout(() => {observer.error(new Error('Something went wrong'))}, 3000);
  //   setTimeout(() => {observer.next('4')}, 4000);
  //   setTimeout(() => {observer.next('5')}, 5000);
  //   setTimeout(() => {observer.complete()}, 6000);
  // });

  arr1 = [1, 2, 3, 4, 5];
  arr2 = ['A', 'B', 'C', 'D', 'E'];


  // myObservable = of(this.arr1, this.arr2);

  myObservable = from(this.arr1);

  transformedObs = this.myObservable.pipe(map((val) => {
    return val * 5
  }), filter((val) => {
    return val >= 15
  }), find((val) => {
    return val % 5 == 0
  }));



  constructor(private data: DataService) {

  }

  ngOnInit(): void {
    //   this.transformedObs.subscribe(res => {
    //     console.log(res)
    //   }, (error) => {
    //     alert(error.message)
    //   }, () => {
    //     alert('Observable has completed!')
    //   })

    // this.transformedObs.subscribe({
    //   next: (v) => console.log(v),
    //   error: (e) => alert(e.message),
    //   complete: () => alert('Observable has completed!')
    // })
  }




}
