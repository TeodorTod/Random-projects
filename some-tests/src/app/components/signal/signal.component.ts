import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, distinctUntilChanged, map } from 'rxjs';



@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss']

})


export class SignalComponent {

  search = signal('')

  users = signal([
    { id: 1, name: 'Pesho' },
    { id: 2, name: 'Gosho' },
  ])


  logger = effect(() => {
    localStorage.setItem('searchString', this.search())
  })
  fileredUsers = computed(() => this.users().filter(u => u.name.startsWith(this.search())))

  setSearchString(e: Event) {
    this.search.set((e.target as HTMLInputElement).value);
    
  }

  addUser() {
    this.users.update(user => [...user, {id: 3, name: 'Misho'}])
  }

}
