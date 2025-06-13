import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-typography',
    imports: [CommonModule],
    templateUrl: './typography.component.html',
    styleUrl: './typography.component.scss'
})
export class TypographyComponent {
  textExamples = [
    { type: 'Headings', examples: ['Sliced heading 1', 'Sliced heading 2', 'Sliced heading 3', 'Sliced heading 4', 'Sliced heading 5', 'Sliced heading 6'] },
    { type: 'Font Weight', examples: ['Sliced - TailwindCSS Admin & Dashboard', 'Sliced - TailwindCSS Admin & Dashboard', 'Sliced - TailwindCSS Admin & Dashboard', 'Sliced - TailwindCSS Admin & Dashboard', 'Sliced - TailwindCSS Admin & Dashboard'] },
    { type: 'Text Alignment', examples: ['Left aligned text', 'Center aligned text', 'Right aligned text', 'Justified text'] },
    { type: 'Text Color', examples: ['Text in purple', 'Text in info color', 'Text in success color', 'Text in warning color', 'Text in danger color', 'Text in black', 'Text in muted color', 'Text in light color'] },
    { type: 'Text Decoration', examples: ['Underlined text', 'Overlined text', 'Line-through text', 'Double underline', 'Wavy underline', 'Dotted underline', 'Dashed underline'] },
    { type: 'Text Transform', examples: ['Normal case', 'UPPERCASE', 'lowercase', 'Capitalize'] },
    { type: 'Text Indent', examples: ['Indented text'] },
    { type: 'Text Truncate', examples: ['Truncated text'] }
  ];
}
