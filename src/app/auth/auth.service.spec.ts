import { TestBed, inject } from '@angular/core/testing';

import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    RequestMethod,
    RequestOptions,
    XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { LocalStorageService } from 'ngx-webstorage';

import { AuthService } from './auth.service';

describe('AuthService', () => {
    var lssMock: LocalStorageService = jasmine.createSpyObj('LocalStorageService', ['store', 'clear', 'retrieve'])
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers: [
                AuthService,
                { provide: XHRBackend, useClass: MockBackend },
                { provide: LocalStorageService, useValue: lssMock }

            ]
        });
    });

    it('should be created', inject([AuthService], (service: AuthService) => {
        expect(service).toBeTruthy();
    }));
});
