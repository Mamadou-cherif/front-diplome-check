import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-checkbox',
    imports: [CommonModule],
    templateUrl: './checkbox.component.html',
    styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent implements OnInit {
  checkboxesDefault = [
    { class: 'text-purple', label: 'Primary', checked: true },
    { class: 'text-info', label: 'Info', checked: true },
    { class: 'text-success', label: 'Success', checked: false },
    { class: 'text-warning', label: 'Warning', checked: false },
    { class: 'text-danger', label: 'Danger', checked: false },
    { class: 'text-black', label: 'Black', checked: false },
    { class: 'text-muted ', label: 'Muted', checked: false },
  ];

  checkboxesRounded = [
    { class: 'rounded-full text-purple', label: 'Primary', checked: true },
    { class: 'rounded-full text-info', label: 'Info', checked: true },
    { class: 'rounded-full text-success', label: 'Success', checked: false },
    { class: 'rounded-full text-warning', label: 'Warning', checked: false },
    { class: 'rounded-full text-danger', label: 'Danger', checked: false },
    { class: 'rounded-full text-black', label: 'Black', checked: false },
    {
      class: 'rounded-full text-muted ',
      label: 'Muted',
      checked: false,
    },
  ];

  checkboxesOutline = [
    { class: 'outborder-purple', label: 'Primary', checked: true },
    { class: 'outborder-info', label: 'Info', checked: true },
    { class: 'outborder-success', label: 'Success', checked: false },
    { class: 'outborder-warning', label: 'Warning', checked: false },
    { class: 'outborder-danger', label: 'Danger', checked: false },
    { class: 'outborder-black', label: 'Black', checked: false },
    { class: 'outborder-muted', label: 'Muted', checked: false },
  ];

  checkboxesOutlineRounded = [
    { class: 'rounded-full outborder-purple', label: 'Primary', checked: true },
    { class: 'rounded-full outborder-info', label: 'Info', checked: true },
    {
      class: 'rounded-full outborder-success',
      label: 'Success',
      checked: false,
    },
    {
      class: 'rounded-full outborder-warning',
      label: 'Warning',
      checked: false,
    },
    { class: 'rounded-full outborder-danger', label: 'Danger', checked: false },
    { class: 'rounded-full outborder-black', label: 'Black', checked: false },
    { class: 'rounded-full outborder-muted', label: 'Muted', checked: false },
  ];

  checkboxesTextColor = [
    { class: 'peer text-purple', label: 'Primary', checked: true },
    { class: 'peer text-info', label: 'Info', checked: true },
    { class: 'peer text-success', label: 'Success', checked: false },
    { class: 'peer text-warning', label: 'Warning', checked: false },
    { class: 'peer text-danger', label: 'Danger', checked: false },
    { class: 'text-black peer', label: 'Black', checked: false },
    { class: 'peer text-muted', label: 'Muted', checked: false },
  ];

  checkboxes = [
    {
      label: 'Primary',
      inputClass: 'outborder-purple',
      color: 'purple',
      checked: true,
    },
    {
      label: 'Info',
      inputClass: 'outborder-info',
      color: 'info',
      checked: true,
    },
    {
      label: 'Success',
      inputClass: 'outborder-success',
      color: 'success',
      checked: false,
    },
    {
      label: 'Warning',
      inputClass: 'outborder-warning',
      color: 'warning',
      checked: false,
    },
    {
      label: 'Danger',
      inputClass: 'outborder-danger',
      color: 'danger',
      checked: false,
    },
    {
      label: 'Black',
      inputClass: 'outborder-black',
      color: 'black',
      checked: false,
    },
    {
      label: 'Muted',
      inputClass: 'outborder-muted',
      color: 'muted',
      checked: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
