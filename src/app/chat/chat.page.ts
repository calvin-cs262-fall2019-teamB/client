/**
 * chat.page.ts is the main file to run the chat page
 * @authors   Josh Bussis and Charlie Newton
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';


//Chat Imports 
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private router: Router) { }
  
  
  currentUser = 'Brenda Vander Linden';
  newMsg = '';
  chatID = 'chat1';

  //@ViewChild(IonContent) content: IonContent

  sendMessage()
  {

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
