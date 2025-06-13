import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpacingAccordionsComponent } from './spacing-accordions/spacing-accordions.component';
import { ColorAccordionsComponent } from './color-accordions/color-accordions.component';
import { ArrowAccordionComponent } from './arrow-accordion/arrow-accordion.component';

@Component({
    selector: 'app-accordions',
    imports: [CommonModule, SpacingAccordionsComponent, ColorAccordionsComponent, ArrowAccordionComponent],
    templateUrl: './accordions.component.html',
    styleUrl: './accordions.component.scss'
})
export class AccordionsComponent {
  current: number | null = 1; // Default active accordion item

  toggleAccordion(index: number) {
    this.current = this.current === index ? null : index;
  }
}
