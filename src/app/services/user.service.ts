import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../classes/User";

interface UsersResponse{
  data: User [] ;
  message: string;
  success: boolean;
}
interface UserResponse{
  data: User;
  message: string;
   success: boolean;
}

@Injectable(
  {
  providedIn: 'root'
}
)

export class UserService{

  users: User[] = [];

  public APIURL = 'http://127.0.0.1:8000/users';

  constructor(public http: HttpClient){

  }

  getUsers() {

    return this.http.get<UsersResponse>(this.APIURL);
  }

  getUser(id: number) {

    //return this.users[+id];
    return this.http.get<UserResponse>(this.APIURL + '/' + id);

    }

    deleteUser(user: User) {

      console.log(user.age);//accesso alle proprietà

      const index = this.users.indexOf(user);

      console.log(index);

      if (index > -1) {

        this.users.splice(index, 1);

      }

    }
    updateUser(user: User) {

    return this.http.patch<UserResponse>(this.APIURL + '/' + user.id, user);

    }
    createUser(user: User) {

      user.id = this.users.length+1;

      this.users.splice(0,0,user);

    }


}
