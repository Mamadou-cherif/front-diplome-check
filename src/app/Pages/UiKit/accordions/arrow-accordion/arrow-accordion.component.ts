import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-arrow-accordion',
    imports: [CommonModule],
    templateUrl: './arrow-accordion.component.html',
    styleUrl: './arrow-accordion.component.scss'
})
export class ArrowAccordionComponent {
  current: number | null = 1;
  accordionItems = [1, 2, 3]; // Adjust as per your number of accordion items

  toggleAccordion(index: number) {
      this.current = this.current === index ? null : index;
  }
}
