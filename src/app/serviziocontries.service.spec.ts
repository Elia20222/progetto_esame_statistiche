import { TestBed } from '@angular/core/testing';

import { ServiziocontriesService } from './serviziocontries.service';

describe('ServiziocontriesService', () => {
  let service: ServiziocontriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiziocontriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
