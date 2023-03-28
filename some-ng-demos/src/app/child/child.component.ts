import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() nameData: any;
  @Input() markData: any;
  @Input() objData: any;

  @Output() dataUpdateEvent = new EventEmitter<string>();

  listArr = [{
    name: "Gosho",
    mark: 'pesho'
  }];

  updateList(obj: any) {
    this.listArr.push(obj);
    return obj.name + " is added";
  }

  updateTite(title: any) {
    this.dataUpdateEvent.emit(title)

  }
}
