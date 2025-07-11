import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-error-500',
    imports: [RouterLink],
    templateUrl: './error-500.component.html',
    styleUrl: './error-500.component.scss'
})
export class Error500Component {
  year: number = new Date().getFullYear();
}
