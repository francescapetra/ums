import { UserService } from './../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/User';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private userCopy: User;

  private __user: User;

  @Input() set user(user: User) {

    this.__user = user;

    this.userCopy = Object.assign({}, user);

  }
  get user(){

    return this.__user;

  }

  constructor(private userService : UserService, private route: ActivatedRoute, private router: Router) {

    // this.userService = userService;
  }

  ngOnInit() {

    this.user = new User();

    this.route.params.subscribe((params) => {
      //console.log(typeof(+params['id']));//number
      if(!params['id']){

        return;
      }

     this.userService.getUser(+params['id'])

      .subscribe( res =>{

        this.user = res['data'];

        console.log(typeof(+params['id']) + +params['id']);

      });

    });

  }
  saveUser(){
    //alert(this.user.id);
    this.userService.updateUser(this.user).subscribe(
      res => {

        if (res['success']) {
          alert('User ' + this.user.name + ' modificato correttamente');
          this.router.navigate(['users']);

        } else {
          alert(res['message']);
        }
      }
    );
  }

  resetForm(_form: { reset: () => void; }) {//fixed

    if (this.user.id === 0) {

      this.user = new User();

    }else {
      this.user = this.userCopy;

    }


  }
  showUserDetail(){

    this.router.navigate(['users']);
  }

}

