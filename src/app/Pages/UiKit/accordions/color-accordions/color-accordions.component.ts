import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-color-accordions',
    imports: [CommonModule],
    templateUrl: './color-accordions.component.html',
    styleUrl: './color-accordions.component.scss'
})
export class ColorAccordionsComponent {
  current: number | null = 1;
  accordionItems = [1, 2, 3]; // Adjust as per your number of accordion items

  toggleAccordion(index: number) {
      this.current = this.current === index ? null : index;
  }
}
