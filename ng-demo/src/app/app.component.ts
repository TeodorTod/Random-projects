import { Component, OnInit } from '@angular/core';
import { UserInterface } from './types/user.interface';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'ng-demo1';
  users: UserInterface[] = [];
  constructor (private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/users').subscribe((users: UserInterface[]) => {
      console.log(users);
      this.users = users;
    })
  }

  removeUser(id: string): void {
    this.users = this.users.filter(user => user.id !== id)
  };



  addUser(name: string): void {
    const uniqueId = Math.random().toString(16)
    const newUser: UserInterface = {
      id: uniqueId,
      name,
      age: 30
    }
    this.users.push(newUser)
  }
}
