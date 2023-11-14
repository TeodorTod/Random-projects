import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private subscription = new Subscription(); // Initialize subscription
  timePeriod: string = '';  // Declare timePeriod
  dataRange: { min: number, max: number } = { min: 0, max: 0 }; // Declare dataRange

  constructor(public chartService: ChartService) { }

  ngOnInit() {
    this.subscription.add(this.chartService.timePeriod$.subscribe(timePeriod => {
      this.timePeriod = timePeriod;
    }));
    this.subscription.add(this.chartService.chartDataRange$.subscribe(dataRange => {
      this.dataRange = dataRange;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Clean up subscription
  }
}
