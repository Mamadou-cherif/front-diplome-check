import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditablesComponent } from './editables.component';

describe('EditablesComponent', () => {
  let component: EditablesComponent;
  let fixture: ComponentFixture<EditablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
