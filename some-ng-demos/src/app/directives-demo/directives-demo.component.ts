import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.scss']
})
export class DirectivesDemoComponent {
  bigFont: boolean = true;
  isShown: boolean = true;

  changeFont() {
    this.bigFont = !this.bigFont;
  }

  onChange() {
    this.isShown = !this.isShown
  }

}
