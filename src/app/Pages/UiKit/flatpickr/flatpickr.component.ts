import { AfterViewInit, Component } from '@angular/core';
import flatpickr from 'flatpickr';

@Component({
    selector: 'app-flatpickr',
    imports: [],
    templateUrl: './flatpickr.component.html',
    styleUrl: './flatpickr.component.scss'
})
export class FlatpickrComponent implements AfterViewInit {
  ngAfterViewInit() {
      flatpickr('#basicExample1', {
          enableTime: true, // enable time picker
          dateFormat: 'Y-m-d H:i', // customize date format as needed
      });

      flatpickr('#basicExample2', {
          enableTime: true, // enable time picker
          dateFormat: 'Y-m-d H:i', // customize date format as needed
      });
  }
}
