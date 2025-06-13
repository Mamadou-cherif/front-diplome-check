import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
    selector: 'app-carousel-with-progress',
    imports: [],
    templateUrl: './carousel-with-progress.component.html',
    styleUrl: './carousel-with-progress.component.scss'
})
export class CarouselWithProgressComponent implements AfterViewInit {
  @ViewChild('swiperRef') swiperContainer!: ElementRef;

  ngAfterViewInit() {
      new Swiper(this.swiperContainer.nativeElement, {
          direction: 'horizontal',
          loop: true,
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
      });
  }
}
