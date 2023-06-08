import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplingListComponent } from './sampling-list.component';

describe('SamplingListComponent', () => {
  let component: SamplingListComponent;
  let fixture: ComponentFixture<SamplingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
