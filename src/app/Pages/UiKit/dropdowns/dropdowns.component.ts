import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-dropdowns',
    imports: [CommonModule],
    templateUrl: './dropdowns.component.html',
    styleUrl: './dropdowns.component.scss'
})
export class DropdownsComponent {
  buttons = [
    { label: 'Primary', styles: 'bg-purple border-purple text-white hover:bg-purple/[0.85] hover:border-purple/[0.85]', class: '', dropdownOpen: false },
    { label: 'Info', styles: 'bg-info border-info text-white hover:bg-info/[0.85] hover:border-info/[0.85]', class: '', dropdownOpen: false },
    { label: 'Success', styles: 'bg-success border-success text-white hover:bg-success/[0.85] hover:border-success/[0.85]', class: '', dropdownOpen: false },
    { label: 'Warning', styles: 'bg-warning border-warning text-white hover:bg-warning/[0.85] hover:border-warning/[0.85]', class: '', dropdownOpen: false },
    { label: 'Danger', styles: 'bg-danger border-danger text-white hover:bg-danger/[0.85] hover:border-danger/[0.85]', class: '', dropdownOpen: false },
    { label: 'Black', styles: 'bg-black border-black text-white hover:bg-black/[0.85] hover:border-black/[0.85]', class: '', dropdownOpen: false },
    { label: 'Secondary', styles: 'bg-muted border-muted text-white hover:bg-muted/[0.85] hover:border-muted/[0.85] dark:bg-darkmuted dark:border-darkmuted dark:hover:bg-darkmuted/90 dark:hover:border-darkmuted/90', class: '', dropdownOpen: false },
    { label: 'Light', styles: 'bg-light border-light text-black hover:bg-light/[0.85] hover:border-light/[0.85]', class: '', dropdownOpen: false }
  ];

  roundedButtons = [
    { label: 'Primary', styles: 'bg-purple border-purple text-white hover:bg-purple/[0.85] hover:border-purple/[0.85]', class: '', dropdownOpen: false },
    { label: 'Info', styles: 'bg-info border-info text-white hover:bg-info/[0.85] hover:border-info/[0.85]', class: '', dropdownOpen: false },
    { label: 'Success', styles: 'bg-success border-success text-white hover:bg-success/[0.85] hover:border-success/[0.85]', class: '', dropdownOpen: false },
    { label: 'Warning', styles: 'bg-warning border-warning text-white hover:bg-warning/[0.85] hover:border-warning/[0.85]', class: '', dropdownOpen: false },
    { label: 'Danger', styles: 'bg-danger border-danger text-white hover:bg-danger/[0.85] hover:border-danger/[0.85]', class: '', dropdownOpen: false },
    { label: 'Black', styles: 'bg-black border-black text-white hover:bg-black/[0.85] hover:border-black/[0.85]', class: '', dropdownOpen: false },
    { label: 'Secondary', styles: 'bg-muted border-muted text-white hover:bg-muted/[0.85] hover:border-muted/[0.85] dark:bg-darkmuted dark:border-darkmuted dark:hover:bg-darkmuted/90 dark:hover:border-darkmuted/90', class: '', dropdownOpen: false },
    { label: 'Light', styles: 'bg-light border-light text-black hover:bg-light/[0.85] hover:border-light/[0.85]', class: '', dropdownOpen: false }
  ];

  outlineButtons = [
    { label: 'Primary', styles: 'text-purple border-purple hover:text-white hover:bg-purple', class: '', dropdownOpen: false },
    { label: 'Info', styles: 'text-info border-info hover:text-white hover:bg-info', class: '', dropdownOpen: false },
    { label: 'Success', styles: 'text-success border-success hover:text-white hover:bg-success', class: '', dropdownOpen: false },
    { label: 'Warning', styles: 'text-warning border-warning hover:text-white hover:bg-warning', class: '', dropdownOpen: false },
    { label: 'Danger', styles: 'text-danger border-danger hover:text-white hover:bg-danger', class: '', dropdownOpen: false },
    { label: 'Black', styles: 'text-black border-black btn hover:text-white hover:bg-black dark:text-slate-100 dark:hover:text-white dark:border-darkborder dark:hover:border-black', class: '', dropdownOpen: false },
    { label: 'Secondary', styles: 'text-muted border-muted hover:text-white hover:bg-muted dark:text-darkmuted dark:border-darkmuted dark:hover:text-white', class: '', dropdownOpen: false },
    { label: 'Light', styles: 'text-black btn border-light hover:text-black hover:bg-light dark:text-slate-100 dark:hover:text-black', class: '', dropdownOpen: false }
  ];

