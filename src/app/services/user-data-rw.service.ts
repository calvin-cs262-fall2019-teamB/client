/*Read and write user data service
 * Focuses only on updating user info
 * 
 * Everything works 11/30/2019
 * 
 * @authors Brian Goins 
 */


import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataRWService {

  private userID: string; 

  constructor(private firestore: AngularFirestore,
              private authService: AuthenticateService) { 
                this.userID = authService.getUserID(); 
               
  }            

   

  //-------------------WRITE DATA----------------//
  //Possible inouts: name, age, gender, description, picture
  writeName(newName) {
    this.userID = this.authService.getUserID(); 
    console.log('UserIDRW: ' + this.userID);
    this.firestore.collection('users2').doc(this.userID).update({
      name: newName
    }).then(function() {
      console.log("Document successfully written!");
    }).catch(function(error) {
      console.error("Error writing document: ", error);
    });    
  }

  writeAge(newAge) {
    this.userID = this.authService.getUserID(); 
    console.log('UserIDRW: ' + this.userID);
    this.firestore.collection('users2').doc(this.userID).update({
      age: newAge
    }).then(function() {
      console.log("Document successfully written!");
    }).catch(function(error) {
      console.error("Error writing document: ", error);
    });    
  }

  writeAgeRange(newAgeRange) {
    this.userID = this.authService.getUserID(); 
    console.log('UserIDRW: ' + this.userID);
    this.firestore.collection('users2').doc(this.userID).update({
      ageRange: newAgeRange
    }).then(function() {
      console.log("Document successfully written!");
    }).catch(function(error) {
      console.error("Error writing document: ", error);
    });    
  }

  writeDescription(newDescription) {
    this.userID = this.authService.getUserID(); 
    console.log('UserIDRW: ' + this.userID);
    this.firestore.collection('users2').doc(this.userID).update({
      description: newDescription
    }).then(function() {
      console.log("Document successfully written!");
    }).catch(function(error) {
      console.error("Error writing document: ", error);
    });    
  }

  writeGender(newGender) {
    this.userID = this.authService.getUserID(); 
    console.log('UserIDRW: ' + this.userID);
    this.firestore.collection('users2').doc(this.userID).update({
      gender: newGender
    }).then(function() {
      console.log("Document successfully written!");
    }).catch(function(error) {
      console.error("Error writing document: ", error);
    });    
  }

  updateChats(chatID) {
    this.userID = this.authService.getUserID(); 
    console.log('UserIDRW: ' + this.userID);
    this.firestore.collection('users2').doc(this.userID).update({
      chats: this.readData('chats').append(chatID)
    }).then(function() {
      console.log("Document successfully written!");
    }).catch(function(error) {
      console.error("Error writing document: ", error);
    });    
  }


  //Read function
  readData(item: string) {
    var dataRead;
    this.userID = this.authService.getUserID(); 
    console.log('UserIDRW: ' + this.userID);
    this.firestore.collection('users2').doc(this.userID).valueChanges().subscribe( data => {
        dataRead = data[item];
    }); 

    return dataRead; 

  }

}


