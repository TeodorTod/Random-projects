import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ArticleInterface } from 'src/app/article.interface';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  http = inject(HttpClient);
  searchSig = signal<string>('');
  articles$ = toObservable(this.searchSig).pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((searchValue) =>
      this.http.get<ArticleInterface[]>(
        `http://localhost:3004/articles?title_like=${searchValue}`
      )
    )
  );
  articlesSig = toSignal(this.articles$);

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchSig.set(value);
  }
  
}
