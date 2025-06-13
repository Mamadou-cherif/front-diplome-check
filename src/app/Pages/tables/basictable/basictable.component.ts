import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-basictable',
    imports: [CommonModule, FormsModule],
    templateUrl: './basictable.component.html',
    styleUrl: './basictable.component.scss'
})
export class BasictableComponent {
  fullWidthTableData = [
    { id: 1, name: 'Lindsay Walton', title: 'Front-end Developer', role: 'Member', roleclass: 'bg-purple/20 text-purple' },
    { id: 2, name: 'Courtney Henry', title: 'Designer', role: 'Admin', roleclass: 'bg-success/20 text-success' },
    { id: 3, name: 'Tom Cook', title: 'Director of Product', role: 'Member', roleclass: 'bg-warning/20 text-warning' },
    { id: 4, name: 'Whitney Francis', title: 'Copywriter', role: 'Admin', roleclass: 'bg-danger/20 text-danger' },
    { id: 5, name: 'Leonard Krasner', title: 'Senior Designer', role: 'Owner', roleclass: 'bg-info/20 text-info' }
  ];

  hoverTableData = [
    { id: 1, name: 'Lindsay Walton', title: 'Front-end Developer', role: 'Member' },
    { id: 2, name: 'Courtney Henry', title: 'Designer', role: 'Admin' },
    { id: 3, name: 'Tom Cook', title: 'Director of Product', role: 'Member' },
    { id: 4, name: 'Whitney Francis', title: 'Copywriter', role: 'Admin' },
    { id: 5, name: 'Leonard Krasner', title: 'Senior Designer', role: 'Owner' }
  ];

  captionsTableData = [
    { project: 'Coffee detail page', assignees: ['./assets/images/avatar-12.png'], time: '3h 20min', status: 'In Progress' },
    { project: 'Drinking bottle graphics', assignees: ['./assets/images/avatar-13.png', './assets/images/avatar-14.png'], time: '12h 21min', status: 'Completed' },
    { project: 'App design and development', assignees: ['./assets/images/avatar-15.png', './assets/images/avatar-16.png', './assets/images/avatar-17.png'], time: '78h 05min', status: 'Pending' },
    { project: 'Poster illustation design', assignees: ['./assets/images/avatar-18.png'], time: '26h 58min', status: 'Approved' },
    { project: 'App UI design', assignees: ['./assets/images/avatar-19.png'], time: '17h 22min', status: 'Rejected' }
  ];

  items = [
    { projectName: 'Coffee detail page', avatars: ['./assets/images/avatar-12.png'], timeSpend: '3h 20min', status: 'In Progress', statusClass: 'text-purple', selected: true },
    { projectName: 'Drinking bottle graphics', avatars: ['./assets/images/avatar-13.png', './assets/images/avatar-14.png'], timeSpend: '12h 21min', status: 'Completed', statusClass: 'text-success', selected: false },
    { projectName: 'App design and development', avatars: ['./assets/images/avatar-15.png', './assets/images/avatar-16.png'], timeSpend: '78h 05min', status: 'Pending', statusClass: 'text-warning', selected: true },
    { projectName: 'Poster illustation design', avatars: ['./assets/images/avatar-17.png'], timeSpend: '26h 58min', status: 'Approved', statusClass: 'text-info', selected: false },
    { projectName: 'App UI design', avatars: ['./assets/images/avatar-18.png'], timeSpend: '17h 22min', status: 'Rejected', statusClass: 'text-danger', selected: false }
  ];

  employees: any[] = [
    { id: 1, name: 'Lindsay Walton', title: 'Front-end Developer', role: 'Member' },
    { id: 2, name: 'Courtney Henry', title: 'Designer', role: 'Admin' },
    { id: 3, name: 'Tom Cook', title: 'Director of Product', role: 'Member' },
    { id: 4, name: 'Whitney Francis', title: 'Copywriter', role: 'Admin' },
    { id: 5, name: 'Leonard Krasner', title: 'Senior Designer', role: 'Owner' }
  ];

  // roleClass(role: string): string {
  //   switch (role.toLowerCase()) {
  //     case 'member':
  //       return 'bg-purple/20 text-purple';
  //     case 'admin':
  //       return 'bg-success/20 text-success';
  //     case 'owner':
  //       return 'bg-info/20 text-info';
  //     default:
  //       return '';
  //   }
  // }

  statusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'in progress':
        return 'text-purple';
      case 'completed':
        return 'text-success';
      case 'pending':
        return 'text-warning';
      case 'approved':
        return 'text-info';
      case 'rejected':
        return 'text-danger';
      default:
        return '';
    }
  }

  selectAll(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.items.forEach(item => item.selected = checkbox.checked);
  }

  selectItem(item: any) {
    item.selected = !item.selected;
  }
}

