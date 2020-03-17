import { TestBed } from '@angular/core/testing';

import { ApiGeneratedClientService } from './api-generated-client.service';

describe('ApiGeneratedClientService', () => {
  let service: ApiGeneratedClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGeneratedClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
