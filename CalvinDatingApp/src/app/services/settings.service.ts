import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public userName: string;
  public darkMode: boolean;
  public fontSize: string;

  constructor(private storage: Storage) { }

  saveUserName(name: string) {
    // check if the user has input a username
    if (name !== '') {
      this.userName = name;
      this.storage.set('userName', this.userName);
      // immediately call the getUserName() fuction
      // this.getUserName();
    }
  }

  getUserName(): string {
    this.storage.get('userName').then((val) => {
      console.log('Your username is: ', val);
      // store the value to the app
      this.userName = val;
      console.log('your new username is: ' + this.userName);
    });
    return this.userName;
  }

  saveDarkMode(mode: boolean) {
    this.darkMode = mode;
    this.storage.set('darkMode', this.darkMode);
    // immediately call the getDarkMode() function
    //this.getDarkMode();
  }

  getDarkMode(): boolean {
    this.storage.get('darkMode').then((val) => {
      console.log('Dark mode enabled: ', val);
      // store the value to the app
      this.darkMode = val;
      console.log('Dark mode enabled: ' + String(val));
      if (this.darkMode === true) {
        console.log('dark mode enabled');
      } else {
        console.log('dark mode disabled');
      }
    });
    return this.darkMode;
  }

  saveFontSize(font: string) {
    this.fontSize = font;
    this.storage.set('fontSize', this.fontSize);
    // immediately call the getFontSize()
    // this.getFontSize();
  }

  getFontSize(): string {
    this.storage.get('fontSize').then((val) => {
      console.log('Font size is: ', val);
      // store the value to the app
      this.fontSize = val;
      console.log('Font size: ' + this.fontSize);
    });
    return this.fontSize;
  }

  factoryBtnClicked() {
    // set factory data
    this.userName = 'username';
    this.darkMode = false;
    this.fontSize = 'normal';
    // save this factory data
    this.saveUserName(this.userName);
    this.saveDarkMode(this.darkMode);
    this.saveFontSize('normal');
  }
}
