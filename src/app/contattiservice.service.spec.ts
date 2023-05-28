import { TestBed } from '@angular/core/testing';

import { ContattiserviceService } from './contattiservice.service';

describe('ContattiserviceService', () => {
  let service: ContattiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContattiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
