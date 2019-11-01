import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SettingsService } from '../services/settings.service';
import { ThemeService } from '../services/theme.service';


const themes = {
  day: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    tertiary: '#FFFFFF',
    light: '#FFFFFF',
    medium: '#FFFFFF',
    dark: '#FFFFFF'
  },
  night: {
    primary: '#8CBA80',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    medium: '#BCC2C7',
    dark: '#F7F7FF',
    light: '#495867'
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

  darkModeToggle() {  
    if(!this.settings.darkMode) { 
      this.settings.saveDarkMode(true);
      this.theme.setTheme(themes.night);        
    } else {
      this.settings.saveDarkMode(false);
      this.theme.setTheme(themes.day);     
    }
  }

  saveUserName(name: string) {
    this.settings.saveUserName(name);
  }

  saveFontSize(size: string) {
    this.settings.saveFontSize(size);
  }

  getUserName() {
    console.log('username clicked');
    this.settings.getUserName();
  }

  getDarkMode() {
    console.log('darkmode clicked');
    this.settings.getDarkMode();
  }

  getFontSize() {
    console.log('fontsize clicked');
    this.settings.getFontSize();
  }

  factoryBtnClicked() {
    this.settings.factoryBtnClicked();
  }

  get() {
    console.log("settings userName is: " + this.settings.userName);
  }
}
