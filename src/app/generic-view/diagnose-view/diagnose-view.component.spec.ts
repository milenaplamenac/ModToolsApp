import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnoseViewComponent } from './diagnose-view.component';

describe('DiagnoseViewComponent', () => {
  let component: DiagnoseViewComponent;
  let fixture: ComponentFixture<DiagnoseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnoseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnoseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
