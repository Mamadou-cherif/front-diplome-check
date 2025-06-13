import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-bar-icon-tab',
    imports: [CommonModule],
    templateUrl: './bar-icon-tab.component.html',
    styleUrl: './bar-icon-tab.component.scss'
})
export class BarIconTabComponent {
  activeBarWithIcon: string = 'profile'; // Default active tab

  setActiveTab(tab: string) {
    this.activeBarWithIcon = tab;
  }
}