  roundedOutlineButtons = [
    { label: 'Primary', styles: 'text-purple border-purple hover:text-white hover:bg-purple', class: '', dropdownOpen: false },
    { label: 'Info', styles: 'text-info border-info hover:text-white hover:bg-info', class: '', dropdownOpen: false },
    { label: 'Success', styles: 'text-success border-success hover:text-white hover:bg-success', class: '', dropdownOpen: false },
    { label: 'Warning', styles: 'text-warning border-warning hover:text-white hover:bg-warning', class: '', dropdownOpen: false },
    { label: 'Danger', styles: 'text-danger border-danger hover:text-white hover:bg-danger', class: '', dropdownOpen: false },
    { label: 'Black', styles: 'text-black border-black btn hover:text-white hover:bg-black dark:text-slate-100 dark:hover:text-white dark:border-darkborder dark:hover:border-black', class: '', dropdownOpen: false },
    { label: 'Secondary', styles: 'text-muted border-muted hover:text-white hover:bg-muted dark:text-darkmuted dark:border-darkmuted dark:hover:text-white', class: '', dropdownOpen: false },
    { label: 'Light', styles: 'text-black btn border-light hover:text-black hover:bg-light dark:text-slate-100 dark:hover:text-black', class: '', dropdownOpen: false }
  ];

  dropdownButtons = [
    { label: 'Dropdown Menu', styles: 'bg-purple border-purple text-white hover:bg-purple/[0.85] hover:border-purple/[0.85]', class: '', dropdownOpen: false },
    { label: 'Dropdown Menu', styles: 'bg-black border-black text-white hover:bg-black/[0.85] hover:border-black/[0.85]', class: '', dropdownOpen: false },
  ];

  splitButtons = [
    { label: 'Primary', styles: 'bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85]', class: '', dropdownOpen: false },
    { label: 'Primary', styles: 'bg-success border border-success rounded-md text-white transition-all duration-300 hover:bg-success/[0.85] hover:border-success/[0.85]', class: '', dropdownOpen: false },
    { label: 'Primary', styles: 'bg-black border border-black rounded-md text-white transition-all duration-300 hover:bg-black/[0.85] hover:border-black/[0.85]', class: '', dropdownOpen: false },
    { label: 'Primary', styles: 'bg-light border border-light rounded-md text-black transition-all duration-300 hover:bg-light/[0.85] hover:border-light/[0.85]', class: '', dropdownOpen: false },
  ];

  iconButtons = [
    { label: 'Primary', styles: 'bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85]', class: '', icon: 'M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z', dropdownOpen: false },
    { label: 'Primary', styles: 'bg-success border border-success rounded-md text-white transition-all duration-300 hover:bg-success/[0.85] hover:border-success/[0.85]', icon: 'M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17Z', dropdownOpen: false },
    { label: 'Primary', styles: 'bg-black border border-black rounded-md text-white transition-all duration-300 hover:bg-black/[0.85] hover:border-black/[0.85]', icon: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z', dropdownOpen: false },
    { label: 'Primary', styles: 'bg-light border border-light rounded-md text-black transition-all duration-300 hover:bg-light/[0.85] hover:border-light/[0.85]', icon: 'M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z', dropdownOpen: false },
  ];

  iconDropdownButtons = [
    { label: 'Primary', styles: 'bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85]', class: '', icon: 'M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z', dropdownOpen: false },
    { label: 'Primary', styles: 'btn py-2 px-5 text-[15px] bg-success border-success text-white hover:bg-success/[0.85] hover:border-success/[0.85] flex items-center justify-center', icon: 'M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17Z', dropdownOpen: false },
    { label: 'Primary', styles: 'btn py-1.5 px-4 text-sm bg-black border-black text-white hover:bg-black/[0.85] hover:border-black/[0.85] flex items-center justify-center', icon: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z', dropdownOpen: false },
    { label: 'Primary', styles: 'btn py-1 px-3.5 text-[13px] bg-light border-light text-black hover:bg-light/[0.85] hover:border-light/[0.85] flex items-center justify-center', icon: 'M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z', dropdownOpen: false },
  ];

  toggleDropdown(btn: any) {
    // Close all dropdowns first
    this.closeAllDropdowns();

    // Toggle the clicked dropdown
    btn.dropdownOpen = !btn.dropdownOpen;
  }

  closeDropdown(btn: any) {
    btn.dropdownOpen = false;
  }

  closeAllDropdowns() {
    this.buttons.forEach(button => button.dropdownOpen = false);
    this.roundedButtons.forEach(button => button.dropdownOpen = false);
    this.outlineButtons.forEach(button => button.dropdownOpen = false);
    this.roundedOutlineButtons.forEach(button => button.dropdownOpen = false);
    this.dropdownButtons.forEach(button => button.dropdownOpen = false);
    this.splitButtons.forEach(button => button.dropdownOpen = false);
    this.iconButtons.forEach(button => button.dropdownOpen = false);
    this.iconDropdownButtons.forEach(button => button.dropdownOpen = false);
  }
}
