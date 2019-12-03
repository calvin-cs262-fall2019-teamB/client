import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticateService } from './authenticate.service';



@Injectable({
  providedIn: 'root'
})
export class LikesService {

  private userID: string; 

  constructor(private firestore: AngularFirestore,
    private authService: AuthenticateService) {
      this.userID = authService.getUserID();
  }

  //Called only when the user is created
  createLike(localuserID) {
    this.firestore.collection('users2').doc(localuserID).set({
      chats: []
    }).then(function() {
      console.log("Document successfully written!");
    }).catch(function(error) {
      console.error("Error writing document: ", error);
    });    
  }

  //Called with each like
  updateLikes(likedUserID) {
    this.userID = this.authService.getUserID(); 
    console.log('UserIDRW: ' + this.userID);
    this.firestore.collection('users2').doc(this.userID).update({
      chats: likedUserID
    }).then(function() {
      console.log("Document successfully written!");
    }).catch(function(error) {
      console.error("Error writing document: ", error);
    });    
  }

}
