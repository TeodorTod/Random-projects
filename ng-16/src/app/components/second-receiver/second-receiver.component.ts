import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-second-receiver',
  templateUrl: './second-receiver.component.html',
  styleUrls: ['./second-receiver.component.scss']
})
export class SecondReceiverComponent  {
  subjectData: string = '';
  behaviourSubject: string = '';
  subscribed: boolean = false;

  constructor(private sharedDataService: SharedDataService) {
   
  }

  subscribeData() {
    this.sharedDataService.getSubjectData().subscribe((el) => {
      this.subjectData = el
    });

    this.sharedDataService.getBehaviourSubject().subscribe((el) => {
      this.behaviourSubject = el
    });
    this.subscribed = true;
  }
}
