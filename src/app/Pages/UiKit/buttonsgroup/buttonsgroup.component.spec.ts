import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsgroupComponent } from './buttonsgroup.component';

describe('ButtonsgroupComponent', () => {
  let component: ButtonsgroupComponent;
  let fixture: ComponentFixture<ButtonsgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsgroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
