import { UserInterface } from "../interfaces/user";

export class User implements UserInterface {
  //[x: string]: any;
    id!: number;
    name!: string;
    lastname!: string;
    email!: string;
    fiscalcode!: string;
    province!: string;
    phone!: string;
    age!: number;
    static id: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.fiscalcode = '';
    this.province = '';
    this.phone = '';
    this.age = 18;

  }

}
