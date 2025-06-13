import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-chart-two',
    imports: [],
    templateUrl: './chart-two.component.html',
    styleUrl: './chart-two.component.scss'
})
export class ChartTwoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const options = {
      series: [
        {
          data: [10, 82, 40, 65, 20, 89, 40, 20, 70, 98],
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

    const chart = new ApexCharts(document.querySelector('#chart2'), options);
    chart.render();
  }
}
