import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../classes/User";

interface UsersResponse{
  data: User []
}

@Injectable(
  {
  providedIn: 'root'
}
)

export class UserService{


  //users: Array<User>= [
  //   users: User[] = [
  //   {
  //       id: 1,
  //         name: 'Hidran1',
  //         lastname: 'Arias',
  //         email: 'hidran@gmail.com',
  //         fiscalcode: 'RSAHRN72M22Z444S',
  //         province: 'Torino',
  //         phone: '454545455',
  //         age: 43

  //   } ,
  //   {
  //     id: 2,
  //       name: 'Hidran2',
  //       lastname: 'Arias',
  //       email: 'hidran@gmail.com',
  //       fiscalcode: 'RSAHRN72M22Z444S',
  //       province: 'Torino',
  //       phone: '454545455',
  //       age: 43
  //   },
  //   {
  //     id: 3,
  //       name: 'Hidran3',
  //       lastname: 'Arias',
  //       email: 'hidran@gmail.com',
  //       fiscalcode: 'RSAHRN72M22Z444S',
  //       province: 'Torino',
  //       phone: '454545455',
  //       age: 43
  //   },
  //   {
  //     id: 4,
  //       name: 'Hidran4',
  //       lastname: 'Arias',
  //       email: 'hidran@gmail.com',
  //       fiscalcode: 'RSAHRN72M22Z444S',
  //       province: 'Torino',
  //       phone: '454545455',
  //       age: 43
  //   }
  // ];

  users: User[] = [];

  private APIURL = 'http://127.0.0.1:8000/users';

  constructor(private http: HttpClient){

  }

  getUsers() {

    return this.http.get<UsersResponse>(this.APIURL);
  }

  getUser(id: number) {

    //return this.users[+id];

    return this.users.find(user => user.id === id );

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

      const idx = this.users.findIndex((v) => v.id === user.id);
      alert(idx);

      if (idx!== -1) {
        this.users[idx] = user;
      }

    }
    createUser(user: User) {

      user.id = this.users.length+1;

      this.users.splice(0,0,user);

    }


}
