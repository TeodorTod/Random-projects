import { Injectable, Signal, computed, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInterface } from '../user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // private users$ = new BehaviorSubject<UserInterface[]>([]);
  private usersSignal = signal<UserInterface[]>([])

  getUsers(): Signal<UserInterface[]> {
    return computed(this.usersSignal)
  }

  addUser(user: UserInterface) {
    this.usersSignal.update(users => [...users, user])
    // const updatedUsers = [...this.users$.getValue(), user]
    // this.users$.next(updatedUsers);
  }

  removeUser(userId: string) {
    const updatedUsers = this.usersSignal().filter((user) => user.id !== userId);
    this.usersSignal.set(updatedUsers);
    // this.users$.next(updatedUsers);

  }
}
