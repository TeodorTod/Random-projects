import { Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent implements OnInit {
  count!: number;

  constructor(
    private masterService: MasterService
  ) {

  }

  ngOnInit(): void {
    this.masterService.count.subscribe(res => {
      this.count = res;
    })
  }

  nextCount() {
    this.masterService.nextCount();
  }
}
