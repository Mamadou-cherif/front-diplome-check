import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablesComponent } from './datatables.component';

describe('DatatablesComponent', () => {
  let component: DatatablesComponent;
  let fixture: ComponentFixture<DatatablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
