/**
 * home.page.ts is the file to run the home page
 * 
 * @authors Josh Bussis and Bryan Fowler
 */
import { Component } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';
import { Person } from '../interfaces/person';
import { ThemeService } from '../services/theme.service';
import { FirebaseService } from '../services/firebase.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { User } from '../interfaces/user';

// custom themes for dark mode
const themes = {
  day: {
    primary: '#950000',
    secondary: '#fde611',
    tertiary: '#c0c0c0',
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
  // kvlinden: Person = {
  //   name: 'Keith Vander Linden',
  //   email : 'kvlinden@calvin.edu',
  //   password : 'asdf',
  //   description: 'I am a professor at Calvin University. I enjoy long walks at the beach, tea, and computers.',
  //   age : 45,
  //   expanded: false
  // };
  //currentUsers: User[];
  personToMatch: User = {
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
  currentIndex: number = 0;

  // image for home page
  //image = 'https://www.bgreco.net/wkwt/3406/3426621412_8628da6e13.jpg';

  constructor(public theme: ThemeService, public personService: PersonService,
              private router: Router, private settings: SettingsService, private db: FirebaseService) {

    if (this.settings.darkMode) {
      this.theme.setTheme(themes.night);
    } else {
      this.theme.setTheme(themes.day);
    }

    // this.db.getUser().subscribe(data => {
    //   console.log(data[0].payload.doc);
    // });
    this.db.getUser().subscribe(data => {
      console.log(data);
      this.currentIndex = 0;
      this.personToMatch = data[this.currentIndex];
    });

    // this.db.createUser('John Doe', 'jd1@students.calvin.edu', 'This is a test account to see if firebase is working.',
    //                     19, 'Password123', 'picture.jpg', 'male', [], []);
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

  match() {
    this.currentIndex++;

    this.db.getUser().subscribe(data => {
      this.personToMatch = data[this.currentIndex];
    });
  }

  unMatch() {
    this.currentIndex++;
    this.db.getUser().subscribe(data => {
      this.personToMatch = data[this.currentIndex];
    });
  }

}
