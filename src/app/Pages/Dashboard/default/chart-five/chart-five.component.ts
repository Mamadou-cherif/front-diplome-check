import { AfterViewInit, Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-chart-five',
    imports: [],
    templateUrl: './chart-five.component.html',
    styleUrl: './chart-five.component.scss'
})
export class ChartFiveComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const userChart = {
      chart: {
        height: 300,
        type: "area",
        fontFamily: "Inter, sans-serif",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: "Current Week",
          data: [0, 1000, 5000, 10000, 8000, 11000, 15000],
        },
        {
          name: "Previous Week",
          data: [2000, 3000, 6000, 12000, 9000, 13000, 14000],
        },
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: "smooth",
        width: 3,
        lineCap: "square",
      },
      dropShadow: {
        enabled: false,
      },
      colors: ["#6a69f5", "#323a46"],
      markers: {
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 4,
            fillColor: "#6a69f5",
            strokeColor: "#fff",
            size: 6,
          },
          {
            seriesIndex: 1,
            dataPointIndex: 5,
            fillColor: "#323a46",
            strokeColor: "#fff",
            size: 6,
          },
        ],
      },
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: true,
        },
        labels: {
          offsetX: 0,
          offsetY: 5,
          style: {
            fontSize: "12px",
            cssClass: "apexcharts-xaxis-title",
          },
        },
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: (value: number) => {
            return value / 1000 + "M";
          },
          offsetX: -10,
          offsetY: 0,
          style: {
            fontSize: "12px",
            cssClass: "apexcharts-yaxis-title",
          },
        },
        opposite: false,
      },
      grid: {
        borderColor: "#e0e6ed",
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      legend: {
        show: false,
      },
      tooltip: {
        marker: {
          show: true,
        },
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0,
          opacityTo: 0,
          stops: [100, 100],
        },
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart5"), userChart);
    chart.render();
  }


}

