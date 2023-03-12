import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  // testUser = ['jack', 'john', 'sam']
  users = [
    {
      id: '1',
      name: 'Misho',
      age: '20'
    },
    {
      id: '2',
      name: 'Pesho',
      age: '29'
    },
    {
      id: '3',
      name: 'Gosho',
      age: '42'
    }
  ]
}
