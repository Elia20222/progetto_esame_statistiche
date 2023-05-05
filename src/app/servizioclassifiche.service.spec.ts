import { TestBed } from '@angular/core/testing';

import { ServizioclassificheService } from './servizioclassifiche.service';

describe('ServizioclassificheService', () => {
  let service: ServizioclassificheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServizioclassificheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
