import { Component, input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent implements OnInit {
  pageId = input.required<string>();
  limit = input.required<string>();
  page = input.required<{ pageId: string; name: string }>();


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   this.pageId = params.get('pageId')
    // })
  }

}
