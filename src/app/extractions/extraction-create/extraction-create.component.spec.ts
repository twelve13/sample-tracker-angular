import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionCreateComponent } from './extraction-create.component';

describe('ExtractionCreateComponent', () => {
  let component: ExtractionCreateComponent;
  let fixture: ComponentFixture<ExtractionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractionCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
