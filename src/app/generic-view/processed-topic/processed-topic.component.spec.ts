import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedTopicComponent } from './processed-topic.component';

describe('ProcessedTopicComponent', () => {
  let component: ProcessedTopicComponent;
  let fixture: ComponentFixture<ProcessedTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
