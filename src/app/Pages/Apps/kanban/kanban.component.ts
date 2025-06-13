import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-kanban',
    imports: [CommonModule, DragDropModule],
    templateUrl: './kanban.component.html',
    styleUrl: './kanban.component.scss'
})
export class KanbanComponent {
  tasks = [
    {
      id: 1,
      category: 'UI-UX',
      title: 'Dashboard',
      description: 'Create Chat Widget and Table',
      labels: ['bg-purple', 'bg-yellow-400', 'bg-red-400'],
      avatars: [
        'assets/images/avatar-3.png',
        'assets/images/avatar-5.png',
        'assets/images/avatar-6.png'
      ],
      comments: 3,
      links: 1
    },
    // Add more task objects as needed
  ];

  tasksInProgress = [
    {
      id: 1,
      category: 'UI-UX',
      title: 'Index Page Layout Change',
      description: 'Add the layout from the Blog homepage. Add the layout from the Blog home page.',
      labels: ['bg-purple', 'bg-yellow-400', 'bg-red-400'],
      avatars: [
        'assets/images/avatar-4.png',
        'assets/images/avatar-7.png'
      ],
      comments: 4,
      links: 2
    },
    {
      id: 2,
      category: 'UI-UX',
      title: 'Index Page Layout Change',
      description: 'Add the layout from the Blog homepage. Add the layout from the Blog home page.',
      labels: ['bg-purple', 'bg-yellow-400', 'bg-red-400'],
      avatars: [
        'assets/images/avatar-10.png',
        'assets/images/avatar-11.png'
      ],
      comments: 4,
      links: 2
    }
  ];

  tasksPending = [
    {
      id: 1,
      category: 'UI-UX',
      title: 'Dashboard',
      description: 'Data table design',
      labels: ['bg-purple', 'bg-yellow-400', 'bg-red-400'],
      avatars: ['assets/images/avatar-8.png'],
      comments: 1,
      links: 1
    }
  ];
  compliedTasks = [
    {
      id: 1,
      category: 'UI-UX',
      title: 'Ecommerce Dashboard',
      status: 'Complied',
      labels: ['bg-purple', 'bg-yellow-400', 'bg-red-400'],
      avatars: ['assets/images/avatar-5.png'],
      comments: 0,
      links: 0,
    },
    {
      id: 2,
      category: 'UI-UX',
      title: 'Components',
      status: 'Complied',
      labels: ['bg-purple', 'bg-yellow-400', 'bg-red-400'],
      avatars: ['assets/images/avatar-5.png'],
      comments: 0,
      links: 0,
    },
  ];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex)
    } else {
      moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    }
  }
}
