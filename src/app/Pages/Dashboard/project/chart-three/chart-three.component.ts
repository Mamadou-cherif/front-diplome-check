import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-chart-three',
    imports: [],
    templateUrl: './chart-three.component.html',
    styleUrl: './chart-three.component.scss'
})
export class ChartThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      this.renderChart();
  }

  renderChart() {
    var options = {
      series: [
        {
          data: [20, 10, 40, 40, 10, 89, 70, 20, 70, 98, 89, 20, 10],
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

    var chart = new ApexCharts(document.querySelector("#chart4"), options);
    chart.render();
  }
}

