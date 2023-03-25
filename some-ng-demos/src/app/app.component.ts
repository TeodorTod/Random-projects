import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'some-ng-demos';
  inputName: string = '';

  transferData(name: any) {
    this.inputName = name;    
  }

}
