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
import { FirebaseService } from '../services/firebase.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { User } from '../interfaces/user';
import { ChatService } from '../services/chat.service';
import { LikesService } from '../services/likes.service';

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
  /*
  Need to implement if matched equals true,
  Chats should be created when someone matches
  with another person for testing we always
  assume they've matched
  */
  matched = true; 
  userID: string; 

  
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
              private router: Router, private settings: SettingsService, 
              private db: FirebaseService,
              private likeServ: LikesService,
              private chat: ChatService) {

    if (this.settings.darkMode) {
      this.theme.setTheme(themes.night);
    } else {
      this.theme.setTheme(themes.day);
    }

    // this.db.getUser().subscribe(data => {
    //   console.log(data[0].payload.doc);
    // });
    this.db.getUser().subscribe(data => {
      console.log(data[0]);
      this.currentIndex = 0;
      
      this.personToMatch = data[this.currentIndex];
    });
  }

  // navigation functions
  goToMatches() {
    // navigates to the home page
    this.router.navigateByUrl('/matches');
  }

  goToPersonal() {
    // navigates to the personal page
    this.router.navigateByUrl('/account');
  }

  /*
    In the future this function will
    read the database to view if the other person
    was liked or whatever
  */ 
  getLikes() {
    return this.matched;
  }

  match() {
    var users = this.db.getUsers(); 
    
    this.currentIndex++;

    this.db.getUser().subscribe(data => {
      this.personToMatch = data[this.currentIndex];
    });

    this.likeServ.updateLikes('TestUID');
    


    if (this.getLikes) {
      //this.chatSer.create(); 
    }

    



  }

  unMatch() {
    this.currentIndex++;
    this.db.getUser().subscribe(data => {
      this.personToMatch = data[this.currentIndex];
    });
  }

}
