import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-profile',
    imports: [CommonModule],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  badges = [
    { text: 'Ui/Ux Designer', color: 'border-danger text-danger' },
    { text: 'Photoshop', color: 'border-purple text-purple' },
    { text: 'Figma', color: 'border-success text-success' },
    { text: 'Illustrator', color: 'border-dark dark:border-darkborder text-dark dark:text-muted' },
    { text: '+', color: 'border-warning text-warning' },
  ];
}
