import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModelDiplomeComponent } from './list-model-diplome.component';

describe('ListModelDiplomeComponent', () => {
  let component: ListModelDiplomeComponent;
  let fixture: ComponentFixture<ListModelDiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListModelDiplomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListModelDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
