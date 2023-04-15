import { DOCUMENT } from '@angular/common';
import { Component, Inject, Injectable } from '@angular/core';
import { Theme, ThemeService } from './core/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'su-modules-and-routing';

  constructor(@Inject(DOCUMENT) private document: Document, private themeService: ThemeService) {

    this.themeService.onThemeChanges.subscribe(() => {
      let themeIsDark = this.themeService.currentTheme === Theme.Dark;
      if (themeIsDark) {
        this.document.body.classList.remove('light-theme')
        this.document.body.classList.add('dark-theme');
      } else {
        this.document.body.classList.remove('dark-theme')
        this.document.body.classList.add('light-theme');
      }
    })

  }

}




export abstract class Engine {
}

@Injectable()
export class PetrolEngine extends Engine {
}

@Injectable()
export class DieselEngine extends Engine {
}
