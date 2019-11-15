import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  public people: Person[] = [];

  constructor() {
      // this is just test info right now, we will add people when they sign up in the future
    this.people = [{
        name: 'John Doe',
        email: 'jd01@students.calvin.edu',
        password: 'password123*',
        description: 'I am a test person.  I am an interesting person.',
        age: 20,
        expanded: false
    }];
  }

  load() {

  }

  save() {

  }

  getPerson(email) {

  }

  addPerson(person) {

  }
}
