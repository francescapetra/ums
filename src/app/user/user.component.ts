import { User } from './../classes/User';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { faPencilAlt, faTrashAlt, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({

  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  pencil = faPencilAlt;
  trash = faTrashAlt;
  info = faInfo;

  @Input()
  user!: User;

  @Output('onDeleteUsers') userDeleted = new EventEmitter();

  @Output('onSelectUser') onSelectUser = new EventEmitter();


  constructor( private userService: UserService, private route:Router ) { }

  ngOnInit() {
  }

  deleteUser(user: User) {

    this.userDeleted.emit(this.user);

  }
  updateUser(){

    this.route.navigate(['users', this.user.id, 'edit']);

    this.onSelectUser.emit(this.user);

  }

  showUserDetail(){

    this.route.navigate(['user', this.user.id]);

  }

}
