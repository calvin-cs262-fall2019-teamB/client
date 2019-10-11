import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private email: string;
  private password: string;
  private validEmail: boolean;
  private validPassword: boolean;

  constructor(private router: Router) {
    this.validEmail = false;
    this.validPassword = false;
   }

  ngOnInit() {
  }

  checkEmail() {
    if (this.email === 'test123@students.calvin.edu') {
      this.validEmail = true;
    } else {
      this.validEmail = false;
    }
  }

  checkPassword() {
    if (this.password === 'Password123') {
      this.validPassword = true;
    } else {
      this.validPassword = false;
    }
  }

  loginBtnClicked() {
    this.checkEmail();
    this.checkPassword();

    if (this.validEmail && this.validPassword) {
      this.router.navigateByUrl('/home');
    } else {
      alert('Could not find email or password');
    }
  }

}
