import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from 'rxjs';
import { environment } from "environments/environment";
import 'rxjs/add/operator/toPromise';

const serverTokenEndpoint = environment.api.host + '/oauth/token/'

class CredentialsTokenAuth {
    access_token: string
    refresh_token: string
    scope: string[]
    token_type: string
    expiration: Date

    constructor(json: any) {
        this.access_token = json.access_token;
        this.refresh_token = json.refresh_token;
        this.scope = json.scope;
        this.token_type = json.token_type;
        var now = new Date();
        console.log(now);
        now.setSeconds(now.getSeconds()+ json.expires_in);
        console.log(now);
        this.expiration =  now;
    }
}

@Injectable()
export class AuthService {
    credentials: CredentialsTokenAuth

    get isSignedIn() {
        return !!this.credentials
    }

    constructor(private http: Http) {
    }

    private _getRequestOptions(){
        const key = window.btoa(environment.api.clientId + ':' + environment.api.clientSecret)
        const h = new Headers();
        h.append('Authorization', 'Basic ' + key);
        h.append('Content-Type', 'application/x-www-form-urlencoded');
        const requestOptions = new RequestOptions({
            headers: h,
        })
        return requestOptions;
    }

    login(user: string, password: string) {
        const data = { 'grant_type': 'password', username: user, password: password };
        const scopesString = "";
        const requestOptions = this._getRequestOptions();
        return this.http.post(serverTokenEndpoint, this.urlEncode(data), requestOptions)
            .toPromise()
            .then((response) => {
                this.credentials = new CredentialsTokenAuth(response.json());
                return true;
            });
    }

    renewToken(){
        const data = { 'grant_type': 'refresh_token', 'refresh_token': this.credentials.refresh_token}
        const requestOptions = this._getRequestOptions();
        return this.http.post(serverTokenEndpoint, this.urlEncode(data), requestOptions)
            .toPromise()
            .then((response) => {
                this.credentials = new CredentialsTokenAuth(response.json());
                return true;
            });
    }

    urlEncode(obj) {
        var r = '';
        for (var key in obj) {
            r += encodeURI(key) + '=' + encodeURI(obj[key]) + '&';
        }
        return r;
    }
    private _attachToken(ro: RequestOptions){
        if (!ro.headers){
            ro.headers = new Headers()
        }
        ro.headers.append('Authorization', this.credentials.token_type+' '+this.credentials.access_token);
        return ro;
    }
    authorize(ro: RequestOptions): Promise<RequestOptions>{
        if (this.credentials.expiration>new Date()){
            return Observable.of(this._attachToken(ro)).toPromise();
        } else {
            return this.renewToken().then(()=>this._attachToken(ro));
        }
    }

    /*
    From ember application

      authenticate(identification, password, scope = []) {
    return new RSVP.Promise((resolve, reject) => {
      const data                = { 'grant_type': 'password', username: identification, password };
      const serverTokenEndpoint = this.get('serverTokenEndpoint');
      const scopesString = Ember.makeArray(scope).join(' ');
      if (!Ember.isEmpty(scopesString)) {
        data.scope = scopesString;
      }
      this.makeRequest(serverTokenEndpoint, data).then((response) => {
        run(() => {
          const expiresAt = this._absolutizeExpirationTime(response['expires_in']);
          this._scheduleAccessTokenRefresh(response['expires_in'], expiresAt, response['refresh_token']);
          if (!isEmpty(expiresAt)) {
            response = Ember.merge(response, { 'expires_at': expiresAt });
          }
          resolve(response);
        });
      }, (xhr) => {
        run(null, reject, xhr.responseJSON || xhr.responseText);
      });
    });

   authorize(data, block) {
    const accessToken = data['access_token'];
    if (!isEmpty(accessToken)) {
      block('Authorization', `Bearer ${accessToken}`);
    }
  }
    makeRequest(url, data) {
		var options = {
			url: url,
			data: data,
			type: 'POST',
			dataType: 'json',
			contentType: 'application/x-www-form-urlencoded'
		};
		var clientId = this.get('clientId');

		if (!Ember.isEmpty(clientId)) {
			var base64ClientId = window.btoa(clientId.join(':'));
			Ember.merge(options, {
				headers: {
					Authorization: 'Basic ' + base64ClientId
				}
			});
		}

		return Ember.$.ajax(options);
	}



    */

}
