import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-chart-six',
    imports: [],
    templateUrl: './chart-six.component.html',
    styleUrl: './chart-six.component.scss'
})
export class ChartSixComponent implements OnInit {

  @ViewChild('chart6', { static: true }) chart6!: ElementRef;

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const options: any = {
      series: [44, 55, 67],
      chart: {
        height: 320,
        type: "donut",
      },
      colors: ["#6a69f5", "#50cd89", "#323a46"],
      legend: {
        position: 'bottom'
      },
      labels: ["Offline", "Online", "Other"],
    };

    const chart = new ApexCharts(this.chart6.nativeElement, options);
    chart.render();
  }

}
