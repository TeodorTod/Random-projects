import { Component, computed, signal } from '@angular/core';
import { BehaviorSubject, combineLatest, tap, map, debounceTime } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  firstName = signal('Peter');
  lastName = signal('Parker');
  counter = signal(1);
  todoList = signal([1, 2, 3, 4, 5,]);

  signalCounter = 0;

  fullName = computed(() => {
    this.signalCounter++;
    return `${this.firstName()} ${this.lastName()}`;
  });

  isEven = computed(() => this.counter() % 2 == 0)

  changeName() {
    this.firstName.set('Signal Spider');
    this.lastName.set('Man');
    
    console.log(this.isEven());
    
  }
}
