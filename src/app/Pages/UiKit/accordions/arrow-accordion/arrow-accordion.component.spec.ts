import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowAccordionComponent } from './arrow-accordion.component';

describe('ArrowAccordionComponent', () => {
  let component: ArrowAccordionComponent;
  let fixture: ComponentFixture<ArrowAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
