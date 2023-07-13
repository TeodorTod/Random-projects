import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInterface } from '../user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users$ = new BehaviorSubject<UserInterface[]>([]);

  getUsers(): Observable<UserInterface[]> {
    return this.users$.asObservable();
  }

  addUser(user: UserInterface) {
    const updatedUsers = [...this.users$.getValue(), user]
    this.users$.next(updatedUsers);
  }

  removeUser(userId: string) {
    const updatedUsers = this.users$
      .getValue()
      .filter((user) => user.id !== userId)
    this.users$.next(updatedUsers);
  }
}
