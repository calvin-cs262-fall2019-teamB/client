import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firechat } from 'firechat';
import { NavController, NavParams } from '@ionic/angular';
import { UserDataRWService } from '../services/user-data-rw.service';
import { ChatPage } from '../chat/chat.page';
/*
import { AddRoomPage } from '../add-room/add-room';
import { HomePage } from '../home/home';
*/


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  data = {roomname: ''};

  
  
  constructor(private firestore: AngularFirestore) { 
    
  }

  newChat(userID1, userID2) { 
    this.firestore.collection('chats').doc(userID1+userID2).update({
      messages: []
    }).then(function() {
      console.log("Document successfully written!");
    }).catch(function(error) {
      console.error("Error writing document: ", error);
    });    
  }

}

  




