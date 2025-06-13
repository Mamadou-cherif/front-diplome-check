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
    const options = {
      series: [
        {
          data: [0, 82, 60, 65, 0, 10, 80, 20, 70, 98],
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
      colors: ['#50cd89'],
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

    const chart = new ApexCharts(document.querySelector('#chart3'), options);
    chart.render();
  }

}

