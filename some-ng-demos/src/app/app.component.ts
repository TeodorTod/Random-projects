import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'some-ng-demos';
  searchText: string = 'Onesdsd';
  currentItem = 'Television';
  animals: { id: number, img: string }[] = [
    {
      id: 1,
      img: 'https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg'
    },
    {
      id: 2,
      img: 'https://s.abcnews.com/images/Video/GTY_dog_day_jef_160826_16x9t_992.jpg'
    }
  ]

  onClick(container: HTMLElement) {
    console.log(container.children);
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    console.log('destroy');
    
  }

}
