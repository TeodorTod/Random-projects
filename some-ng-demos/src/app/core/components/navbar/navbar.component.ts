import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  hidden = false;
  badgeCount: number = 3;


  



  constructor() {
   setInterval(() => {
    this.badgeCount++
   }, 2000)
  }


  toggleBadgeVisibility() {
    this.badgeCount = 0
  }



}
