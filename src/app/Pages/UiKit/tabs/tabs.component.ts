import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WithoutlineTabComponent } from './withoutline-tab/withoutline-tab.component';
import { WithIconsComponent } from './with-icons/with-icons.component';
import { PillsTabComponent } from './pills-tab/pills-tab.component';
import { BarTabComponent } from './bar-tab/bar-tab.component';
import { BarIconTabComponent } from './bar-icon-tab/bar-icon-tab.component';

@Component({
    selector: 'app-tabs',
    imports: [CommonModule, WithoutlineTabComponent, WithIconsComponent, PillsTabComponent, BarTabComponent, BarIconTabComponent],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  activeTab: string = 'profile';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
