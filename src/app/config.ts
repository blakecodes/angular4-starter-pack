/* ********
*
* useJWT: boolean
*   true: use auth0LoginUrl for the login url. Must be a valid JWT authentication service 
*   false: use any other service, but should return a valid, mock JWT token
*
* auth0LoginUrl: string
*   URL for JWT authentication service
*
* loginUrl: string
*   URL for mock JWT service
*
* baseApiUrl: string
*   URL for your API service
*
*/
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class Config {

    public authRequired: boolean   = true;

    public tokenName: string       = 'sessionToken';
    public roleProperty: string    = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

    public environment: string     = 'production';
    private useJWT: boolean        = true;
    private debugMode: boolean     = false;

    private path;
    private xdebug: string         = 'XDEBUG_SESSION_START=15038';
    
    private productionUrl: string  = 'http://localhost:5100/api';
    private developmentUrl: string = 'http://localhost:5100/api';

    private jwtLoginUrl: string    = 'http://localhost:5100/api/account/login';
    private loginUrl: string       = '/login';


    constructor(@Inject('Window') window: Window) { }

    public getHostname() {
        return window.location.hostname;
    }



    public isJwt() {
        return this.useJWT;
    }




    public suffix() {
        if ( this.debugMode ) {
            if ( this.path.indexOf('?') > -1 ) {
                return '&' + this.xdebug;
            } else {
                return '?' + this.xdebug;
            }
        }

        return '';
    }




    public getLoginUrl() {
        if (this.isJwt()) {
            this.path = this.jwtLoginUrl;
            return this.path + this.suffix();
        } else {
            this.path = this.getBaseUrl() + this.loginUrl;
            return this.path + this.suffix();
        }
    }




    public getUrl(path: string) {
        this.path = path;
        return this.getBaseUrl() + path + this.suffix();
    }




    public getBaseUrl() {
        if ( this.environment === 'production' ) {
            return this.productionUrl;
        }

        return this.developmentUrl;
    }

};
