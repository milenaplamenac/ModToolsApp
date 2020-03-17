import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedWordComponent } from './processed-word.component';

describe('ProcessedWordComponent', () => {
  let component: ProcessedWordComponent;
  let fixture: ComponentFixture<ProcessedWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
