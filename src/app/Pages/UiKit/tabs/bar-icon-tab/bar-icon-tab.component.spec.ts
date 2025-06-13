import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarIconTabComponent } from './bar-icon-tab.component';

describe('BarIconTabComponent', () => {
  let component: BarIconTabComponent;
  let fixture: ComponentFixture<BarIconTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarIconTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarIconTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
