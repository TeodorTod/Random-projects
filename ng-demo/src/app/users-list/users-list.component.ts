import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from '../types/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() users: UserInterface[];
  @Output() removeUser = new EventEmitter();
  @Output() myNewUser = new EventEmitter();

  newUserName: string = '';

  setNewUserName(userName: string): void {
    this.newUserName = userName
  };

  addUser(): void {
    this.myNewUser.emit(this.newUserName);
    this.newUserName = ''
  }
 
}
