/**
 * newuser.page.ts is the file that runs the new user page
 * 
 * @authors   Brian Goins
 */

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.page.html',
  styleUrls: ['./newuser.page.scss'],
})
export class NewuserPage implements OnInit {
  private email: string;
  private password: string;
  private age: number;
  private name: string;
  private gender: string;

  constructor(
    public db: FirebaseService,
    private router: Router,
    public auth: AuthenticateService
  ) { }

  ngOnInit() {
  }
 
  addUser() {
    //!!!No error check? Check info is filled!!!//
    this.auth.signup(this.email, this.password, this.name,
                     this.age, this.gender);

    //Need to create a login loop 
    //If account is created attempts to login
    //and trys to login after data should 
    //have been written to db
    
    this.router.navigateByUrl('/login');
  
  }
  
}

