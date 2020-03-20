import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedPolicyGuideComponent } from './processed-policy-guide.component';

describe('ProcessedPolicyGuideComponent', () => {
  let component: ProcessedPolicyGuideComponent;
  let fixture: ComponentFixture<ProcessedPolicyGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedPolicyGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedPolicyGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
