/**
 * personal.page.ts is the file that runs the personal settings page
 * 
 * @authors   Josh Bussis, Bryan Fowler, and Brian Goins
 * Edited by: Bryce Allen, 11/21/19
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SettingsService } from '../services/settings.service';
import { ThemeService } from '../services/theme.service';
import { UserDataRWService } from '../services/user-data-rw.service'; 


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
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})



export class AccountPage implements OnInit {

  public userName: string;
  public userAge: number;
  public ageRange: string; 
  public lookingfor: string; 
  public description: string; 
  public pictures: any; 
  public darkMode: boolean;
 


  constructor(private router: Router, private storage: Storage, private settings: SettingsService,
              public theme: ThemeService,
              public dataRW: UserDataRWService) {
    //this.userName = this.dataRW.readData('name');
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

  saveUserName() { this.dataRW.writeName(this.userName); }


  //Age
  saveAge() { this.dataRW.writeAge(this.userAge);}
  
  //Age Range
  saveAgeRange() { this.dataRW.writeAgeRange(this.ageRange);}


  //Description
  saveDescription() { this.dataRW.writeDescription(this.description);}
  

  // get dark mode state
  getDarkMode() {
    console.log('darkmode clicked');
    this.settings.getDarkMode();
  }

  // factory button method
  factoryBtnClicked() {
    this.settings.factoryBtnClicked();
  }

  
  deleteAccount() {

  }
}
