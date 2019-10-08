import { Component } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public personService: PersonService) {}

}
