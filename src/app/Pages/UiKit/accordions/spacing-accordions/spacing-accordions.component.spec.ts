import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacingAccordionsComponent } from './spacing-accordions.component';

describe('SpacingAccordionsComponent', () => {
  let component: SpacingAccordionsComponent;
  let fixture: ComponentFixture<SpacingAccordionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacingAccordionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpacingAccordionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
