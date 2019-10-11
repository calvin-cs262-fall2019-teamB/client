import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMatches() {
    this.router.navigateByUrl('/matches');
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

  goToPersonal() {
    this.router.navigateByUrl('/personal');
  }

}
