import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from './models/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-custom-properties';
  users: Array<UserModel> = [];
  FirstName: string;
  LastName: string;
  Address: string;
  PostCode: string;

  userdetail: UserModel = new UserModel();

  constructor() { }

  ngOnInit() {
    this.users.push({firstname: "Rakesh", lastname: "Gupta", address: "Birmingham", postcode: "B45 6HY"});
    this.users.push({firstname: "Alan", lastname: "Donald", address: "Oxford", postcode: "OX1 2BU"});
    this.users.push({firstname: "Sophie", lastname: "Williams", address: "Sunderland", postcode: "SR6 0NT"});
    this.users.push({firstname: "Alan", lastname: "Hardy", address: "London", postcode: "NW1 5LR"});
    this.users.push({firstname: "James", lastname: "Folley", address: "Ludlow", postcode: "SY8 1PJ"});
  }

  Save() {
    let user: UserModel = new UserModel();
    user.firstname = this.FirstName;
    user.lastname = this.LastName;
    user.address = this.Address;
    user.postcode = this.PostCode;
    this.users.push(user);
  }

  Details(user: UserModel) {
    this.userdetail = user;
  }
  
}
