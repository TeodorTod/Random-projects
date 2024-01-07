import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit{
  subjectData: string = '';
  behaviourSubject: string = '';

  constructor(private sharedDataService: SharedDataService) {
   
  }

  ngOnInit(): void {
    this.sharedDataService.getSubjectData().subscribe((el) => {
      this.subjectData = el
    });

    this.sharedDataService.getBehaviourSubject().subscribe((el) => {
      this.behaviourSubject = el
    });
  }
}
