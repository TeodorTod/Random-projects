import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { BehaviorSubject, Subject, interval } from 'rxjs';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'JS Frontend'
  title = 'change-detection';
  topicName = 'Change-detection in Angular';
  isVisible = true;
  createdDate = new Date();
  subject = new BehaviorSubject(0);
  subscription: any;

  constructor() {
    this.subscription = interval(1000).subscribe(() => {
      const currentValue = this.subject.getValue();
      this.subject.next(currentValue + 1);
      console.log(this.subject.value);
    });
    setTimeout(() => {
      this.subscription.pipe(
        takeUntilDestroyed()
      )
    }, 5000)
  }



  getInfo() {
    return '1M Views'
  }

  changeTopic() {
    this.topicName = 'New Topic Name'
  }
}
