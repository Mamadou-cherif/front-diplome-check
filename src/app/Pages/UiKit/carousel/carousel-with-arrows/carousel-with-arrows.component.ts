import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper/bundle';

// Swiper modules
import { Navigation } from 'swiper/modules';


@Component({
  selector: 'app-carousel-with-arrows',
  standalone: true,
  templateUrl: './carousel-with-arrows.component.html',
  styleUrls: ['./carousel-with-arrows.component.scss']
})
export class CarouselWithArrowsComponent implements AfterViewInit {
  @ViewChild('swiperRef') swiperContainer!: ElementRef;

  ngAfterViewInit() {
    // Initialize Swiper with modules
    new Swiper(this.swiperContainer.nativeElement, {
      modules: [Navigation], // Use Navigation module here
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
