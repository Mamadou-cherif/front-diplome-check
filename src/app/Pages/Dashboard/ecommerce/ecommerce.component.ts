import { ChangeDetectorRef, Component } from '@angular/core';
import { ChartOneComponent } from '../default/chart-one/chart-one.component';
import { ChartTwoComponent } from '../default/chart-two/chart-two.component';
import { ChartThreeComponent } from '../default/chart-three/chart-three.component';
import { ChartFourComponent } from '../default/chart-four/chart-four.component';
import { ChartFiveComponent } from './chart-five/chart-five.component';
import { ChartSixComponent } from './chart-six/chart-six.component';
import { ChartTopComponent } from './chart-top/chart-top.component';

@Component({
    selector: 'app-ecommerce',
    imports: [
        ChartOneComponent,
        ChartTwoComponent,
        ChartThreeComponent,
        ChartFourComponent,
        ChartFiveComponent,
        ChartSixComponent,
        ChartTopComponent
    ],
    templateUrl: './ecommerce.component.html',
    styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {
  dropdown: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  toggleDropdown() {
    this.dropdown = !this.dropdown;
    this.cdr.detectChanges(); // Manually trigger change detection
  }
}
