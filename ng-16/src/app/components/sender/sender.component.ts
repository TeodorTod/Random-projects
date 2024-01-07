import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {
  inputData = '';

  constructor(private sharedDataService: SharedDataService) {

  }

  sendData() {
    this.sharedDataService.sendData(this.inputData);
    console.log(this.inputData);
    
  }
}
