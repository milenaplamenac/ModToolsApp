import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedPredictionComponent } from './processed-prediction.component';

describe('ProcessedPredictionComponent', () => {
  let component: ProcessedPredictionComponent;
  let fixture: ComponentFixture<ProcessedPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
