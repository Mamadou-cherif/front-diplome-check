import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-with-icons',
    imports: [CommonModule],
    templateUrl: './with-icons.component.html',
    styleUrl: './with-icons.component.scss'
})
export class WithIconsComponent {
  activeTabWithIcon: string = 'profile'; // Default active tab

  setActiveTab(tabName: string): void {
      this.activeTabWithIcon = tabName;
  }
}
