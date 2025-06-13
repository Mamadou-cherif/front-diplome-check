import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-notification',
    imports: [CommonModule],
    templateUrl: './notification.component.html',
    styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  toastVisible = false;
  toastTimer: any;

  toggleToastMain() {
    this.toastVisible = !this.toastVisible;
    if (this.toastVisible) {
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => (this.toastVisible = false), 3000);
    }
  }

  notificationOpen = false;

  openNotification() {
    this.notificationOpen = true;
  }

  closeNotification() {
    this.notificationOpen = false;
  }

  toasts = [
    { visible: false },
    { visible: false },
    { visible: false },
    { visible: false },
    { visible: false },
    { visible: false },
  ];

  toggleToast(index: number) {
    this.toasts[index].visible = !this.toasts[index].visible;
    if (this.toasts[index].visible) {
      setTimeout(() => {
        this.toasts[index].visible = false;
      }, 3000);
    }
  }
  notifications = [
    { label: 'Primary', color: 'purple', toastVisible: false },
    { label: 'Info', color: 'info', toastVisible: false },
    { label: 'Success', color: 'success', toastVisible: false },
    { label: 'Warning', color: 'warning', toastVisible: false },
    { label: 'Danger', color: 'danger', toastVisible: false },
    { label: 'Black', color: 'black', toastVisible: false },
    { label: 'Secondary', color: 'muted', toastVisible: false },
    { label: 'Light', color: 'light', toastVisible: false },
  ];
  toggleToastN(notification: any) {
    notification.toastVisible = !notification.toastVisible;
    if (notification.toastVisible) {
      setTimeout(() => {
        notification.toastVisible = false;
      }, 3000);
    }
  }
}
