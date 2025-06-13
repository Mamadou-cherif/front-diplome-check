import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Calendar, EventApi } from '@fullcalendar/core'; // Import Calendar from FullCalendar core
import dayGridPlugin from '@fullcalendar/daygrid'; // Import DayGrid plugin
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

@Component({
    selector: 'app-calender',
    imports: [],
    templateUrl: './calender.component.html',
    styleUrl: './calender.component.scss'
})
export class CalenderComponent implements AfterViewInit {
  @ViewChild('calendar') calendarEl!: ElementRef;

  ngAfterViewInit() {
    if (this.calendarEl && this.calendarEl.nativeElement) {
      const calendar = new Calendar(this.calendarEl.nativeElement, {
        plugins: [dayGridPlugin, interactionPlugin], // Include interactionPlugin
        events: this.getDefaultEvents(),
        editable: true, // Enable event dragging
        droppable: true, // Enable external events to be dropped into the calendar
        eventReceive: (info) => {
          this.handleEventReceive(info);
          this.handleEventReceive.bind(this);
        },
      });

      calendar.render();
    }
    const externalEvents = document.getElementById('external-events');
    if (externalEvents) {
      new Draggable(externalEvents, {
        itemSelector: '.external-event',
        eventData: function (eventEl) {
          const eventData = JSON.parse(eventEl.getAttribute('data-event')!);
          return {
            title: eventData.title,
            id: eventData.id,
          };
        },
      });
    }
  }

  getDefaultEvents() {
    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    return [
      {
        title: 'PlayPalooza Party',
        start: new Date(y, m, 3),
        className:
          'w-[100%] text-purple-500 !bg-purple-100 dark:!bg-purple-500/20 border-none rounded-md py-1.5 px-3',
      },
      {
        title: 'Sweet16 Sparkling Social',
        start: new Date(y, m, d - 5),
        end: new Date(y, m, d - 2),
        className:
        'w-[100%] dt-custom !text-sky-500 !bg-sky-100 dark:!bg-sky-500/20 border-none rounded-md py-1.5 px-3',
      },
      {
        id: '999',
        title: 'Silver Jubilee Anniversary Bash Event',
        start: new Date(y, m, d - 3, 16, 0),
        allDay: false,
        className:
          'text-yellow-500 w-[100%] !bg-yellow-100 dark:!bg-yellow-500/20 border-none rounded-md py-1.5 px-3',
      },
      {
        id: '999',
        title: 'Client Meeting',
        start: new Date(y, m, d + 4, 16, 0),
        allDay: false,
        className:
          'w-[100%] text-custom-500 !bg-custom-100 dark:!bg-custom-500/20 border-none rounded-md py-1.5 px-3',
      },
      {
        title: 'Office Meeting',
        start: new Date(y, m, d, 10, 10),
        allDay: false,
        className:
          'text-green-500 w-[100%] !bg-green-100 dark:!bg-green-500/20 border-none rounded-md py-1.5 px-3',
      },
      {
        title: 'Diner',
        start: new Date(y, m, d, 19),
        end: new Date(y, m, d, 14, 0),
        allDay: false,
        className:
          'text-purple-500 w-[100%] !bg-purple-100 dark:!bg-purple-500/20 border-none rounded-md py-1.5 px-3',
      },
      {
        title: 'Party Event',
        start: new Date(y, m, d + 1, 19, 0),
        end: new Date(y, m, d + 1, 22, 30),
        allDay: false,
        className:
          'w-[100%] text-sky-500 !bg-sky-100 dark:!bg-sky-500/20 border-none rounded-md py-1.5 px-3',
      },
      {
        title: 'prepare food',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: 'http://google.com/',
        className:
          'w-[100%] text-custom-500 !bg-custom-100 dark:!bg-custom-500/20 border-none rounded-md py-1.5 px-3',
      },
    ];
  }
  handleEventReceive(info: any) {
    // Handle logic when an external event is dropped into the calendar
    console.log('Event dropped:', info.event);
    const eventApi = info.event as EventApi; // Cast event to EventApi
    // You can update your data source here or perform any other actions
  }
}
