import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.scss'],
})
export class MatchesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToChat() {
    // navigates to the chat page
    this.router.navigateByUrl('/chat');
  }

}
