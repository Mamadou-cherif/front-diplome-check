import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
    selector: 'app-basic-carousel',
    imports: [],
    templateUrl: './basic-carousel.component.html',
    styleUrl: './basic-carousel.component.scss'
})
export class BasicCarouselComponent implements AfterViewInit{
  @ViewChild('swiperRef') swiperContainer!: ElementRef;

    ngAfterViewInit() {
        new Swiper(this.swiperContainer.nativeElement, {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1
        });
    }
}
