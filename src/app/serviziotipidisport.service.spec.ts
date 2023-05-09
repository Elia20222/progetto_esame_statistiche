import { TestBed } from '@angular/core/testing';

import { ServiziotipidisportService } from './serviziotipidisport.service';

describe('ServiziotipidisportService', () => {
  let service: ServiziotipidisportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiziotipidisportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
