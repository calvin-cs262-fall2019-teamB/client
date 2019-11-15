/**
 * chat.page.ts is the main file to run the chat page
 * @authors   Josh Bussis and Charlie Newton
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private router: Router) { }
  // dummy data
  messages = [
    {
      user: 'Brenda Vander Linden',
      createdAt: 1554090856000,
      msg: ' Hello'
    },
    {
      user: 'Keith Vander Linden',
      createdAt: 1554090856000,
      msg: ' Hi!'
    },
    {
      user: 'Brenda Vander Linden',
      createdAt: 1554090856000,
      msg: ' Calvin Walk?'
    },
    {
      user: 'Keith Vander Linden',
      createdAt: 1554090856000,
      msg: ' Bike instead?'
    },
    {
      user: 'Brenda Vander Linden',
      createdAt: 1554090856000,
      msg: ' Sure!'
    }
  ];
  
  currentUser = 'Brenda Vander Linden';
  newMsg = '';

  //@ViewChild(IonContent) content: IonContent

  sendMessage()
  {
    this.messages.push({
      user: 'Brenda Vander Linden',
      createdAt: new Date().getTime(),
      msg: ' ' + this.newMsg
    });

    this.newMsg = '';
    setTimeout(() => {
      //this.content.scrollToBottom(200);

    });

    
  }
  ngOnInit() {
  }

  // navigation functions
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
