import { Component, computed, effect, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Subject, combineLatest, distinctUntilChanged, interval, map, of, take, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';



@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss']

})


export class SignalComponent implements OnInit, OnDestroy {

  search = signal('');
  data$ = interval(1050);
  unsubscribe = new Subject();
  

  constructor() {
    
  }

  ngOnInit(): void {
    this.data$.pipe(takeUntil(this.unsubscribe)).subscribe((data) => {
      console.log(data);
    })
  }



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

  ngOnDestroy(): void {
    // this.data$.
    this.unsubscribe.next('');
    this.unsubscribe.complete();
  }

}
