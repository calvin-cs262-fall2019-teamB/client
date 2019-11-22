/**
 * personal.page.ts is the file that runs the personal settings page
 * 
 * @authors   Josh Bussis and Bryan Fowler
 * Edited by: Bryce Allen, 11/21/19
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SettingsService } from '../services/settings.service';
import { ThemeService } from '../services/theme.service';

// custom themes for dark mode
const themes = {
  day: {
    primary: '#8C2131',//'#d33939',//'#950000',
    secondary: '#f3cd00',//'#fde611',
    tertiary: '#ffff',
    light: '#f4f5f8',
    medium: '#989aa2',
    dark: '#222428'
  },
  night: {
    primary: '#565656',
    secondary: '#fde611',
    tertiary: '#1a1a1a',
    medium: '#BCC2C7',
    dark: '#f4f5f8',
    light: '#f4f5f8'
  }
};

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  public userName: string;
  public darkMode: boolean;
  public fontSize: string;

  constructor(private router: Router, private storage: Storage, private settings: SettingsService,
              public theme: ThemeService) {
    this.userName = this.settings.getUserName();
    this.fontSize = this.settings.getFontSize();
    this.darkMode = this.settings.getDarkMode();
   }

  ngOnInit() { }

  // navigation functions
  goToHome() {
    // navigates to the home page
    this.router.navigateByUrl('/home');
  }

  goToMatches() {
    // navigates to the matches page
    this.router.navigateByUrl('/matches');
  }

  settingsButtonClicked() {
    this.settings.saveUserName(this.userName);
  }

  // method to handle darkMode toggle
  darkModeToggle() {
    if (!this.settings.darkMode) {
      this.settings.saveDarkMode(true);
      this.theme.setTheme(themes.night);
    } else {
      this.settings.saveDarkMode(false);
      this.theme.setTheme(themes.day);
    }
  }

  // save entered user name
  saveUserName(name: string) {
    this.settings.saveUserName(name);
  }

  // save the font size selected
  saveFontSize(size: string) {
    this.settings.saveFontSize(size);
  }

  // get current user name
  getUserName() {
    console.log('username clicked');
    this.settings.getUserName();
  }

  // get dark mode state
  getDarkMode() {
    console.log('darkmode clicked');
    this.settings.getDarkMode();
  }

  // get the desired font size
  getFontSize() {
    console.log('fontsize clicked');
    this.settings.getFontSize();
  }

  // factory button method
  factoryBtnClicked() {
    this.settings.factoryBtnClicked();
  }

  // testing function, probably don't need this
  get() {
    console.log("settings userName is: " + this.settings.userName);
  }
}
