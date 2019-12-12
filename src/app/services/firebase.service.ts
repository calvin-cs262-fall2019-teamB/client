/*
 * this file handles firebase services
 *
 * @authors Josh Bussis, Bryan Fowler, Brian Goins
*/

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { UserID } from '../interfaces/userid';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  constructor(public firestore: AngularFirestore) { }

  private matchesArray = [];
  private currentUser;
  private newMatch;

  // create a new player in the database

  createUser(userName: string,
             userEmail: string,
             userDescription: string,
             userAge: number,
             userPassword: string,
             userPicture: string,
             userGender: string,
             userMatches: [],
             userChats: []) {

    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('users').add({
        name: userName,
        email: userEmail,
        password: userPassword,
        description: userDescription,
        age: userAge,
        gender: userGender,
        picture: userPicture,
        matches: userMatches,
        chats: userChats
      })
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  getUserID() {
    const userCollection = this.firestore.collection<UserID>('users2');

    return userCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as UserID;
        const id = a.payload.doc.id;
        return id;
      }))
    );
  }

  getUser(): Observable<User[]> {
    return this.firestore.collection<User>('users').valueChanges();
  }

  getMatches(user) {
    // may have to change this... will have to see once running with actual data
    return this.firestore.collection('users2').doc(user).collection('matches').valueChanges();
  }

  getChats(user) {
    return this.firestore.collection('users2').doc(user).collection('chats').valueChanges();
  }

  getMessages(chat) {
    return this.firestore.collection('chats').doc(chat).collection('messages').valueChanges();
  }

  // New functions for matches

  updateMyLikes(currentUser, likedUserID) {
    console.log(likedUserID);
    this.currentUser = currentUser;
    this.newMatch = likedUserID;

    this.getMatches(this.currentUser).subscribe(data => {
      console.log(data);
      this.matchesArray = data;
      this.matchesArray.push(this.newMatch);
    });
    this.firestore.collection('users2').doc(this.currentUser).update(
      // having it write matches, but currently it overwrites the old ones
      // also, it's having a hard time getting the current user in this file, but works in others.
      { matches: this.matchesArray }
    );
  }

  checkArray(currentUser, likeArray) {
    if (likeArray.contains(currentUser)) {
      return true;
    } else {
      return false;
    }
  }

  updateMatches(userID1, userID2) {
    //Update User 1's matches 
    this.firestore.collection('users2').doc(userID1).update('matches');
    //Update User 2's matches
    //this.firestore.collection('matches').doc(userID2).update(userID1);

    //this.deleteLike(userID1, userID2);
    //this.deleteLike(userID2, userID1);
  }

  deleteLike(userID1, userID2) {
    //NULL for now. 
  }

  getMatchesArray(userID) {
    //this.firestore.collection('users2').doc(userID).snapshotChanges().get('matches');
  }
}
