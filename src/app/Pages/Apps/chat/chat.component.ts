import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
    selector: 'app-chat',
    imports: [],
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.scss'
})
export class ChatComponent {
  dropdown: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  toggleDropdown() {
    this.dropdown = !this.dropdown;
    this.cdr.detectChanges(); // Manually trigger change detection
  }
}
