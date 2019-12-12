/**
 * newuser.page.ts is the file that runs the new user page
 * 
 * @authors   Brian Goins
 */

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.page.html',
  styleUrls: ['./newuser.page.scss'],
})
export class NewuserPage implements OnInit {
  private email: string;
  private password1: string;
  private password2: string; 
  private age: number;
  private name: string;
  private gender: string;

  constructor(
    public db: FirebaseService,
    private router: Router,
    public auth: AuthenticateService,
    public atrCtrl: AlertController
  ) {   }

  ngOnInit() {
  }
 
  addUser() {
    //Check All Values
    if(this.email == null || this.password1 == null || this.password2 == null
       || this.age == null || this.name == null || this.gender == null) 
    {
      this.finishFormAlert();
      return;
    }
    //Check Email
    if(this.studentEmail(this.email) === false) {
      this.emailAlert();
      this.email = "";
      return; 
    }
    //Check Password
    if(this.password1 != this.password2 || this.password1.length < 6) {
      this.passAlert(); 
      this.password1 = "";
      this.password2 = "";
      return; 
    } 
    //Check Age
    if(this.age > 100) {
      this.ageAlert();
      return; 
    }
    else {
      this.auth.signup(this.email, this.password1, this.name,
        this.age, this.gender);
      this.router.navigateByUrl('/login');
    }  

  }

  //Password Validation
  async passAlert() {
    const alert = await this.atrCtrl.create({
      header: 'Passwords need to be 6 characters long and must match',
      buttons: ['Okay']
    });

    await alert.present();
  }
  
  //Student Email Validation
  async emailAlert() {
    const alert = await this.atrCtrl.create({
      header: 'Please enter a student email',
      buttons: ['Okay']
    });

    await alert.present();
  }

  studentEmail(email: string) {
    var splitEmail = email.split('@'); 
    if(splitEmail[0].match("^[A-Za-z0-9]") && splitEmail[1] == 'students.calvin.edu') {
      return true;
    }  else {
      return false; 
    }
    
  }

  //Name Validation
  async nameAlert() {
    const alert = await this.atrCtrl.create({
      header: 'Please enter a name with only letters',
      buttons: ['Okay']
    });

    await alert.present();
  }

  validName(name: string) {
    if(name.match("[A-Za-z]")) {
      return true; 
    } else {
      return false; 
    }
  }

  //Age Validation 
  async ageAlert() {
    const alert = await this.atrCtrl.create({
      header: 'Please enter a valid age',
      buttons: ['Okay']
    });

    await alert.present();
  }
  
  //Finish Form Alert
  async finishFormAlert() {
    const alert = await this.atrCtrl.create({
      header: 'Please fill out all fields',
      buttons: ['Okay']
    });

    await alert.present();
  }

}

