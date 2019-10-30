import { Component } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
