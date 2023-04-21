import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {

  enteredText: string = '';

  constructor(private data: DataService) {

  }

  onClick() {
    this.data.raiseDataEmitter(this.enteredText)
    
  }
}
