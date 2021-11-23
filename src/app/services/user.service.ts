import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../classes/User";
import { AuthService } from "./auth.service";

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

  constructor(public http: HttpClient, private auth : AuthService){

  }
  getAuthHeader(): HttpHeaders {

    const headers = new HttpHeaders(
      {
        Authorization : 'Bearer ' + this.auth.getToken()
      }
    );
    return headers;
  }

  getUsers() {

    return this.http.get<UsersResponse>(this.APIURL, {headers: this.getAuthHeader()});
  }

  getUser(id: number) {

    //return this.users[+id];
    return this.http.get<UserResponse>(this.APIURL + '/' + id, {headers: this.getAuthHeader()});

    }

  deleteUser(user: User) {

    return this.http.delete<UserResponse>(this.APIURL + '/' + user.id, {headers: this.getAuthHeader()});

  }
  updateUser(user: User) {

  return this.http.patch<UserResponse>(this.APIURL + '/' + user.id, user, {headers: this.getAuthHeader()});

  }
  createUser(user: User) {

    return this.http.post<UserResponse>(this.APIURL, user);


  }


}
