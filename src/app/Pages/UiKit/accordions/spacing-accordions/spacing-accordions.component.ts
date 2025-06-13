import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-spacing-accordions',
    imports: [CommonModule],
    templateUrl: './spacing-accordions.component.html',
    styleUrl: './spacing-accordions.component.scss'
})
export class SpacingAccordionsComponent {
  current: number | null = 1; // Default active accordion item

  toggleAccordion(index: number) {
    this.current = this.current === index ? null : index;
  }
}
