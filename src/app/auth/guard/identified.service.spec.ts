import { TestBed, inject } from '@angular/core/testing';

import { IdentifiedService } from './identified.service';
import { AuthService } from '../auth.service'

describe('IdentifiedService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                IdentifiedService,
                {provide: AuthService, useValue: {}}
            ]
        });
    });

    it('should be created', inject([IdentifiedService], (service: IdentifiedService) => {
        expect(service).toBeTruthy();
    }));
});
