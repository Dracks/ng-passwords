import { Injectable } from "@angular/core";
import { RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { ConfigBase } from "libs/ng-data-rest";

import { environment } from 'environments/environment';

import { AuthService } from "app/auth/auth.service";


@Injectable()
export default class RestConfig extends ConfigBase {

    constructor(private auth: AuthService) {
        super()
    }

    getEndpoint(cName: string, id?: string): string {
        var endpoint = super.getEndpoint(cName, id);
        return environment.api.host + '/api' + endpoint;
    }

    getAuth(ro: RequestOptions, cName: string): Promise<RequestOptions>{
        return this.auth.authorize(ro)
    }
}
