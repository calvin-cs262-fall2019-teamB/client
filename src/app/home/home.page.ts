/**
 * home.page.ts is the file to run the home page
 * 
 * @authors Josh Bussis and Bryan Fowler
 * Edited by: Bryce Allen, 11/21/19
 */
import { Component } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';
import { Person } from '../interfaces/person';
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
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  // moc-person structure
  kvlinden: Person = {
    name: 'Keith Vander Linden',
    email : 'kvlinden@calvin.edu',
    password : 'asdf',
    description: 'I am a professor at Calvin University. I enjoy long walks at the beach, tea, and computers.',
    age : 45,
    expanded: false
  };

  // image for home page
  image = 'https://www.bgreco.net/wkwt/3406/3426621412_8628da6e13.jpg';

  constructor(public theme: ThemeService, public personService: PersonService, private router: Router, private settings: SettingsService) {

    if (this.settings.darkMode) {
      this.theme.setTheme(themes.night);
    } else {
      this.theme.setTheme(themes.day);
    }
  }

  // navigation functions
  goToMatches() {
    // navigates to the home page
    this.router.navigateByUrl('/matches');
  }

  goToPersonal() {
    // navigates to the personal page
    this.router.navigateByUrl('/personal');
  }

}
