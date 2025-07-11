import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  getContacts() {
    return [
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
        time: '07:00 PM',
        email: 'Williams@armyspy.com',
      },
      {
        image: 'assets/images/avatar-8.png',
        contactName: 'Thomas Perry',
        phoneNumber: '985-940-8851',
        date: 'Today',
        time: '01:30 AM',
        email: 'Perry@armyspy.com',
      },
      {
        image: 'assets/images/avatar-9.png',
        contactName: 'James Alverez',
        phoneNumber: '123-940-8851',
        date: 'Today',
        time: '02:30 AM',
        email: 'Alverez@armyspy.com',
      },
      {
        image: 'assets/images/avatar-11.png',
        contactName: 'Adrienne M. Graham',
        phoneNumber: '654-940-8851',
        date: 'Today',
        time: '08:30 AM',
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
  }
}
