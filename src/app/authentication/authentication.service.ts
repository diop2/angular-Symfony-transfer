import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
host2 = 'http://127.0.0.1:8000/api/login_check';

jwt: string;
username: string;
roles: Array<string>;

  saveToken(jwt: any) {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parsJWT();
  }
  login(data) {
    return this.http.post(this.host2  , data, {observe: 'response'});
  }
  parsJWT() {
 let jwtHelper = new JwtHelperService();
 let objJWT = jwtHelper.decodeToken(this.jwt);
 this.username = objJWT.obj;
 this.roles = objJWT.roles;
  }

  isADMIN_PARTENAIRE() {
    return this.roles.indexOf('ADMIN_PARTENAIRE') >= 0;
    // throw new Error('Method not implemented.');
  }
  isADMIN_SYSTEME() {
    return this.roles.indexOf('ADMIN_SYSTEME') >= 0;
    // throw new Error('Method not implemented.');
  }

  isAuthenticated() {
    return this.roles && (this.isADMIN_SYSTEME() || this.isADMIN_PARTENAIRE());
  }
  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parsJWT();
    // throw new Error("Method not implemented.");
   }

   logOut() {
localStorage.removeItem('token');
this.initParams();

   // throw new Error("Method not implemented.");
  }

  initParams() {
    this.jwt = undefined ;
    this.username = undefined;
    this.roles = undefined;
  }
}
