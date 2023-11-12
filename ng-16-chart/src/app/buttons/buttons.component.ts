import { Component } from '@angular/core';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  constructor(private chartService: ChartService) {}

  toggleDataset(datasetIndex: number) {
    this.chartService.toggleDataset(datasetIndex);
  }

  changeTimePeriod(timePeriod: string) {
    this.chartService.changeTimePeriod(timePeriod);
  }

}
