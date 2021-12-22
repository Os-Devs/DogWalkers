import { TestBed } from '@angular/core/testing';

import { FirestorePrestadorService } from './firestore-prestador.service';

describe('FirestorePrestadorService', () => {
  let service: FirestorePrestadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestorePrestadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
