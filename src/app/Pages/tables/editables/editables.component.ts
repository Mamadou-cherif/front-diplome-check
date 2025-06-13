import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-editables',
    imports: [CommonModule, FormsModule],
    templateUrl: './editables.component.html',
    styleUrl: './editables.component.scss'
})
export class EditablesComponent {
  items: any[] = []; // Define items array or adjust type accordingly

  constructor() {
    // Initialize items array if needed
    this.items = [
      {
        id: 1,
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        phone: '832-333-0011',
        role: 'Admin',
      },
      {
        id: 2,
        name: 'Courtney Henry',
        title: 'Designer',
        phone: '551-697-3625',
        role: 'Owner',
      },
      {
        id: 3,
        name: 'Tom Cook',
        title: 'Director of Product',
        phone: '208-628-0572',
        role: 'Admin',
      },
      {
        id: 4,
        name: 'Whitney Francis',
        title: 'Copywriter',
        phone: '903-342-3348',
        role: 'Owner',
      },
      {
        id: 5,
        name: 'Leonard Krasner',
        title: 'Senior Designer',
        phone: '602-690-7009',
        role: 'Admin',
      },
    ];
  }

  editItem(item: any, field: string) {
    item.editing = true;
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
