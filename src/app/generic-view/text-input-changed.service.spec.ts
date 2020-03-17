import { TestBed } from '@angular/core/testing';

import { TextInputChangedService } from './text-input-changed.service';

describe('TextInputChangedService', () => {
  let service: TextInputChangedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextInputChangedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
