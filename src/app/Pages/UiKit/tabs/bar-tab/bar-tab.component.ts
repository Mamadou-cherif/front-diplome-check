import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-bar-tab',
    imports: [CommonModule],
    templateUrl: './bar-tab.component.html',
    styleUrl: './bar-tab.component.scss'
})
export class BarTabComponent {
  activeTab: string = 'profile'; // Default active tab
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
