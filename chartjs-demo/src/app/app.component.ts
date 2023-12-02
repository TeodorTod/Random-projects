import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset, ChartData } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Define the chart data for '1d', '1w', and '1m' as hardcoded data
  private dayData = [420, 422, 421, 425, 430];
  private weekData = [400, 410, 415, 420, 425, 430, 435];
  private monthData = [380, 390, 400, 410, 420, 430, 440, 450, 460, 470];

  // Initial chart data
  public lineChartData: ChartData<'line', number[], string> = {
    labels: this.generateLabelsforDay(this.dayData.length) || this.generateLabelsforWeek(this.dayData.length) || this.generateLabelsforMonth(this.dayData.length), // Generate labels for the initial '1d' data
    datasets: [
      { data: this.dayData, label: 'Tesla Inc (TSLA)' }
    ]
  };

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  public lineChartType: ChartType = 'line';

  // Function to change data for different time periods
  changeTimePeriod(period: '1d' | '1w' | '1m') {
    let newData: number[] = [];

    switch (period) {
      case '1d':
        newData = this.dayData;
        this.lineChartData = {
          ...this.lineChartData,
          labels: this.generateLabelsforDay(newData.length),
          datasets: [
            { ...this.lineChartData.datasets[0], data: newData }
          ]
        };
        break;
      case '1w':
        newData = this.weekData;
        this.lineChartData = {
          ...this.lineChartData,
          labels: this.generateLabelsforWeek(newData.length),
          datasets: [
            { ...this.lineChartData.datasets[0], data: newData }
          ]
        };
        break;
      case '1m':
        newData = this.monthData;
        this.lineChartData = {
          ...this.lineChartData,
          labels: this.generateLabelsforMonth(newData.length),
          datasets: [
            { ...this.lineChartData.datasets[0], data: newData }
          ]
        };
        break;
    }

   
  }

  private generateLabelsforDay(length: number): string[] {

    return Array.from({ length }, (_, i) => `${(i + 1) * 4}h`);
  }


  private generateLabelsforWeek(length: number): string[] {

    return Array.from({ length }, (_, i) => `Sep ${i + 1}`);
  }

  private generateLabelsforMonth(length: number): string[] {

    return Array.from({ length }, (_, i) => `Sep ${(i + 1) * 3}`);
  }
}
