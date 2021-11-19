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

    this.route.paramMap.subscribe((params) => {
      //console.log(typeof(+params['id']));//number
      if(!params.get('id')){

        return;
      }

     this.userService.getUser(+params.get('id'))

      .subscribe( res =>{

        this.user = res['data'];

        console.log(typeof(+params.get('id')) + +params.get('id'));

      });

    });

  }
  updateUser2(){

     this.userService.updateUser(this.user).subscribe(
      res => {

        alert(res['message']);

        if (res['success']) {
          this.router.navigate(['users']);

        }
      }
    );
  }

  createUser2(){

     this.userService.createUser(this.user)
     .subscribe(res => {
       alert(res['message']);

       if (res['success']) {
         this.router.navigate(['users']);
       }
     })

  }

  saveUser(){
    if(this.user.id >0){

      this.updateUser2();

    }else{

      this.createUser2();
    }

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

