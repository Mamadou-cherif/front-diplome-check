import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTopComponent } from './chart-top.component';

describe('ChartTopComponent', () => {
  let component: ChartTopComponent;
  let fixture: ComponentFixture<ChartTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
