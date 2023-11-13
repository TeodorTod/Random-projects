import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartService } from '../services/chart.service';
import { Subscription } from 'rxjs';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  template: '<canvas #chart></canvas>',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chart') chartRef!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;
  datasetVisibility: boolean[] = [true, true, true];
  private subscription: Subscription = new Subscription();

  dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  weekLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
  monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  dayData = [
    [12, 15, 10, 13, 17, 14, 18], 
    [13, 25, 14, 21, 27, 11, 8], 
    [15, 25, 20, 23, 27, 34, 17]  
  ];

  weekData = [
    [50, 40, 35, 75, 60],
    [25, 35, 80, 90, 65], 
    [10, 110, 14, 115, 80] 
  ];

  monthData = [
    [65, 59, 80, 81, 56, 55, 40, 66, 59, 80, 81, 56],
    [28, 48, 40, 19, 86, 27, 90, 29, 48, 40, 19, 86],
    [18, 48, 77, 9, 100, 27, 40, 17, 48, 77, 9, 100] 
  ];
  

  constructor(public chartService: ChartService) {

  }

  ngAfterViewInit() {
    this.createChart();
    this.subscription.add(
      this.chartService.timePeriod$.subscribe(timePeriod => {
        this.changeTimePeriod(timePeriod);
      })
    );
  }

  createChart() {
    const context = this.chartRef.nativeElement.getContext('2d');
    if (context) {
      const gradient = this.createGreenGradient(context);

      this.chart = new Chart(context, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'TSLA',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: true,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: gradient,
              tension: 0.1
            },
            {
              label: 'AMZN',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: true,
              borderColor: 'rgb(192, 75, 75)',
              backgroundColor: gradient,
              tension: 0.1
            },
            {
              label: 'GOGL',
              data: [18, 48, 77, 9, 100, 27, 40],
              fill: true,
              borderColor: 'rgb(75, 75, 192)',
              backgroundColor: gradient,
              tension: 0.1
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              mode: 'index',
              intersect: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  createGreenGradient(context: CanvasRenderingContext2D) {
    const gradient = context.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#98FB98'); // Light green at the top
    gradient.addColorStop(1, '#006400'); // Dark green at the bottom
    return gradient;
  }
  toggleDataset(datasetIndex: number) {
    this.datasetVisibility[datasetIndex] = !this.datasetVisibility[datasetIndex];
    this.chart.getDatasetMeta(datasetIndex).hidden = !this.datasetVisibility[datasetIndex];
    this.chart.update();
  }

  changeTimePeriod(timePeriod: string) {
    switch (timePeriod) {
      case 'days':
        this.updateChartData(this.dayLabels, this.dayData);
        break;
      case 'weeks':
        this.updateChartData(this.weekLabels, this.weekData);
        break;
      case 'months':
        this.updateChartData(this.monthLabels, this.monthData);
        break;
      default:
        // Handle default case or throw an error
    }
  }

  updateChartData(labels: string[], data: number[][]) {
    this.chart.data.labels = labels;
    this.chart.data.datasets.forEach((dataset, index) => {
      dataset.data = data[index];
    });
    this.chart.update();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}