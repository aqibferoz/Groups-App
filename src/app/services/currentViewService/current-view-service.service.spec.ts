import { TestBed } from '@angular/core/testing';

import { CurrentViewServiceService } from './current-view-service.service';

describe('CurrentViewServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentViewServiceService = TestBed.get(CurrentViewServiceService);
    expect(service).toBeTruthy();
  });
});
