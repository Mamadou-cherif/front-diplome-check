import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-error-404',
    imports: [ RouterLink],
    templateUrl: './error-404.component.html',
    styleUrl: './error-404.component.scss'
})
export class Error404Component {
  year: number = new Date().getFullYear();
}

