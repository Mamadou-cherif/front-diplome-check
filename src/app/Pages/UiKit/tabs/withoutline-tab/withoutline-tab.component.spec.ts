import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutlineTabComponent } from './withoutline-tab.component';

describe('WithoutlineTabComponent', () => {
  let component: WithoutlineTabComponent;
  let fixture: ComponentFixture<WithoutlineTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithoutlineTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithoutlineTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
