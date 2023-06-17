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

  signalCounter = 0;

  fullName = computed(() => {
    this.signalCounter++;
    console.log('signal name change');
    return `${this.firstName()} ${this.lastName()}`;
  });

  changeName() {
    this.firstName.set('Signal Spider');
    this.lastName.set('Man');
  }
}
