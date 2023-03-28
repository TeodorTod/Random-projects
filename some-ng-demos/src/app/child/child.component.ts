import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{
  @Input() nameData: any;
  @Input() markData: any;
  @Input() objData: any;

  @Output() dataUpdateEvent = new EventEmitter<string>();

  count!: number;
  listArr: any;

  constructor(private masterService: MasterService
    ) {
    this.listArr = this.masterService.getData()
  }

  ngOnInit(): void {
    this.masterService.count.subscribe(res => {
      this.count = res;
    })
  }

  updateList(obj: any) {
    this.masterService.saveData(obj);
    return obj.name + " is added";
  }

  updateTite(title: any) {
    this.dataUpdateEvent.emit(title)

  }

  nextCount() {
    this.masterService.nextCount();
  }
}
