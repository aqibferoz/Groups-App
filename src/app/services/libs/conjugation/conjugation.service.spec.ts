import { TestBed } from '@angular/core/testing';

import { ConjugationService } from './conjugation.service';

describe('ConjugationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConjugationService = TestBed.get(ConjugationService);
    expect(service).toBeTruthy();
  });
});
