import { TestBed } from '@angular/core/testing';

import { ServizioatletiService } from './servizioatleti.service';

describe('ServizioatletiService', () => {
  let service: ServizioatletiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServizioatletiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
