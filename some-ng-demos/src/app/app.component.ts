import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'some-ng-demos';
  inputName: string = '';
  markName: string = '';
  inputObj = {
    name: '',
    mark: ''
  }


  transferData(name: any, mark: any) {
    this.inputName = name;
    this.markName = mark;
    this.inputObj.name = name;
    this.inputObj.mark = mark;    
  }

 
}
