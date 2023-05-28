import { TestBed } from '@angular/core/testing';

import { EndpointservizioService } from './endpointservizio.service';

describe('EndpointservizioService', () => {
  let service: EndpointservizioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointservizioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
