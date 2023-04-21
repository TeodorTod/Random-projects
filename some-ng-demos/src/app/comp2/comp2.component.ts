import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
  inputText: string = '';

  constructor(private data: DataService) {

  }

  ngOnInit(): void {
    this.data.mySubject.subscribe(res => {
      this.inputText = res;
    })
  }

}
