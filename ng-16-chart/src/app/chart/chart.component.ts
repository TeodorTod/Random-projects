import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  template: '<canvas #chart></canvas>',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('chart') chartRef!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;
  datasetVisibility: boolean[] = [true, true, true]; // Initially, all datasets are visible

  ngAfterViewInit() {
    this.createChart();
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
              label: 'Dataset 1',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: true,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: gradient,
              tension: 0.1
            },
            {
              label: 'Dataset 2',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: true,
              borderColor: 'rgb(192, 75, 75)',
              backgroundColor: gradient,
              tension: 0.1
            },
            {
              label: 'Dataset 3',
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
    this.chart.getDatasetMeta(datasetIndex).hidden = !this.chart.getDatasetMeta(datasetIndex).hidden;
    this.chart.update();
  }
}