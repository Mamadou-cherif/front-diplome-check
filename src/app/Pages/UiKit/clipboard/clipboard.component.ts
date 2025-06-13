import { Component } from '@angular/core';

@Component({
    selector: 'app-clipboard',
    imports: [],
    templateUrl: './clipboard.component.html',
    styleUrl: './clipboard.component.scss'
})
export class ClipboardComponent {

  copyToClipboard(inputElement: HTMLInputElement | HTMLTextAreaElement) {
    inputElement.select();
    document.execCommand('copy');
  }

  cutToClipboard(inputElement: HTMLInputElement | HTMLTextAreaElement) {
    inputElement.select();
    document.execCommand('cut');
  }
}
