import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWithPaginationComponent } from './carousel-with-pagination.component';

describe('CarouselWithPaginationComponent', () => {
  let component: CarouselWithPaginationComponent;
  let fixture: ComponentFixture<CarouselWithPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselWithPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselWithPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
