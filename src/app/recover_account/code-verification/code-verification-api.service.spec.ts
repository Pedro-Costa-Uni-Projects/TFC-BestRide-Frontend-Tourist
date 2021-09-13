import { TestBed } from '@angular/core/testing';

import { CodeVerificationApiService } from './code-verification-api.service';

describe('codeVerificationPageModule', () => {
  let service: CodeVerificationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeVerificationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});