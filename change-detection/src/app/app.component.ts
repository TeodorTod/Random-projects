import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'JS Frontend'
  title = 'change-detection';
  topicName = 'Change-detection in Angular';
  isVisible = true;
  createdDate = new Date();

  constructor (private cdr: ChangeDetectorRef) {
    console.log(this.cdr);
    
    setTimeout(() => {
      this.topicName = 'Zone Js in Angular';
      console.log(`Topic name changes to ${this.topicName}`);
      this.cdr.detectChanges();
    }, 3000)
  }

  getInfo() {
    return '1M Views'
  }
}
