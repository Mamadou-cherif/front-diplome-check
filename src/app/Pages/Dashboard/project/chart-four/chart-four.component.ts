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
          name: 'Development',
          type: 'line',
          data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
        },
        {
          name: 'UX Design',
          type: 'line',
          data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
        },
        {
          name: 'Web Design',
          type: 'line',
          data: [54, 37, 52, 69, 45, 61, 43, 44, 61, 43, 55]
        }
      ],
      chart: {
        height: 310,
        type: 'line',
        toolbar: {
          show: false,
        }
      },
      grid: {
        padding: {
          top: -15,
          right: -2,
          bottom: -10,
        },
      },
      stroke: {
        curve: 'smooth',
        width: [2, 2, 2]
      },
      fill: {
        type: 'solid',
        opacity: [0.35, 1],
      },
      labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
      markers: {
        size: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y: number) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " Task";
            }
            return y;
          }
        }
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart5"), options);
    chart.render();
  }

}

