import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleEditFormComponent } from './sample-edit-form.component';

describe('SampleEditFormComponent', () => {
  let component: SampleEditFormComponent;
  let fixture: ComponentFixture<SampleEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
