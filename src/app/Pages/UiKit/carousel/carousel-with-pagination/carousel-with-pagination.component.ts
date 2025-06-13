import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
    selector: 'app-carousel-with-pagination',
    imports: [],
    templateUrl: './carousel-with-pagination.component.html',
    styleUrl: './carousel-with-pagination.component.scss'
})
export class CarouselWithPaginationComponent implements AfterViewInit {
  @ViewChild('swiperRef') swiperContainer!: ElementRef;

  ngAfterViewInit() {
      new Swiper(this.swiperContainer.nativeElement, {
          direction: 'horizontal',
          loop: true,
          slidesPerView: 1,
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
      });
  }
}
