/**
 * settings.service.ts is the file to handle saving user settings on the phone
 * 
 * @author  Josh Bussis
 */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})

export class SettingsService {

  public darkMode: boolean;

  constructor(private storage: Storage) {  }


  // method to save state of dark mode
  saveDarkMode(mode: boolean) {
    this.darkMode = mode;
    this.storage.set('darkMode', this.darkMode);
    // immediately call the getDarkMode() function
    //this.getDarkMode();
  }

  // method to get the state of dark mode
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

  // factory settings set
  factoryBtnClicked() {
    // set factory data
    //this.userName = 'useruserName';
    this.darkMode = false;
    //this.fontSize = 'normal';
    // save this factory data
    //this.saveuseruserName(this.userName);
    this.saveDarkMode(this.darkMode);
  }

  
}
