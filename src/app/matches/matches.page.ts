import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../interfaces/person';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.scss'],
})
export class MatchesPage implements OnInit {

  matches: Person[] = [];

  constructor(private router: Router) {
    // this will just be some dummy data for now
    this.matches = [
      { name: 'Samuel L. Jackson',
        email: 'slj01@students.calvin.edu',
        password: 'password123',
        description: 'you already know who it is',
        age: 70
      },
      { name: 'Chad',
        email: 'cst69@students.calvin.edu',
        password: 'password123',
        description: 'Hey baby',
        age: 21
      },
      { name: 'Stinky Pete',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'HEHE',
        age: 65
      },
      { name: 'Herb Williams',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'HEHE',
        age: 65
      },
      { name: 'Josh Philips',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'HEHE',
        age: 65
      },
      { name: 'Sean Veel',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'HEHE',
        age: 65
      },
      { name: 'Joey Smith',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'HEHE',
        age: 65
      },
      { name: 'Jack Steers',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'HEHE',
        age: 65
      },
      { name: 'Kurt Peters',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'HEHE',
        age: 65
      },
      { name: 'John Doe',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'HEHE',
        age: 65
      },
      { name: 'George Michael',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'HEHE',
        age: 65
      },
      { name: 'Hugh Jackman',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'HEHE',
        age: 65
      },
      { name: 'Tanjiro Kamado',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'HEHE',
        age: 65
      },
      { name: 'William M. Buttlicker',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'HEHE',
        age: 65
      },
      { name: 'Dwight Shrute',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'HEHE',
        age: 65
      },
      { name: 'Michael Bluth',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'HEHE',
        age: 65
      },

    ];
  }

  ngOnInit() {
  }

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
    this.router.navigateByUrl('/personal');
  }

}
