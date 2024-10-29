import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesService } from './articles.service';
import { ArticleInterface } from './article.interface';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  searchValue: string = '';
  articles: ArticleInterface[] = [];
  articlesService = inject(ArticlesService);
  fb = inject(FormBuilder);
  searchForm = this.fb.nonNullable.group({
    searchValue: ''
  })


  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.articlesService.getArticles(this.searchValue).subscribe((articles) => {
      this.articles = articles;
    });
  }

  onSearchSubmit() {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }
}
