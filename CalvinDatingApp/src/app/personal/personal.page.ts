import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    // navigates to the home page
    this.router.navigateByUrl('/home');
  }

  goToMatches() {
    // navigates to the matches page
    this.router.navigateByUrl('matches');
  }

}
