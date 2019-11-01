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
    },
    {
      user: 'Keith VanderLinden',
      createdAt: 1554090856000,
      msg: 'Yassss?'
    }
  ];
  
  currentUser = 'Keith VanderLinden';
  newMsg = '';

  //@ViewChild(IonContent) content: IonContent

  sendMessage()
  {
    this.messages.push({
      user: 'Keith VanderLinden',
      createdAt: new Date().getTime(),
      msg: this.newMsg
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
