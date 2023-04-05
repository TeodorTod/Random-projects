import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { filter, from, fromEvent, map, Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
 

   
    fromEvent<MouseEvent>(document, 'click')
    .pipe(
      filter(data => data.clientX > 300 && data.clientY > 300),
      map(data => `X: ${data.clientX}`)
      )
    .subscribe((data) => {
      console.log(data);
      
    })
  }

}
