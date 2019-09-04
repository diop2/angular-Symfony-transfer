import { AuthenticationService } from './authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'fin';
constructor(private authService: AuthenticationService) {}
ngOnInit(): void {

  this.authService.loadToken();
 // throw new Error("Method not implemented.");
}
isADMIN_SYSTEME()   {
  return this.authService.isADMIN_SYSTEME();
}
isADMIN_PARTENAIRE()   {
  return this.authService.isADMIN_PARTENAIRE();
}

isAuthenticated() {
  return this.authService.isAuthenticated();
}
logOut() {
this.authService.logOut();
}
}
