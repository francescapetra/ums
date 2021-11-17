import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from "../classes/User";

@Component({

  selector:'app-users',
  templateUrl: 'users.component.html',
  styleUrls:['users.component.css'],
})

export class UsersComponent implements OnInit {

  title = 'Users';

  //public users:any[] = [];
  users: User[] = [];

  @Output() updateUser = new EventEmitter<User>();

  constructor(private service: UserService){

    //this.users = service.getUsers();

  }
  ngOnInit() {

   this.service.getUsers()
   .subscribe(res => {

     this.users = res.data;

    });

  }
  onDeleteUsers2(user:User){

    this.service.deleteUser(user);

  }
  onSelectUser2(user: User): void {

    this.updateUser.emit(Object.assign({}, user));

  }
}

// let users = [
//   {
//     name: 'Ale',
//     lastname: 'Arias'
//   },
//   {
//     name: 'Francy',
//     lastname: 'Arias'
//   }
// ];

// for (let user of users)  {
//   console.log(user.name);

// }

// for (var key in users) {
//   console.log(users[key]);
//   console.log(users[key].name);

// }
