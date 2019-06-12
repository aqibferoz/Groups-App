import { TestBed } from '@angular/core/testing';

import { VerbgroupsService } from './verbgroups.service';

describe('VerbgroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerbgroupsService = TestBed.get(VerbgroupsService);
    expect(service).toBeTruthy();
  });
});
