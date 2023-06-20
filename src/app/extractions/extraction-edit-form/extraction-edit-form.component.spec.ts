import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionEditFormComponent } from './extraction-edit-form.component';

describe('ExtractionEditFormComponent', () => {
  let component: ExtractionEditFormComponent;
  let fixture: ComponentFixture<ExtractionEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractionEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractionEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
