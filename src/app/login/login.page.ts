/**
 * login.page.ts is the file that runs the login page
 * 
 * @authors   Josh Bussis and Bryan Fowler
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';

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

  constructor(private settings: SettingsService, private router: Router) {
    this.validEmail = false;
    this.validPassword = false;

   }

   // make sure to get the saved data on the phone
  ngOnInit() {
    this.settings.getUserName();
    this.settings.getDarkMode();
    this.settings.getFontSize();
  }

  // check if the entered email is correct
  checkEmail() {
    if (this.email === 'test123@students.calvin.edu') {
      this.validEmail = true;
    } else {
      this.validEmail = false;
    }
  }

  // check if the entered email is correct
  checkPassword() {
    if (this.password === 'Password123') {
      this.validPassword = true;
    } else {
      this.validPassword = false;
    }
  }

  // button click method
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
