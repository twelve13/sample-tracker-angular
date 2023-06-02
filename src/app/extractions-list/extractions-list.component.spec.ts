import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionsListComponent } from './extractions-list.component';

describe('ExtractionsListComponent', () => {
  let component: ExtractionsListComponent;
  let fixture: ComponentFixture<ExtractionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractionsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
