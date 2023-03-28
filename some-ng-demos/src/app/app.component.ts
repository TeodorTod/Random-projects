import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @ViewChild(ChildComponent) viewData !:ChildComponent

  count!: number;
  title = 'some-ng-demos';
  inputName: string = '';
  markName: string = '';
  inputObj = {
    name: '',
    mark: ''
  };
  response: any;

  constructor(private masterService: MasterService) {

  }

  ngOnInit(): void {
    this.masterService.count.subscribe(res => {
      this.count = res;
    })
  }

  nextCount() {
    this.masterService.nextCount()
  }


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
