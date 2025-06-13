import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-radio',
    imports: [CommonModule],
    templateUrl: './radio.component.html',
    styleUrl: './radio.component.scss'
})
export class RadioComponent implements OnInit {
  radiosDefault = [
    { class: 'form-radio text-purple', label: 'Primary', checked: true },
    { class: 'form-radio text-info', label: 'Info', checked: true },
    { class: 'form-radio text-success', label: 'Success', checked: false },
    { class: 'form-radio text-warning', label: 'Warning', checked: false },
    { class: 'form-radio text-danger', label: 'Danger', checked: false },
    { class: 'text-black form-radio', label: 'Black', checked: false },
    { class: 'form-radio text-muted', label: 'Muted', checked: false }
  ];

  radiosSquare = [
    { class: 'rounded form-radio text-purple', label: 'Primary', checked: true },
    { class: 'rounded form-radio text-info', label: 'Info', checked: false },
    { class: 'rounded form-radio text-success', label: 'Success', checked: false },
    { class: 'rounded form-radio text-warning', label: 'Warning', checked: false },
    { class: 'rounded form-radio text-danger', label: 'Danger', checked: false },
    { class: 'text-black rounded form-radio', label: 'Black', checked: false },
    { class: 'rounded form-radio text-muted', label: 'Muted', checked: false }
  ];

  radiosOutline = [
    { class: 'form-radio outborder-purple', label: 'Primary', checked: false },
    { class: 'form-radio outborder-info', label: 'Info', checked: true },
    { class: 'form-radio outborder-success', label: 'Success', checked: false },
    { class: 'form-radio outborder-warning', label: 'Warning', checked: false },
    { class: 'form-radio outborder-danger', label: 'Danger', checked: false },
    { class: 'form-radio outborder-black', label: 'Black', checked: false },
    { class: 'form-radio outborder-muted', label: 'Muted', checked: false }
  ];

  radiosOutlineSquare = [
    { class: 'rounded form-radio outborder-purple', label: 'Primary', checked: true },
    { class: 'rounded form-radio outborder-info', label: 'Info', checked: false },
    { class: 'rounded form-radio outborder-success', label: 'Success', checked: false },
    { class: 'rounded form-radio outborder-warning', label: 'Warning', checked: false },
    { class: 'rounded form-radio outborder-danger', label: 'Danger', checked: false },
    { class: 'rounded form-radio outborder-black', label: 'Black', checked: false },
    { class: 'rounded form-radio outborder-muted', label: 'Muted', checked: false }
  ];

  radiosOutlineColor = [
    { class: 'form-radio peer outborder-purple', peerCheckedClass: 'text-purple', label: 'Primary', checked: false },
    { class: 'form-radio peer outborder-info', peerCheckedClass: 'text-info', label: 'Info', checked: true },
    { class: 'form-radio peer outborder-success', peerCheckedClass: 'text-success', label: 'Success', checked: false },
    { class: 'form-radio peer outborder-warning', peerCheckedClass: 'text-warning', label: 'Warning', checked: false },
    { class: 'form-radio peer outborder-danger', peerCheckedClass: 'text-danger', label: 'Danger', checked: false },
    { class: 'form-radio peer outborder-black', peerCheckedClass: 'text-black', label: 'Black', checked: false },
    { class: 'form-radio peer outborder-muted', peerCheckedClass: 'text-muted', label: 'Muted', checked: false }
  ];

  radiosOutlineSquareColor = [
    { class: 'rounded form-radio peer outborder-purple', peerCheckedClass: 'text-purple', label: 'Primary', checked: false },
    { class: 'rounded form-radio peer outborder-info', peerCheckedClass: 'text-info', label: 'Info', checked: true },
    { class: 'rounded form-radio peer outborder-success', peerCheckedClass: 'text-success', label: 'Success', checked: false },
    { class: 'rounded form-radio peer outborder-warning', peerCheckedClass: 'text-warning', label: 'Warning', checked: false },
    { class: 'rounded form-radio peer outborder-danger', peerCheckedClass: 'text-danger', label: 'Danger', checked: false },
    { class: 'rounded form-radio peer outborder-black', peerCheckedClass: 'text-black', label: 'Black', checked: false },
    { class: 'rounded form-radio peer outborder-muted', peerCheckedClass: 'text-muted', label: 'Muted', checked: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
