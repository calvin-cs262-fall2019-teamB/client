import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  public userName: string;
  public darkMode: boolean;
  public fontSize: string;

  constructor(private router: Router, private storage: Storage, private settings: SettingsService) {
    this.userName = this.settings.getUserName();
    this.darkMode = this.settings.getDarkMode();
    this.fontSize = this.settings.getFontSize();
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
    this.settings.saveDarkMode(this.darkMode);
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
