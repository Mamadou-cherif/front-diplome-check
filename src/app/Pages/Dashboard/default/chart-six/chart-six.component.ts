import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-chart-six',
    imports: [],
    templateUrl: './chart-six.component.html',
    styleUrl: './chart-six.component.scss'
})
export class ChartSixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const options = {
      series: [44, 55, 67],
      chart: {
        height: 320,
        type: "radialBar",
      },
      colors: ["#6a69f5", "#50cd89", "#323a46"],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function () {
                return 709;
              },
            },
          },
        },
      },
      labels: ["Desktop", "Mobile", "Tablet"],
    };

    const chart = new ApexCharts(document.querySelector("#chart6"), options);
    chart.render();
  }

}
