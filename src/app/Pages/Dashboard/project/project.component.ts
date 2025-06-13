import { ChangeDetectorRef, Component } from '@angular/core';
import { ChartTwoComponent } from './chart-two/chart-two.component';
import { ChartThreeComponent } from './chart-three/chart-three.component';
import { ChartFourComponent } from './chart-four/chart-four.component';
import { ChartOneComponent } from '../default/chart-one/chart-one.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
interface User {
  name: string;
  role: string;
  image: string;
  statusClass: string;
  dropdown: boolean;
}

@Component({
    selector: 'app-project',
    imports: [
        ChartOneComponent,
        ChartTwoComponent,
        ChartThreeComponent,
        ChartFourComponent,
        CommonModule,
        
        RouterLink,
    ],
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss'
})
export class ProjectComponent {
  users: User[] = [
    {
      name: 'Natali Craig',
      role: 'Creative Designer',
      image: 'assets/images/avatar-2.png',
      statusClass: 'bg-success',
      dropdown: false,
    },
    {
      name: 'William Johnson',
      role: 'Asp.Net Developer',
      image: 'assets/images/avatar-5.png',
      statusClass: 'bg-danger',
      dropdown: false,
    },
    {
      name: 'Michael Brown',
      role: 'Laravel Developer',
      image: 'assets/images/avatar-6.png',
      statusClass: 'bg-success',
      dropdown: false,
    },
    {
      name: 'Kate Morrison',
      role: 'UI / UX Designer',
      image: 'assets/images/avatar-8.png',
      statusClass: 'bg-success',
      dropdown: false,
    },
    {
      name: 'Catherine',
      role: 'React Developer',
      image: 'assets/images/avatar-9.png',
      statusClass: 'bg-danger',
      dropdown: false,
    },
    {
      name: 'Jackson, Michael, Lee',
      role: 'Developer Team',
      image: 'assets/images/avatar-7.png',
      statusClass: 'bg-success',
      dropdown: false,
    },
  ];

  dropdowncharts = false;

  constructor(private cdr: ChangeDetectorRef) {}

  toggleDropdown(user: User) {
    // Close all other dropdowns
    this.users.forEach((u) => {
      if (u !== user) {
        u.dropdown = false;
      }
    });
    // Toggle the clicked dropdown
    user.dropdown = !user.dropdown;
    // Close the chart dropdown
    this.dropdowncharts = false;
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  toggleDropdownchart() {
    // Close all user dropdowns
    this.users.forEach((u) => {
      u.dropdown = false;
    });
    // Toggle the chart dropdown
    this.dropdowncharts = !this.dropdowncharts;
    this.cdr.detectChanges(); // Manually trigger change detection
  }
}
