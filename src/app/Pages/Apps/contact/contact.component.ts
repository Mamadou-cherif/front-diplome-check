import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
interface Contact {
  image: string;
  contactName: string;
  phoneNumber: string;
  date: string;
  time: string;
  email: string;
}

@Component({
    selector: 'app-contact',
    imports: [CommonModule, RouterLink],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contacts: Contact[] = [
    {
      image: 'assets/images/avatar-1.png',
      contactName: 'Fernando Scarbrough',
      phoneNumber: '770-940-8851',
      date: 'Today',
      time: '09:30 AM',
      email: 'Fernand@armyspy.com',
    },
    {
      image: 'assets/images/avatar-2.png',
      contactName: 'Robert Vansickle',
      phoneNumber: '770-789-8851',
      date: 'Today',
      time: '04:30 AM',
      email: 'Vansickle@armyspy.com',
    },
    {
      image: 'assets/images/avatar-3.png',
      contactName: 'Eliseo Patterson',
      phoneNumber: '897-940-8851',
      date: 'Today',
      time: '05:48 AM',
      email: 'Patterson@armyspy.com',
    },
    {
      image: 'assets/images/avatar-4.png',
      contactName: 'Roger Epling',
      phoneNumber: '159-940-8851',
      date: 'Today',
      time: '07:38 AM',
      email: 'Roger@armyspy.com',
    },
    {
      image: 'assets/images/avatar-5.png',
      contactName: 'Tommy Mendez',
      phoneNumber: '456-940-8851',
      date: 'Today',
      time: '09:30 PM',
      email: 'Mendez@armyspy.com',
    },
    {
      image: 'assets/images/avatar-6.png',
      contactName: 'Marty Brassfield',
      phoneNumber: '265-940-8851',
      date: 'Today',
      time: '11:38 AM',
      email: 'Brassfield@armyspy.com',
    },
    {
      image: 'assets/images/avatar-7.png',
      contactName: 'Pamela Williams',
      phoneNumber: '278-940-8851',
      date: 'Today',
      time: '7:00 PM',
      email: 'Williams@armyspy.com',
    },
    {
      image: 'assets/images/avatar-8.png',
      contactName: 'Thomas Perry',
      phoneNumber: '985-940-8851',
      date: 'Today',
      time: '1:30 AM',
      email: 'Perry@armyspy.com',
    },
    {
      image: 'assets/images/avatar-9.png',
      contactName: 'James Alverez',
      phoneNumber: '123-940-8851',
      date: 'Today',
      time: '2:30 AM',
      email: 'Alverez@armyspy.com',
    },
    {
      image: 'assets/images/avatar-11.png',
      contactName: 'Adrienne M. Graham',
      phoneNumber: '654-940-8851',
      date: 'Today',
      time: '8:30 AM',
      email: 'Graham@armyspy.com',
    },
    {
      image: 'assets/images/avatar-12.png',
      contactName: 'Natalie Pearson',
      phoneNumber: '786-940-8851',
      date: 'Today',
      time: '10:15 AM',
      email: 'Pearson@armyspy.com',
    },
    {
      image: 'assets/images/avatar-13.png',
      contactName: 'Derek Matthews',
      phoneNumber: '459-940-8851',
      date: 'Today',
      time: '12:45 PM',
      email: 'Matthews@armyspy.com',
    },
    {
      image: 'assets/images/avatar-14.png',
      contactName: 'Cynthia Harper',
      phoneNumber: '395-940-8851',
      date: 'Today',
      time: '03:00 PM',
      email: 'Harper@armyspy.com',
    },
    {
      image: 'assets/images/avatar-15.png',
      contactName: 'Evan Wright',
      phoneNumber: '213-940-8851',
      date: 'Today',
      time: '05:20 PM',
      email: 'Wright@armyspy.com',
    },
    {
      image: 'assets/images/avatar-16.png',
      contactName: 'Monica Reed',
      phoneNumber: '879-940-8851',
      date: 'Today',
      time: '06:50 PM',
      email: 'Reed@armyspy.com',
    },
  ];

  displayedContacts: Contact[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 12;
  showingStart: number = 1;
  showingEnd: number = this.itemsPerPage;
  totalPages: number = Math.ceil(this.contacts.length / this.itemsPerPage);

  ngOnInit() {
    this.updateDisplayedContacts();
  }

  updateDisplayedContacts() {
    this.showingStart = (this.currentPage - 1) * this.itemsPerPage + 1;
    this.showingEnd = Math.min(this.showingStart + this.itemsPerPage - 1, this.contacts.length);
    this.displayedContacts = this.contacts.slice(this.showingStart - 1, this.showingEnd);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedContacts();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedContacts();
    }
  }

  gotoPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedContacts();
    }
  }
}
