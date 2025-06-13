import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWithMultipleSlidesComponent } from './carousel-with-multiple-slides.component';

describe('CarouselWithMultipleSlidesComponent', () => {
  let component: CarouselWithMultipleSlidesComponent;
  let fixture: ComponentFixture<CarouselWithMultipleSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselWithMultipleSlidesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselWithMultipleSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
