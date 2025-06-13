import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-pills-tab',
    imports: [CommonModule],
    templateUrl: './pills-tab.component.html',
    styleUrl: './pills-tab.component.scss'
})
export class PillsTabComponent {
  activepillstabs: string = 'profile'; // Default active tab

  setActiveTab(tabName: string): void {
    this.activepillstabs = tabName;
  }
}
