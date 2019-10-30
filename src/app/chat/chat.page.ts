import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private router: Router) { }

  messages = [
    {
      user: 'Keith VanderLinden',
      createdAt: 1554090856000,
      msg: 'sup'
    },
    {
      user: 'Also Keith VanderLinden',
      createdAt: 1554090856000,
      msg: 'hey'
    },
    {
      user: 'Keith VanderLinden',
      createdAt: 1554090856000,
      msg: 'drinks?'
    },
    {
      user: 'Also Keith VanderLinden',
      createdAt: 1554090856000,
      msg: 'Yassss'
    }
  ];
  
  currentUser ='Keith VanderLinden';

  sendMessage(){}
  ngOnInit() {
  }

  goToMatches() {
    this.router.navigateByUrl('/matches');
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

  goToPersonal() {
    this.router.navigateByUrl('/personal');
  }

}
