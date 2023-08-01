import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../types/users.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {

  }

  fetchUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('http://localhost:3004/users')
  }
}
