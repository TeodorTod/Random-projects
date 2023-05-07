import { Component } from '@angular/core';
import { Subscription, interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  hidden = false;
  badgeCount: number = 3;


  test = interval(2000)
  .pipe(takeWhile(() => !this.hidden))
  .subscribe(() => {
    this.badgeCount++
  });



  constructor() {
 
  }


  toggleBadgeVisibility() {
    this.badgeCount = 0
  }



}
