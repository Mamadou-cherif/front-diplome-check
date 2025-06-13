import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    imports: [CommonModule],
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {
  averageRating: number = 0;
  monthlyInstalls: number = 0;
  weeklyDownloads: number = 0;
  totalDownloads: number = 0;

  ngOnInit(): void {
    this.startCounter();
  }

  startCounter(): void {
    // Example logic, adjust according to your specific needs
    this.startCount(this.averageRating, 4.92, 900, (current: number) => this.averageRating = current);
    this.startCount(this.monthlyInstalls, 260, 900, (current: number) => this.monthlyInstalls = Math.round(current));
    this.startCount(this.weeklyDownloads, 40, 900, (current: number) => this.weeklyDownloads = Math.round(current));
    this.startCount(this.totalDownloads, 4.9, 900, (current: number) => this.totalDownloads = current);
  }

  startCount(start: number, target: number, time: number, callback: (current: number) => void): void {
    const interval = Math.max(time / (target - start), 5);
    const step = (target - start) / (time / interval);
    let current = start;

    const handle = setInterval(() => {
      if (current < target) {
        current += step;
        callback(current);
      } else {
        clearInterval(handle);
        current = target;
        callback(current);
      }
    }, interval);
  }
}
