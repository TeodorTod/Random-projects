import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private activeusers$ = Observable<number>;
  private subscription: any;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Home Page');

    this.subscription = new Observable((observer) => {
      let timer: any
      const intervalTimer =  setInterval(() => {
        timer = setTimeout(() => {
          const activeUsers = Math.round(Math.random() * 100);
          console.log('next', activeUsers);

          observer.next(activeUsers)

        }, 2000);
      }, 4000)
      return () => {
        console.log('clean up timer');

        clearTimeout(timer);
        clearInterval(intervalTimer);
      }
    }).subscribe(res => {
      console.log(res)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
