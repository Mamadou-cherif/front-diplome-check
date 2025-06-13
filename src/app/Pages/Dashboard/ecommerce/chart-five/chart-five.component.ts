import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-chart-five',
    imports: [],
    templateUrl: './chart-five.component.html',
    styleUrl: './chart-five.component.scss'
})
export class ChartFiveComponent implements OnInit {

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const options = {
      series: [
        { name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
        { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
        { name: 'Free Cash Flow', data: [35, 41, 36, 26, 45, 48, 52, 53, 41] }
      ],
      chart: {
        type: 'bar',
        height: 270
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      colors: ["#6f5ef1", "#f1416c", "#50cd89"],
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val: any) { // Explicitly define the type of 'val'
            return "$ " + val + " thousands";
          }
        }
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart5"), options);
    chart.render();
  }
}
