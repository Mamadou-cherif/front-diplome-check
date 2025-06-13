import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTabComponent } from './bar-tab.component';

describe('BarTabComponent', () => {
  let component: BarTabComponent;
  let fixture: ComponentFixture<BarTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
