import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithIconsComponent } from './with-icons.component';

describe('WithIconsComponent', () => {
  let component: WithIconsComponent;
  let fixture: ComponentFixture<WithIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
