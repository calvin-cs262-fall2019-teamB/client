import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SettingsService } from '../services/settings.service';
import { ThemeService } from '../services/theme.service';

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
    this.darkMode = this.settings.getDarkMode();
    
    if(this.darkMode == false) {
      this.settings.saveDarkMode(true); 
      console.log(this.settings.getDarkMode());
      this.theme.setDarkModeTrue();      
    } 
    if(this.darkMode == true) {
      
      this.settings.saveDarkMode(false); 
      console.log(this.settings.getDarkMode());
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
