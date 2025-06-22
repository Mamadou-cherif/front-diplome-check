import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

@Injectable({ providedIn: 'root' })
export class ToastService {
  showToast(
    message: string,
    type: ToastType = 'info',
    options: Partial<SweetAlertOptions> = {}
  ) {
    Swal.fire({
      toast: true,
      position: options.position ?? 'top-end',
      showConfirmButton: false,
      timer: options.timer ?? 3000,
      timerProgressBar: true,
      icon: type as SweetAlertIcon,
      title: message,
      ...Object.fromEntries(
        Object.entries(options).filter(
          ([key]) =>
            ![
              'toast',
              'position',
              'showConfirmButton',
              'timer',
              'timerProgressBar',
              'icon',
              'title'
            ].includes(key)
        )
      )
    });
  }

  success(message: string, options: Partial<SweetAlertOptions> = {}) {
    this.showToast(message, 'success', options);
  }

  error(message: string, options: Partial<SweetAlertOptions> = {}) {
    this.showToast(message, 'error', options);
  }

  info(message: string, options: Partial<SweetAlertOptions> = {}) {
    this.showToast(message, 'info', options);
  }

  warning(message: string, options: Partial<SweetAlertOptions> = {}) {
    this.showToast(message, 'warning', options);
  }

  async confirm(options: Partial<SweetAlertOptions> = {}): Promise<boolean> {
    const result = await Swal.fire({
      title: options.title ?? 'Êtes-vous sûr ?',
      text: options.text ?? 'Cette action est irréversible !',
      icon: options.icon ?? 'warning',
      showCancelButton: true,
      confirmButtonText: options.confirmButtonText ?? 'Oui',
      cancelButtonText: options.cancelButtonText ?? 'Non',
      reverseButtons: true,
      focusCancel: true,
      ...Object.fromEntries(
        Object.entries(options).filter(
          ([key]) =>
            ![
              'title',
              'text',
              'icon',
              'showCancelButton',
              'confirmButtonText',
              'cancelButtonText',
              'reverseButtons',
              'focusCancel'
            ].includes(key)
        )
      )
    });
    return result.isConfirmed === true;
  }
}
