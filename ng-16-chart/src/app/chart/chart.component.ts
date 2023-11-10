import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ScatterDataPoint, TooltipItem, TooltipModel, registerables } from 'chart.js';
import 'chartjs-plugin-dragdata';

// Register each component individually
registerables.forEach(registerable => Chart.register(registerable));

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'] // Ensure this path is correct
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('chart') chartRef!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;
  previousPointIndex: number | null = null;

  ngAfterViewInit() {
    const context = this.chartRef.nativeElement.getContext('2d');
    if (context) {
      const gradient = this.getGradient(context);
      const chartConfig: ChartConfiguration<'line', ScatterDataPoint[], string> = {
        type: 'line',
        data: {
          labels: Array(9).fill('').map((_, i) => `Label${i + 1}`),
          datasets: [{
            label: "TSLA",
            data: this.generateInitialData(),
            backgroundColor: gradient,
            borderColor: '#228B22', // Standard green for the line
            pointRadius: 2,
            fill: true,

          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            tooltip: {
              enabled: true,
              mode: 'index',
              intersect: false,
              callbacks: {
                label: function(context: TooltipItem<'line'>) {
                  // Your code here
                }
              }
            },
            dragData: {
              onDragStart: (event: ChartEvent, element: any) => this.onDragStart(element),
              onDrag: (event: ChartEvent, datasetIndex: number, index: number, value: ScatterDataPoint) => this.onDrag(event, datasetIndex, index, value),
              onDragEnd: (event: ChartEvent, datasetIndex: number, index: number, value: ScatterDataPoint) => this.onDragEnd(event, datasetIndex, index, value),
            }
          } as any
        }
      };
      this.chart = new Chart(context, chartConfig);
    } else {
      console.error('2D context not supported in this browser.');
    }
  }

  getGradient(context: CanvasRenderingContext2D): CanvasGradient {
    let gradient = context.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#98FB98'); // Light green for the top
    gradient.addColorStop(1, '#006400'); // Dark green for the bottom
    return gradient;
  }

  generateInitialData(): ScatterDataPoint[] {
    return Array(9).fill(0).map((_, i) => ({ x: i, y: Math.random() * 100 }));
  }

  onDragStart(element: any) {
    this.previousPointIndex = element.index;
  }

  onDrag(event: ChartEvent, datasetIndex: number, index: number, value: ScatterDataPoint) {
    // Handle dragging logic if needed
  }

  onDragEnd(event: ChartEvent, datasetIndex: number, index: number, value: ScatterDataPoint) {
    if (this.previousPointIndex !== null) {
      const previousValue = this.chart.data.datasets[datasetIndex].data[this.previousPointIndex] as ScatterDataPoint;
      const difference = value.y - previousValue.y;
      console.log(`Difference between point ${this.previousPointIndex + 1} and ${index + 1}: ${difference}`);
    }
    this.previousPointIndex = null;
  }
}
