import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { test } from './interfaces/test.interface';
import { filter, map, of } from 'rxjs';
import { fail } from 'assert';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular17';

  users = [
    { id: 1, name: 'John', isActive: true },
    { id: 2, name: 'Pencho', isActive: true },
    { id: 3, name: 'Stancho', isActive: false },
  ];

  users$ = of(this.users);
  usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)));
  filteredusers$ = this.users$.pipe(filter((users) => users.every(user => user.isActive)))

  ngOnInit(): void {
    // this.users$.subscribe(users => {
    //   console.log(users);
    // })
  }

}
