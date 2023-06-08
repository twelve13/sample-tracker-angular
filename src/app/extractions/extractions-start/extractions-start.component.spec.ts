import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionsStartComponent } from './extractions-start.component';

describe('ExtractionsStartComponent', () => {
  let component: ExtractionsStartComponent;
  let fixture: ComponentFixture<ExtractionsStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractionsStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractionsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
