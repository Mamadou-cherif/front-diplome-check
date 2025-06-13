import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-withoutline-tab',
    imports: [CommonModule],
    templateUrl: './withoutline-tab.component.html',
    styleUrl: './withoutline-tab.component.scss'
})
export class WithoutlineTabComponent {
  activeTab: string = 'profile';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
