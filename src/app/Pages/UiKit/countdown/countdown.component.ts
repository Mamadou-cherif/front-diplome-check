import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-countdown',
    imports: [],
    templateUrl: './countdown.component.html',
    styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  interval: any;

  ngOnInit(): void {
    this.initCountdown();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  initCountdown(): void {
    const endDate = new Date(); // Replace with your end date
    endDate.setDate(endDate.getDate() + 11); // Example: Countdown to 1 day from now

    this.calculateTimeLeft(endDate); // Initial calculation

    this.interval = setInterval(() => {
      this.calculateTimeLeft(endDate);
    }, 1000); // Update every second
  }

  calculateTimeLeft(endDate: Date): void {
    let difference = endDate.getTime() - new Date().getTime();

    if (difference > 0) {
      this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      this.minutes = Math.floor((difference / 1000 / 60) % 60);
      this.seconds = Math.floor((difference / 1000) % 60);
    } else {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      clearInterval(this.interval);
    }
  }
}
