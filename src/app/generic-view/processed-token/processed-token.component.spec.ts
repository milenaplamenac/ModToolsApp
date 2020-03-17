import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedTokenComponent } from './processed-token.component';

describe('ProcessedTokenComponent', () => {
  let component: ProcessedTokenComponent;
  let fixture: ComponentFixture<ProcessedTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
