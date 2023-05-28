import { TestBed } from '@angular/core/testing';

import { ServizionoGareService } from './serviziono-gare.service';

describe('ServizionoGareService', () => {
  let service: ServizionoGareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServizionoGareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
