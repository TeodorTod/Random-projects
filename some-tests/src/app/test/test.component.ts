import { Component, inject } from '@angular/core';
import {UsersService} from '../services/users.service'
import { FormBuilder } from '@angular/forms';
import { UserInterface } from '../user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  usersService = inject(UsersService);
  fb = inject(FormBuilder);
  addForm = this.fb.nonNullable.group({
    name: ''
  })

  users$ = this.usersService.getUsers();

  onUserAdd() {
    const user: UserInterface = {
      id: Math.random().toString(),
      name: this.addForm.getRawValue().name
    };
    this.usersService.addUser(user)
    this.addForm.reset();
  }

  removeUser(userId: string) {
    this.usersService.removeUser(userId)
  } 

}
