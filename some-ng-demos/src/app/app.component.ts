
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  

  myObservable = new Observable((observer) => {
    console.log('start');
    setTimeout(() => {observer.next('1')}, 1000);
    setTimeout(() => {observer.next('2')}, 2000);
    setTimeout(() => {observer.next('3')}, 3000);
    // setTimeout(() => {observer.error(new Error('Something went wrong'))}, 3000);
    setTimeout(() => {observer.next('4')}, 4000);
    setTimeout(() => {observer.next('5')}, 5000);
    setTimeout(() => {observer.complete()}, 6000);
    
 
  });

  constructor() {

  }

  ngOnInit(): void {
    this.myObservable.subscribe(res => {
      console.log(res)
    }, (error) => {
      alert(error.message)
    }, () => {
      alert('Observable has completed!')
    })
  }

 


}
