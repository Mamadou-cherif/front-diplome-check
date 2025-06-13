import { Component } from '@angular/core';
import { BasicCarouselComponent } from './basic-carousel/basic-carousel.component';
import { CarouselWithArrowsComponent } from './carousel-with-arrows/carousel-with-arrows.component';
import { CarouselWithProgressComponent } from './carousel-with-progress/carousel-with-progress.component';
import { CarouselWithPaginationComponent } from './carousel-with-pagination/carousel-with-pagination.component';
import { CarouselWithMultipleSlidesComponent } from './carousel-with-multiple-slides/carousel-with-multiple-slides.component';

@Component({
    selector: 'app-carousel',
    imports: [
        BasicCarouselComponent,
        CarouselWithArrowsComponent,
        CarouselWithProgressComponent,
        CarouselWithPaginationComponent,
        CarouselWithMultipleSlidesComponent,
    ],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.scss'
})
export class CarouselComponent {}
