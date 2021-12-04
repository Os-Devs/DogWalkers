import { TestBed } from '@angular/core/testing';

import { FirestoreComentarioService } from './firestore-comentario.service';

describe('FirestoreComentarioService', () => {
  let service: FirestoreComentarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreComentarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
