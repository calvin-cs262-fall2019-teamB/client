/*Authenticate Service
 * Creates user, logs user in, signs user out
 * 
 * Everything works as of 11/30/2019 
 * 
 * @authors Brian Goins 
 */

import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  public userID: string;

   constructor(private firebaseAuth: AngularFireAuth,
              private router: Router,
              public firestore: AngularFirestore) { }
  
  
  /*Sign-up, should only be called by new user page!
   * Creates authenticated user, 
   * Connects UID from authenticated user to new document. 
   * 
   * Brian Goins 11/30/2019 
   * 
   * Needs to be cleaned up
   */
  signup(email: string, password: string, name: string,
         age: number, gender: string) {
      this.firebaseAuth
      .auth.createUserWithEmailAndPassword(email, password)
      .then( cred => {
        console.log(cred.user.uid);
        return this.firestore.collection('users2').doc(cred.user.uid).set({
          name: name,
          password: password,
          age: age,
          description: '',
          gender: gender
        });
      });
  }

  /*Login, logs user into authenticated
   * user. UID should match UID in users
   * collection
   *
   * Brian Goins 11/30/2019
   *
   * Needs to be cleaned up
   */
  login(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigateByUrl('/home');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
        alert('Could not find email and password pair!');
      });
  }

  // Return User UID
  // Brian Goins 11/30/2019
  getUserID() {
    this.firebaseAuth.authState.subscribe( user => {
      this.userID = user.uid;
      //console.log(this.userID);
    });
    //console.log(this.userID);
    return this.returnUserID();
  }

  returnUserID() {
    return this.userID;
  }

  // Logs user out
  // Brian Goins 11/30/2019
  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}