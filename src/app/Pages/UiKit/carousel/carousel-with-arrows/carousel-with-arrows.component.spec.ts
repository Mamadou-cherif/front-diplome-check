import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWithArrowsComponent } from './carousel-with-arrows.component';

describe('CarouselWithArrowsComponent', () => {
  let component: CarouselWithArrowsComponent;
  let fixture: ComponentFixture<CarouselWithArrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselWithArrowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselWithArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
