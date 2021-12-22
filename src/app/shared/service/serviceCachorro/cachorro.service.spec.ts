import { TestBed } from '@angular/core/testing';

import { CachorroService } from './cachorro.service';

describe('CachorroService', () => {
  let service: CachorroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CachorroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
