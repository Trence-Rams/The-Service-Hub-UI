import { TestBed } from '@angular/core/testing';

import { CompanyregistrationService } from './companyregistration.service';

describe('CompanyregistrationService', () => {
  let service: CompanyregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
