import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-drag-drop',
    imports: [DragDropModule, CommonModule],
    templateUrl: './drag-drop.component.html',
    styleUrl: './drag-drop.component.scss'
})
export class DragDropComponent {

  tasks2 = [
    {
      title: 'Company logo design',
      dueDate: 'Feb 28, 2023',
      logo: 'assets/images/bitbucket.png',
      assigneeAvatar: 'assets/images/avatar-17.png',
      status: 'Completed',
      completedTasks: 18,
      totalTasks: 18,
      progress: 100
    },
    {
      title: 'Poster illustration design',
      dueDate: 'Nov 10, 2024',
      logo: 'assets/images/dailymotion.png',
      assigneeAvatar: 'assets/images/avatar-16.png',
      status: 'Review',
      completedTasks: 1,
      totalTasks: 10,
      progress: 15
    }
  ];
  tasks = [
    {
      title: 'Poster illustration design',
      dueDate: 'Nov 10, 2024',
      avatar: 'assets/images/dropbox.png',
      status: 'Pending',
      progress: 71,
      totalTasks: 39,
      completedTasks: 13
    },
    {
      title: 'Coffee detail page - Main Page',
      dueDate: 'Jun 20, 2022',
      avatar: 'assets/images/badoo.png',
      status: 'Completed',
      progress: 100,
      totalTasks: 74,
      completedTasks: 74
    },
    {
      title: 'Drinking bottle graphics',
      dueDate: 'Jan 10, 2020',
      avatar: 'assets/images/invision.png',
      status: 'Rejected',
      progress: 40,
      totalTasks: 49,
      completedTasks: 19
    }
  ];
  tasks3 = [
    {
      title: "Drinking bottle graphics",
      dueDate: "Jun 11, 2023",
      imageUrl: "assets/images/blogger.png",
      avatars: ["assets/images/avatar-13.png", "assets/images/avatar-10.png"],
      status: "In Progress",
      progress: 64,
      totalTasks: 29,
      completedTasks: 19
    },
    {
      title: "Poster illustation design",
      dueDate: "Nov 10, 2024",
      imageUrl: "assets/images/digg.png",
      avatars: ["assets/images/avatar-16.png"],
      status: "Pending",
      progress: 71,
      totalTasks: 39,
      completedTasks: 13
    },
    {
      title: "Coffee detail page - Main Page",
      dueDate: "Jun 20, 2022",
      imageUrl: "assets/images/kickstarter.png",
      avatars: ["assets/images/avatar-20.png"],
      status: "Completed",
      progress: 100,
      totalTasks: 74,
      completedTasks: 74
    },
    {
      title: "Drinking bottle graphics",
      dueDate: "Jan 10, 2020",
      imageUrl: "assets/images/patreon.png",
      avatars: ["assets/images/avatar-5.png", "assets/images/avatar-7.png"],
      status: "Rejected",
      progress: 40,
      totalTasks: 49,
      completedTasks: 19
    }

  ];
  tasks4 = [
    {
      title: "Company logo design",
      dueDate: "Feb 28, 2023",
      imageUrl: "assets/images/zendesk.png",
      avatars: ["assets/images/avatar-17.png"],
      status: "Completed",
      progress: 100,
      totalTasks: 18,
      completedTasks: 18
    },
    {
      title: "Drinking bottle graphics",
      dueDate: "Jun 11, 2023",
      imageUrl: "assets/images/marvel.png",
      avatars: ["assets/images/avatar-13.png", "assets/images/avatar-10.png"],
      status: "In Progress",
      progress: 64,
      totalTasks: 29,
      completedTasks: 19
    },
    {
      title: "Poster illustration design",
      dueDate: "Nov 10, 2024",
      imageUrl: "assets/images/ok.png",
      avatars: ["assets/images/avatar-16.png"],
      status: "Review",
      progress: 15,
      totalTasks: 10,
      completedTasks: 1
    }
  ]

  users = [
    {
      name: 'Lori M. McGee',
      email: 'LoriMMcGee@jourrapide.com',
      avatar: 'assets/images/avatar-1.png'
    },
    {
      name: 'Sally R. Roberts',
      email: 'SallyRRoberts@teleworm.us',
      avatar: 'assets/images/avatar-2.png'
    },
    {
      name: 'Shona G. Ayala',
      email: 'ShonaGAyala@dayrep.com',
      avatar: 'assets/images/avatar-3.png'
    }
  ];
  users2 = [
    {
      name: 'Dianne M. Moore',
      email: 'DianneMMoore@armyspy.com',
      avatar: 'assets/images/avatar-4.png'
    },
    {
      name: 'Judy M. Beier',
      email: 'JudyMBeier@rhyta.com',
      avatar: 'assets/images/avatar-5.png'
    },
    {
      name: 'Donna R. Leon',
      email: 'DonnaRLeon@dayrep.com',
      avatar: 'assets/images/avatar-6.png'
    },
    {
      name: 'Kevin D. Smith',
      email: 'KevinDSmith@jourrapide.com',
      avatar: 'assets/images/avatar-8.png'
    }
  ];
  people = [
    {
      avatar: 'assets/images/avatar-7.png',
      name: 'Donald C. Ritch',
      email: 'DonaldCRitch@jourrapide.com'
    },
    {
      avatar: 'assets/images/avatar-9.png',
      name: 'Anthony M. Jones',
      email: 'AnthonyMJones@rhyta.com'
    }
  ];
  people2 = [
    {
      avatar: 'assets/images/avatar-10.png',
      name: 'Ronald H. Bullock',
      email: 'RonaldHBullock@armyspy.com'
    },
    {
      avatar: 'assets/images/avatar-11.png',
      name: 'Valerie E. Cook',
      email: 'ValerieECook@jourrapide.com'
    },
    {
      avatar: 'assets/images/avatar-12.png',
      name: 'Christine J. Muller',
      email: 'ChristineJMuller@dayrep.com'
    }
  ];
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
