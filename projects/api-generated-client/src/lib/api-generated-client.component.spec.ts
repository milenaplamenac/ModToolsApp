import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGeneratedClientComponent } from './api-generated-client.component';

describe('ApiGeneratedClientComponent', () => {
  let component: ApiGeneratedClientComponent;
  let fixture: ComponentFixture<ApiGeneratedClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiGeneratedClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiGeneratedClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
