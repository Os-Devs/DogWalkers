import { TestBed } from '@angular/core/testing';

import { FirestoreClienteService } from './firestore-cliente.service';

describe('FirestoreClienteService', () => {
  let service: FirestoreClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
