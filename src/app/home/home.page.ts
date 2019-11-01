/*
  home.page.ts is the file to run the home page
  Made by Josh Bussis with help from Bryan Fowler
*/
import { Component } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  kvlinden: Person = {
    name: 'Keith Vander Linden',
    email : 'kvlinden@calvin.edu',
    password : 'asdf',
    description: 'I am a professor at Calvin University. I enjoy long walks at the beach with my wife Brenda.',
    age : 45
  };

  image = 'https://www.bgreco.net/wkwt/3406/3426621412_8628da6e13.jpg'

  constructor(public personService: PersonService, private router: Router, private settings: SettingsService) {
    this.settings.getUserName();
    this.settings.getDarkMode();
    this.settings.getFontSize();
  }

  goToMatches() {
    // navigates to the home page
    this.router.navigateByUrl('/matches');
  }

  goToPersonal() {
    // navigates to the personal page
    this.router.navigateByUrl('/personal');
  }

}
