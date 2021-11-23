import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../classes/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {

    this.auth.usersignedin

    .subscribe(

      (user: User) => {

      this.router.navigate(['']);
      }
    );
  }

  signIn(form: NgForm) {

    if(!form.valid){

      return false;

    }else{

      let result = this.auth.signIn(form.value.email, form.value.password);//true

      console.log(result);

      return this.router.navigate(['/']);
    }



    // alert(form.valid);
    // alert(form.value.email);
  }

}
