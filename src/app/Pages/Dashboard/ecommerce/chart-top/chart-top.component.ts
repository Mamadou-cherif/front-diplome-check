import { AfterViewInit, Component } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-chart-top',
    imports: [],
    templateUrl: './chart-top.component.html',
    styleUrl: './chart-top.component.scss'
})
export class ChartTopComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const options: any = {
      series: [{
        name: 'Orders',
        data: [20, 47, 40, 30, 50],
      }],
      chart: {
        height: 270,
        type: 'radar',
        // You can add more chart options here
      },
      dataLabels: {
        enabled: true
      },
      plotOptions: {
        radar: {
          size: 125,
          polygons: {
            strokeColors: '#e9e9e9',
            fill: {
              colors: ['#f8f8f8', '#fff']
            }
          }
        }
      },
      colors: ['#ffc700'],
      markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#ffc700',
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val;
          }
        }
      },
      xaxis: {
        categories: ['iPhone', 'Macbook', 'iPad', 'Airpods', 'iWatch']
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: function (val: any, i: any) {
            if (i % 2 === 0) {
              return val;
            } else {
              return '';
            }
          }
        }
      }
    };

    const chart = new ApexCharts(document.querySelector("#topCharts"), options);
    chart.render();
  }
}
