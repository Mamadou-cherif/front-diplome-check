import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-modals',
    imports: [CommonModule],
    templateUrl: './modals.component.html',
    styleUrl: './modals.component.scss'
})
export class ModalsComponent {
  modalOpen1 = false;
  modalOpen2 = false;
  modalOpen3 = false;
  modalOpen4 = false;
  modalOpen5 = false;
  modalOpen6 = false;
  modalOpen7 = false;
  modalOpen8 = false;
  modalOpen9 = false;
  modalOpen10 = false;

  toggleModal1() {
    this.modalOpen1 = !this.modalOpen1;
    if (this.modalOpen1) {
      document.body.style.overflow = 'hidden'; // Optional: Prevent scrolling background
    } else {
      document.body.style.overflow = ''; // Optional: Restore scrolling background
    }
  }

  toggleModal2() {
    this.modalOpen2 = !this.modalOpen2;
    if (this.modalOpen2) {
      document.body.style.overflow = 'hidden'; // Optional: Prevent scrolling background
    } else {
      document.body.style.overflow = ''; // Optional: Restore scrolling background
    }
  }
  toggleModal3() {
    this.modalOpen3 = !this.modalOpen3;
    if (this.modalOpen2) {
      document.body.style.overflow = 'hidden'; // Optional: Prevent scrolling background
    } else {
      document.body.style.overflow = ''; // Optional: Restore scrolling background
    }
  }
  toggleModal4() {
    this.modalOpen4 = !this.modalOpen4;
    if (this.modalOpen2) {
      document.body.style.overflow = 'hidden'; // Optional: Prevent scrolling background
    } else {
      document.body.style.overflow = ''; // Optional: Restore scrolling background
    }
  }
  toggleModal5() {
    this.modalOpen5 = !this.modalOpen5;
    if (this.modalOpen5) {
      document.body.style.overflow = 'hidden'; // Optional: Prevent scrolling background
    } else {
      document.body.style.overflow = ''; // Optional: Restore scrolling background
    }
  }
  toggleModal6() {
    this.modalOpen6 = !this.modalOpen6;
    if (this.modalOpen6) {
      document.body.style.overflow = 'hidden'; // Optional: Prevent scrolling background
    } else {
      document.body.style.overflow = ''; // Optional: Restore scrolling background
    }
  }
  toggleModal7() {
    this.modalOpen7 = !this.modalOpen7;
    if (this.modalOpen7) {
      document.body.style.overflow = 'hidden'; // Optional: Prevent scrolling background
    } else {
      document.body.style.overflow = ''; // Optional: Restore scrolling background
    }
  }
  toggleModal8() {
    this.modalOpen8 = !this.modalOpen8;
    if (this.modalOpen8) {
      document.body.style.overflow = 'hidden'; // Optional: Prevent scrolling background
    } else {
      document.body.style.overflow = ''; // Optional: Restore scrolling background
    }
  }

  toggleModal9() {
    this.modalOpen9 = !this.modalOpen9;
    if (this.modalOpen9) {
      document.body.style.overflow = 'hidden'; // Optional: Prevent scrolling background
    } else {
      document.body.style.overflow = ''; // Optional: Restore scrolling background
    }
  }

  toggleModal10() {
    this.modalOpen10 = !this.modalOpen10;
    if (this.modalOpen10) {
      document.body.style.overflow = 'hidden'; // Optional: Prevent scrolling background
    } else {
      document.body.style.overflow = ''; // Optional: Restore scrolling background
    }
  }

  closeModal(event: MouseEvent, modalNumber: number) {
    if ((event.target as HTMLElement).classList.contains('bg-black/80')) {
      if (modalNumber === 1) {
        this.modalOpen1 = false;
      } else if (modalNumber === 2) {
        this.modalOpen2 = false;
      } else if (modalNumber === 3) {
        this.modalOpen3 = false;
      } else if (modalNumber === 4) {
        this.modalOpen4 = false;
      } else if (modalNumber === 5) {
        this.modalOpen5 = false;
      } else if (modalNumber === 6) {
        this.modalOpen6 = false;
      } else if (modalNumber === 7) {
        this.modalOpen7 = false;
      } else if (modalNumber === 8) {
        this.modalOpen8 = false;
      } else if (modalNumber === 9) {
        this.modalOpen9 = false;
      } else if (modalNumber === 10) {
        this.modalOpen10 = false;
      }
      document.body.style.overflow = ''; // Optional: Restore scrolling background
    }
  }
}
