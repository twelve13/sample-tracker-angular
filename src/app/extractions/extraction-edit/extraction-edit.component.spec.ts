import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionEditComponent } from './extraction-edit.component';

describe('ExtractionEditComponent', () => {
  let component: ExtractionEditComponent;
  let fixture: ComponentFixture<ExtractionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
