/**
 * login.page.ts is the file that runs the login page
 *
 * @authors   Josh Bussis and Bryan Fowler
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private email: string;
  private password: string;

  constructor(private settings: SettingsService,
              private router: Router,
              private storage: Storage,
              private auth: AuthenticateService) {

  }

  // make sure to get the saved data on the phone
  ngOnInit() {
    //this.settings.getUserName();
    this.settings.getDarkMode();
  }


  // button click method
  loginBtnClicked() {
    this.auth.login(this.email, this.password);
    // Error Checking Needed is in auth service
  }

  gotoNewUser() {
    // navigates to the new user page
    this.router.navigateByUrl('/newuser');
  }

}
