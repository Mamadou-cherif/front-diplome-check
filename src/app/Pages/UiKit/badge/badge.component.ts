import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-badge',
    imports: [CommonModule],
    templateUrl: './badge.component.html',
    styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  badgeSets = {
    default: [
      { text: 'Primary', color: 'bg-purple text-white' },
      { text: 'Info', color: 'bg-info text-white' },
      { text: 'Success', color: 'bg-success text-white' },
      { text: 'Warning', color: 'bg-warning text-white' },
      { text: 'Danger', color: 'bg-danger text-white' },
      { text: 'Black', color: 'bg-black text-white' },
      { text: 'Secondary', color: 'bg-muted text-white dark:bg-darkmuted' },
      { text: 'Light', color: 'bg-light text-black' },
    ],
    rounded: [
      { text: 'Primary', color: 'bg-purple text-white' },
      { text: 'Info', color: 'bg-info text-white' },
      { text: 'Success', color: 'bg-success text-white' },
      { text: 'Warning', color: 'bg-warning text-white' },
      { text: 'Danger', color: 'bg-danger text-white' },
      { text: 'Black', color: 'bg-black text-white' },
      { text: 'Secondary', color: 'bg-muted text-white dark:bg-darkmuted' },
      { text: 'Light', color: 'bg-light text-black' },
    ],
    lighten: [
      { text: 'Primary', color: 'bg-purple/20 text-purple' },
      { text: 'Info', color: 'bg-info/20 text-info' },
      { text: 'Success', color: 'bg-success/20 text-success' },
      { text: 'Warning', color: 'bg-warning/20 text-warning' },
      { text: 'Danger', color: 'bg-danger/20 text-danger' },
      { text: 'Black', color: 'bg-black/20 text-black' },
      { text: 'Secondary', color: 'bg-muted/20 text-muted dark:bg-darkmuted' },
      { text: 'Light', color: 'bg-light/20 text-black' },
    ],
    lightenRounded: [
      { text: 'Primary', color: 'bg-purple/20 text-purple' },
      { text: 'Info', color: 'bg-info/20 text-info' },
      { text: 'Success', color: 'bg-success/20 text-success' },
      { text: 'Warning', color: 'bg-warning/20 text-warning' },
      { text: 'Danger', color: 'bg-danger/20 text-danger' },
      { text: 'Black', color: 'bg-black/20 text-black' },
      { text: 'Secondary', color: 'bg-muted/20 text-muted dark:bg-darkmuted' },
      { text: 'Light', color: 'bg-light/20 text-black' },
    ],
    glow: [
      { text: 'Primary', color: 'bg-purple text-white shadow-purple/50' },
      { text: 'Info', color: 'shadow-info/50 bg-info text-white' },
      { text: 'Success', color: 'shadow-success/50 bg-success text-white' },
      { text: 'Warning', color: 'shadow-warning/50 bg-warning text-white' },
      { text: 'Danger', color: 'shadow-danger/50 bg-danger text-white' },
      { text: 'Black', color: 'shadow-black/50 bg-black text-white' },
      {
        text: 'Secondary',
        color:
          'shadow-muted/50 bg-muted text-white dark:bg-darkmuted dark:shadow-darkmuted/50',
      },
      { text: 'Light', color: 'shadow-light/50 bg-light text-black' },
    ],
    glowRounded: [
      { text: 'Primary', color: 'bg-purple text-white shadow-purple/50' },
      { text: 'Info', color: 'shadow-info/50 bg-info text-white' },
      { text: 'Success', color: 'shadow-success/50 bg-success text-white' },
      { text: 'Warning', color: 'shadow-warning/50 bg-warning text-white' },
      { text: 'Danger', color: 'shadow-danger/50 bg-danger text-white' },
      { text: 'Black', color: 'shadow-black/50 bg-black text-white' },
      {
        text: 'Secondary',
        color:
          'shadow-muted/50 bg-muted text-white dark:bg-darkmuted dark:shadow-darkmuted/50',
      },
      { text: 'Light', color: 'shadow-light/50 bg-light text-black' },
    ],
    outline: [
      { text: 'Primary', color: 'border-purple text-purple' },
      { text: 'Info', color: 'border-info text-info' },
      { text: 'Success', color: 'border-success text-success' },
      { text: 'Warning', color: 'border-warning text-warning' },
      { text: 'Danger', color: 'border-danger text-danger' },
      {
        text: 'Black',
        color: 'border-black text-black dark:text-slate-100 dark:border-darkborder',
      },
      {
        text: 'Secondary',
        color:
          'border-muted text-muted dark:border-darktext-darkmuted',
      },
      { text: 'Light', color: 'border-light text-black dark:text-slate-100' },
    ],
    outlineRounded: [
      { text: 'Primary', color: 'border-purple text-purple' },
      { text: 'Info', color: 'border-info text-info' },
      { text: 'Success', color: 'border-success text-success' },
      { text: 'Warning', color: 'border-warning text-warning' },
      { text: 'Danger', color: 'border-danger text-danger' },
      {
        text: 'Black',
        color: 'border-black text-black dark:text-slate-100 dark:border-darkborder',
      },
      {
        text: 'Secondary',
        color:
          'border-muted text-muted dark:border-darktext-darkmuted',
      },
      { text: 'Light', color: 'border-light text-black dark:text-slate-100' },
    ],
    dots: [
      { text: 'Primary', color: 'text-purple' },
      { text: 'Info', color: 'text-info' },
      { text: 'Success', color: 'text-success' },
      { text: 'Warning', color: 'text-warning' },
      { text: 'Danger', color: 'text-danger' },
      { text: 'Black', color: 'text-black dark:text-slate-100' },
      {
        text: 'Secondary',
        color: 'text-muted dark:text-slate-100 dark:bg-darkmuted',
      },
      { text: 'Light', color: 'text-black' },
    ],
    dotSizes: [
      { size: 'text-[10px]', padding: 'px-1.5 py-0.5', badgeSize: 'w-1 h-1' },
      { size: 'text-xs', padding: 'px-2 py-1', badgeSize: 'w-1.5 h-1.5' },
    ],
  };
}
