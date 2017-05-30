import { TestBed, inject } from '@angular/core/testing';

import { IdentifiedService } from './identified.service';

describe('IdentifiedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdentifiedService]
    });
  });

  it('should be created', inject([IdentifiedService], (service: IdentifiedService) => {
    expect(service).toBeTruthy();
  }));
});
