import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-chart-four',
    imports: [],
    templateUrl: './chart-four.component.html',
    styleUrl: './chart-four.component.scss'
})
export class ChartFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const options = {
      series: [
        {
          data: [10, 40, 40, 10, 20, 89, 70, 20, 70, 98],
        },
      ],
      chart: {
        height: 60,
        type: 'line',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: false,
        },
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      colors: ['#f1416c'],
      grid: {
        padding: {
          top: 5,
          bottom: 5,
          left: 5,
          right: 5,
        },
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: () => {
              return '';
            },
          },
        },
      },
    };

    const chart = new ApexCharts(document.querySelector('#chart4'), options);
    chart.render();
  }

}
