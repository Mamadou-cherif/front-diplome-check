import {
  ChangeDetectorRef,
  Component
} from '@angular/core';
import { ChartOneComponent } from './chart-one/chart-one.component';
import { ChartTwoComponent } from './chart-two/chart-two.component';
import { ChartThreeComponent } from './chart-three/chart-three.component';
import { ChartFourComponent } from './chart-four/chart-four.component';
import { ChartFiveComponent } from './chart-five/chart-five.component';
import { ChartSixComponent } from './chart-six/chart-six.component';

@Component({
    selector: 'app-default',
    imports: [
        ChartOneComponent,
        ChartTwoComponent,
        ChartThreeComponent,
        ChartFourComponent,
        ChartFiveComponent,
        ChartSixComponent,
    ],
    templateUrl: './default.component.html',
    styleUrl: './default.component.scss'
})
export class DefaultComponent {
  dropdown: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  toggleDropdown() {
    this.dropdown = !this.dropdown;
    this.cdr.detectChanges(); 
  }
}
