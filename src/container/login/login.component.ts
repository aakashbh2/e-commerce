import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.css'],
    providers: []
})

export class LoginComponent {

  name: string;
  password: string;
  email: string;
  username: string;
  passkey: string;

  constructor (private titleService: Title) {
    this.titleService.setTitle('Sign In');
  }

  signin() {
  }

  signup() {
    console.log(this.name);
  }
}
