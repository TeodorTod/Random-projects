import { Component } from '@angular/core';
import { UserInterface } from '../types/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  newUserName: string = ''
  users: UserInterface[] = [
    {
      id: '1',
      name: 'Jack',
      age: 21
    },
    {
      id: '2',
      name: 'John',
      age: 25
    },

    {
      id: '3',
      name: 'Sam',
      age: 29
    }
  ]

  removeUser(id: string): void {
    this.users = this.users.filter(user => user.id !== id)
  }

  setNewUserName(userName: string): void {
    this.newUserName = userName
  }

  addUser(): void {
    const uniqueId = Math.random().toString(16)
    const newUser: UserInterface = {
      id: uniqueId,
      name: this.newUserName,
      age: 30
    }
    this.users.push(newUser)
    this.newUserName = ''
  }
}
