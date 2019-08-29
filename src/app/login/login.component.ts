import { AuthenticationService } from './../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
 onLogin(data) {
  this.authService.login(data)
  .subscribe(resp => {
    console.log(resp);

    // tslint:disable-next-line: no-string-literal
    let jwt = resp.body['token'];
    this.authService.saveToken(jwt);
    this.router.navigateByUrl('/');
  }, err => {

  });
}

}
