import { Component, OnInit, inject, ChangeDetectionStrategy, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksStore } from './store/bookStore';
import { JsonPipe } from '@angular/common';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [BooksStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
  store = inject(BooksStore);

  constructor() {
    effect(() => {
      // 👇 The effect will be re-executed whenever the state changes.
      const state = getState(this.store);
      console.log('books state changed', state);
    });
  }

  ngOnInit(): void {
    console.log(this.store.books());
    
  }


}
