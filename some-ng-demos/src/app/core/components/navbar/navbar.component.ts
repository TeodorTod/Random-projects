import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  hidden = false;
  badgeCount: number = 3;

  constructor() {
    setTimeout(() => {
      this.badgeCount++
    }, 5000)
  }


  toggleBadgeVisibility() {
    this.badgeCount = 0
  }



}
