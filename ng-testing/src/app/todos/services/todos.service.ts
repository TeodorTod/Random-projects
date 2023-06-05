import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoInterface } from '../types/todo.interface';

@Injectable({
  providedIn: 'root'
})

export class TodosService {
  filter$ = new BehaviorSubject('all');
}
