import { TestBed } from '@angular/core/testing';

import { ServiceByCatService } from './service-by-cat.service';

describe('ServiceByCatService', () => {
  let service: ServiceByCatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceByCatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
