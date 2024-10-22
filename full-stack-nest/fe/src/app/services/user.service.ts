import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  localstorage_key = 'threads_user';

  createUser(name: string) {
    return this.http.post<User>(`${environment.apiBaseUrl}/users`, {
      name
    });
  }

  saveUserToStorage(user: User) {
    localStorage.setItem(this.localstorage_key, JSON.stringify(user));
  };

  getUserFromStorage() {
    const user = localStorage.getItem(this.localstorage_key);
    return user ? JSON.parse(user) : null;
  }
}
