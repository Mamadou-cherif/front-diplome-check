import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAccordionsComponent } from './color-accordions.component';

describe('ColorAccordionsComponent', () => {
  let component: ColorAccordionsComponent;
  let fixture: ComponentFixture<ColorAccordionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorAccordionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorAccordionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
