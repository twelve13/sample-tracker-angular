import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionSetComponent } from './extraction-set.component';

describe('ExtractionSetComponent', () => {
  let component: ExtractionSetComponent;
  let fixture: ComponentFixture<ExtractionSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractionSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractionSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
