import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() nameData: any;
  @Input() markData: any;
  @Input() objData: any;

  listArr = [{
    name: "Gosho",
    mark: 'pesho'
  }];

  updateList(obj: any) {
    this.listArr.push(obj);
    return obj.name + " is added";
  }
}
