import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
    selector: 'app-carousel-with-multiple-slides',
    imports: [],
    templateUrl: './carousel-with-multiple-slides.component.html',
    styleUrl: './carousel-with-multiple-slides.component.scss'
})
export class CarouselWithMultipleSlidesComponent implements AfterViewInit {
  @ViewChild('swiperRef') swiperContainer!: ElementRef;

  ngAfterViewInit() {
      new Swiper(this.swiperContainer.nativeElement, {
          direction: 'horizontal',
          loop: true,
          slidesPerView: 2,
          spaceBetween: 10,
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
      });
  }
}
