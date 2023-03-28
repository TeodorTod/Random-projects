import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(ChildComponent) viewData !:ChildComponent

  title = 'some-ng-demos';
  inputName: string = '';
  markName: string = '';
  inputObj = {
    name: '',
    mark: ''
  };
  response: any;


  transferData(name: any, mark: any) {
    this.inputName = name;
    this.markName = mark;
    this.inputObj.name = name;
    this.inputObj.mark = mark;
    this.response = this.viewData.updateList(this.inputObj);  
  }

  updateTitle(title: any) {
    this.title = title
  }
 
}
