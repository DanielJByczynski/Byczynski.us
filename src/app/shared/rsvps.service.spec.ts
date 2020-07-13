import { TestBed } from '@angular/core/testing';

import { RsvpsService } from './rsvps.service';

describe('RsvpsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RsvpsService = TestBed.get(RsvpsService);
    expect(service).toBeTruthy();
  });
});
