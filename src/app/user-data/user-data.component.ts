import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})



export class UserDataComponent implements OnInit {

  public title = "Dettaglio Utenti";

  public User: User;

  constructor(private route:ActivatedRoute, private userService:UserService, private router:Router) { }

  ngOnInit() {

    this.User = new User();

    this.route.params.subscribe(p => {

    this.userService.getUser(+p['id'])

      .subscribe(res => {
          this.User = res.data;


console.log( res.data);
        });

      //.subscribe(response => console.log(this.User = JSON.parse(JSON.stringify(response))))

    });

  }
  showUserDetail(){

    this.router.navigate(['users'])
  }

}
