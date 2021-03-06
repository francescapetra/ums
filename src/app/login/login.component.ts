import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../classes/User';
import { AuthService } from '../services/auth.service';
import {HttpErrorResponse} from "@angular/common/http";

interface Jwt {
  access_token: string,
  token_type: string
  expires_in : number,
  user_name: string,
  email: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn(form: NgForm) {

    this.auth.signIn(form.value.email, form.value.password)

     .subscribe(
       (payload: Jwt) => {
          alert('Login Successful');
         this.router.navigate(['']);
       },
       ({error}) =>{
         alert(error.error);
         console.log(error)
       }
     )
    // alert(form.valid);
    // alert(form.value.email);
  }

}

//  async signIn(form: NgForm) {

//  try {

//    const resp = await this.auth.signIn(form.value.email, form.value.password)
//      .toPromise();

//    alert(resp.user_name + ' logged in successfully');

//    this.router.navigate(['/']);

//  } catch(e) {

//         alert(e.error.error);

//       }
//  }
// }

