import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Lightbox, LightboxModule } from 'ngx-lightbox';

@Component({
    selector: 'app-gallery',
    imports: [CommonModule, LightboxModule],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  galleryImages = [
    { src: 'assets/images/gallery/img-1.png', classes: 'w-full h-72' },
    { src: 'assets/images/gallery/img-2.png', classes: 'row-span-2' },
    { src: 'assets/images/gallery/img-3.png', classes: 'col-span-2 row-span-2' },
    { src: 'assets/images/gallery/img-4.png', classes: 'row-span-2' },
    { src: 'assets/images/gallery/img-5.png', classes: '' },
    { src: 'assets/images/gallery/img-6.png', classes: 'h-72' },
    { src: 'assets/images/gallery/img-7.png', classes: 'row-span-2' },
    { src: 'assets/images/gallery/img-8.png', classes: 'col-span-2 row-span-2' },
    { src: 'assets/images/gallery/img-9.png', classes: 'row-span-2' },
    { src: 'assets/images/gallery/img-10.png', classes: '' },
  ];

  private albums = this.galleryImages.map(image => ({
    src: image.src,
    caption: '',
    thumb: image.src
  }));

  constructor(private lightbox: Lightbox) { }

  openLightbox(index: number): void {
    this.lightbox.open(this.albums, index);
  }

  closeLightbox(): void {
    this.lightbox.close();
  }
}
