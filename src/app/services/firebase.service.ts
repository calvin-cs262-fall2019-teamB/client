import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  constructor(public firestore: AngularFirestore) { }

  

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

  getUsers() {
    /* TRY 1
   return this.firestore.collection('users2').get().toPromise().then(snapshot => {
    snapshot.forEach(doc =>
      console.log(doc.data().name))
   }); 
   */ 
    var userCollection = this.firestore.collection<User>('users2');
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    userCollection.snapshotChanges().toPromise().then(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        console.log(data); 
        console.log(id); 
        return { id, ...data };
      });
    });


  }

  getUser(): Observable<User[]> {
    return this.firestore.collection<User>('users').valueChanges();
  }

  // getUsersSize() {
  //   this.firestore.collection('users').get().then(snap => {
  //     return snap.size;
  //   });
  // }

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
}
