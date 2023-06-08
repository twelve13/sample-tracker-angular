import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionSetDetailsComponent } from './extraction-set-details.component';

describe('ExtractionSetDetailsComponent', () => {
  let component: ExtractionSetDetailsComponent;
  let fixture: ComponentFixture<ExtractionSetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractionSetDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractionSetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
