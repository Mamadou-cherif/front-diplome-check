import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWithProgressComponent } from './carousel-with-progress.component';

describe('CarouselWithProgressComponent', () => {
  let component: CarouselWithProgressComponent;
  let fixture: ComponentFixture<CarouselWithProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselWithProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselWithProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
