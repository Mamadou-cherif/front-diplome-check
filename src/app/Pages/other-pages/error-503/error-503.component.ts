import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-error-503',
    imports: [ RouterLink],
    templateUrl: './error-503.component.html',
    styleUrl: './error-503.component.scss'
})
export class Error503Component {
  year: number = new Date().getFullYear();
}
