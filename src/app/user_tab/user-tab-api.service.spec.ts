import { TestBed } from '@angular/core/testing';

import { DadosContaApiService } from './user-tab-api.service';

describe('DadosContaApiService', () => {
  let service: DadosContaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosContaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
