import { TestBed } from '@angular/core/testing';

import { RecoverAccountApiService } from './recover-account-api.service';

describe('RecuperaContaApiService', () => {
  let service: RecoverAccountApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoverAccountApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
