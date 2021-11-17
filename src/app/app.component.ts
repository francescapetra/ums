import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { User } from './classes/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faCoffee = faCoffee;

  showForm: boolean = false;

  userSelected: User = new User();

  updateUser(user: User){

    this.showForm = true;

    this.userSelected = user;
  }
  newUser(){

    this.userSelected = new User();

    this.showForm = true;

  }

}
