import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsTabComponent } from './pills-tab.component';

describe('PillsTabComponent', () => {
  let component: PillsTabComponent;
  let fixture: ComponentFixture<PillsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PillsTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PillsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
