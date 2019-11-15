/**
 * matches.page.ts is the file that runs the matches page
 * 
 * @authors   Josh Bussis and Bryan Fowler
 */
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
  itemExpandHeight = 50;

  constructor(private router: Router) {
    // this will just be some dummy data for now
    this.matches = [
      { name: 'Samuel L. Jackson',
        email: 'slj01@students.calvin.edu',
        password: 'password123',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 70,
        expanded: false
      },
      { name: 'Chad',
        email: 'cst69@students.calvin.edu',
        password: 'password123',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 21,
        expanded: false
      },
      { name: 'Stinky Pete',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 65,
        expanded: false
      },
      { name: 'Herb Williams',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 65,
        expanded: false
      },
      { name: 'Josh Philips',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 65,
        expanded: false
      },
      { name: 'Sean Veel',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 65,
        expanded: false
      },
      { name: 'Joey Smith',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 65,
        expanded: false
      },
      { name: 'Jack Steers',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 65,
        expanded: false
      },
      { name: 'Kurt Peters',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 65,
        expanded: false
      },
      { name: 'John Doe',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 65,
        expanded: false
      },
      { name: 'George Michael',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 65,
        expanded: false
      },
      { name: 'Hugh Jackman',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 65,
        expanded: false
      },
      { name: 'Tanjiro Kamado',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 65,
        expanded: false
      },
      { name: 'William M. Buttlicker',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 65,
        expanded: false
      },
      { name: 'Dwight Shrute',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 65,
        expanded: false
      },
      { name: 'Michael Bluth',
        email: 'sp02@students.calvin.edu',
        password: 'password',
        description: 'This is an example description for testing purposes.  I am a person, not a robot... I swear.  How about the weather we have been having?',
        age: 65,
        expanded: false
      },

    ];
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
    this.router.navigateByUrl('/personal');
  }

}
