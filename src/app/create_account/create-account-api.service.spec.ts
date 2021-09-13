import { TestBed } from '@angular/core/testing';

import { CriaContaApiService } from './create-account-api.service';

describe('CriaContaApiService', () => {
  let service: CriaContaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriaContaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
