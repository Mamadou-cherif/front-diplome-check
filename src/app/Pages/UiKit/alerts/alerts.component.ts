import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Alert {
  id: number;
  type?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  message: string;
  dec: string;
  icon?: string;
  visible: boolean;
}

@Component({
    selector: 'app-alerts',
    imports: [CommonModule],
    templateUrl: './alerts.component.html',
    styleUrl: './alerts.component.scss'
})
export class AlertsComponent implements OnInit {
  basicAlerts: Alert[] = [];
  outlineAlerts: Alert[] = [];
  closeableAlerts: Alert[] = [];
  outlineCloseableAlerts: Alert[] = [];
  accentBorderAlerts: Alert[] = [];
  iconAlerts: Alert[] = [];

  ngOnInit(): void {
    this.basicAlerts = [
      {
        id: 1,
        message: 'A simple Primary alert—check it out!',
        bgColor: 'bg-purple/20 text-purple',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 2,
        message: 'A simple Secondary alert—check it out!',
        bgColor: 'bg-muted/20 text-muted',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 3,
        message: 'A simple Info alert—check it out!',
        bgColor: 'bg-info/20 text-info',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 4,
        message: 'A simple Success alert—check it out!',
        bgColor: 'bg-success/20 text-success',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 5,
        message: 'A simple Warning alert—check it out!',
        bgColor: 'bg-warning/20 text-warning',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 6,
        message: 'A simple Danger alert—check it out!',
        bgColor: 'bg-danger/20 text-danger',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 7,
        message: 'A simple black alert—check it out!',
        bgColor: 'text-black bg-black/20',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 8,
        message: 'A simple light alert—check it out!',
        bgColor: 'text-black bg-light/20',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
    ];

    this.outlineAlerts = [
      {
        id: 1,
        message: 'A simple Primary alert—check it out!',
        borderColor: 'border-purple bg-purple/10 text-purple',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 2,
        message: 'A simple Secondary alert—check it out!',
        borderColor: 'border-muted bg-muted/10 text-muted',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 3,
        message: 'A simple Info alert—check it out!',
        borderColor: 'border-info bg-info/10 text-info',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 4,
        message: 'A simple Success alert—check it out!',
        borderColor: 'border-success bg-success/10 text-success',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 5,
        message: 'A simple Warning alert—check it out!',
        borderColor: 'border-warning bg-warning/10 text-warning',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 6,
        message: 'A simple Danger alert—check it out!',
        borderColor:
          'border-danger bg-danger/10 text-danger p-3 rounded border',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 7,
        message: 'A simple black alert—check it out!',
        borderColor: 'text-black border-black bg-black/10',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 8,
        message: 'A simple light alert—check it out!',
        borderColor: 'text-black border-light bg-light/10',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
    ];

    this.closeableAlerts = [
      {
        id: 1,
        type: 'bg-purple',
        message: 'A simple Primary alert—check it out!',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 2,
        type: 'bg-success',
        message: 'A simple success alert—check it out!',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 3,
        type: 'bg-warning',
        message: 'A simple warning alert—check it out!',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 4,
        type: 'bg-danger',
        message: 'A simple danger alert—check it out!',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
    ];

    this.outlineCloseableAlerts = [
      {
        id: 1,
        type: 'border-purple bg-purple/10 text-purple',
        message: 'A simple Primary alert—check it out!',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 2,
        type: 'border-success bg-success/10 text-success',
        message: 'A simple success alert—check it out!',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 3,
        type: 'border-warning bg-warning/10 text-warning',
        message: 'A simple warning alert—check it out!',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 4,
        type: 'border-danger bg-danger/10 text-danger',
        message: 'A simple danger alert—check it out!',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
    ];

    this.accentBorderAlerts = [
      {
        id: 1,
        type: 'border-purple bg-purple/10 text-purple',
        message: 'A simple Primary alert—check it out!',
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        visible: true,
      },
      {
        id: 2,
        type: 'border-success bg-success/10 text-success',
        message: 'A simple Success alert—check it out!',
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        visible: true,
      },
      {
        id: 3,
        type: 'border-warning bg-warning/10 text-warning',
        message: 'A simple Warning alert—check it out!',
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        visible: true,
      },
      {
        id: 4,
        type: 'border-danger bg-danger/10 text-danger',
        message: 'A simple Danger alert—check it out!',
        dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        visible: true,
      },
    ];

    this.iconAlerts = [
      {
        id: 1,
        type: 'primary',
        borderColor: 'border-purple',
        bgColor: 'bg-purple/10',
        textColor: 'text-purple',
        message: 'A simple primary alert—check it out!',
        icon: 'M4.00098 20V14C4.00098 9.58172 7.5827 6 12.001 6C16.4193 6 20.001 9.58172 20.001 14V20H21.001V22H3.00098V20H4.00098ZM6.00098 20H18.001V14C18.001 10.6863 15.3147 8 12.001 8C8.68727 8 6.00098 10.6863 6.00098 14V20ZM11.001 2H13.001V5H11.001V2Z',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 2,
        type: 'success',
        borderColor: 'border-success',
        bgColor: 'bg-success/10',
        textColor: 'text-success',
        message: 'A simple Success alert—check it out!',
        icon: 'M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 3,
        type: 'warning',
        borderColor: 'border-warning',
        bgColor: 'bg-warning/10',
        textColor: 'text-warning',
        message: 'A simple Warning alert—check it out!',
        icon: 'M12.865 3.00017L22.3912 19.5002C22.6674 19.9785 22.5035 20.5901 22.0252 20.8662C21.8732 20.954 21.7008 21.0002 21.5252 21.0002H2.47266C1.92037 21.0002 1.47266 20.5525 1.47266 20.0002C1.47266 19.8246 1.51886 19.6522 1.60663 19.5002L11.1329 3.00017C11.4091 2.52187 12.0206 2.358 12.4989 2.63414C12.651 2.72191 12.7772 2.84815 12.865 3.00017ZM4.20471 19.0002H19.7932L11.9989 5.50017L4.20471 19.0002ZM10.9989 16.0002H12.9989V18.0002H10.9989V16.0002ZM10.9989 9.00017H12.9989V14.0002H10.9989V9.00017Z',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
      {
        id: 4,
        type: 'danger',
        borderColor: 'border-danger',
        bgColor: 'bg-danger/10',
        textColor: 'text-danger',
        message: 'A simple Danger alert—check it out!',
        icon: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z',
        dec: 'This is the description for the secondary alert.',
        visible: true,
      },
    ];
  }

  removeAlert(alert: Alert) {
    alert.visible = false;
  }
  showElement1: boolean = true;
  showElement2: boolean = true;
  showElement3: boolean = true;
  showElement4: boolean = true;
  showElement5: boolean = true;
  showElement6: boolean = true;
  showElement7: boolean = true;
  showElement8: boolean = true;

  toggleElement(index: number) {
    switch (index) {
      case 1:
        this.showElement1 = false;
        break;
      case 2:
        this.showElement2 = false;
        break;
      case 3:
        this.showElement3 = false;
        break;
      case 4:
        this.showElement4 = false;
        break;
      case 5:
        this.showElement5 = false;
        break;
      case 6:
        this.showElement6 = false;
        break;
      case 7:
        this.showElement7 = false;
        break;
      case 8:
        this.showElement8 = false;
        break;
      default:
        break;
    }
  }
}
