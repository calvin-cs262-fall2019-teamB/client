/**
 * matches.page.ts is the file that runs the matches page
 * 
 * @authors   Josh Bussis and Bryan Fowler
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../interfaces/person';
import { Match } from '../interfaces/match';
import { SettingsService } from '../services/settings.service'
import { FirebaseService } from '../services/firebase.service';
import { User } from '../interfaces/user';;
import { ThemeService } from '../services/theme.service';
import { PersonService } from '../services/person.service';

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
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.scss'],
})
export class MatchesPage implements OnInit {

  //matches: Person[] = [];
  itemExpandHeight = 50;
  dummyUser: User = {
    age: 'loading',
    name: 'loading',
    userName: 'loading',
    userEmail: 'loading',
    userDescription: 'loading',
    userAge: 0,
    userPassword: 'loading',
    picture: 'https://peopledotcom.files.wordpress.com/2019/10/mark-zuckerberg.jpg?w=2700&h=1800',
    userGender: 'loading',
    userMatches: [],
    userChats: [],
  };

  matches: Match[] = [
    {
      info: this.dummyUser,
      expanded: false
    },
    {
      info: this.dummyUser,
      expanded: false
    },
    {
      info: this.dummyUser,
      expanded: false
    },
    {
      info: this.dummyUser,
      expanded: false
    }
  ];

  constructor(public theme: ThemeService, public personService: PersonService, private router: Router, private settings: SettingsService, private db: FirebaseService) {
    if (this.settings.darkMode) {
      this.theme.setTheme(themes.night);
    } else {
      this.theme.setTheme(themes.day);
    }

    for (let i = 0; i < 4; i++) {
      this.db.getUser().subscribe(data => {
        this.matches[i].info = data[i];
      });
      this.matches[i].expanded = false;
    }
  }

  ngOnInit() {
  }

  expandItem(item) {
    for(let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].expanded === true && this.matches[i] !== item) {
        this.matches[i].expanded = false;
      }
    }
    item.expanded = !item.expanded;
}

  // navigation functions
  goToChat() {
    // navigates to the chat page
    this.router.navigateByUrl('/chat');
  }

  goToHome() {
    // navigates to the home page
    this.router.navigateByUrl('/home');
  }

  goToPersonal() {
    // navigates to the personal page
    this.router.navigateByUrl('/account');
  }

}
