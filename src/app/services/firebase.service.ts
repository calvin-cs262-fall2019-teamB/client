import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public game = 'game1';
  private snapshotChangesSubscription;

  constructor(public afs: AngularFirestore) { }

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
      this.afs.collection('users').add({
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

  // get data from the database about the game
  getGame(): Observable<any> {
    // return new Promise<any>((resolve, reject) => {
      return this.afs.collection('playerGame').valueChanges();//.doc(this.game).collection('players').valueChanges();
      //return this.afs.collection('players').valueChanges();
      //resolve(this.snapshotChangesSubscription);
      //this.afs.collection('playerGame').doc(this.game);
      //});
  }

  getUser(): Observable<User[]> {
    return this.afs.collection<User>('users').valueChanges();
  }

  // getUsersSize() {
  //   this.afs.collection('users').get().then(snap => {
  //     return snap.size;
  //   });
  // }

  getMatches(user) {
    // may have to change this... will have to see once running with actual data
    return this.afs.collection('users').doc(user).collection('matches').valueChanges();
  }

  getChats(user) {
    return this.afs.collection('users').doc(user).collection('chats').valueChanges();
  }

  getMessages(chat) {
    return this.afs.collection('chats').doc(chat).collection('messages').valueChanges();
  }
}
