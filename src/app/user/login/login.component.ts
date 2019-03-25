/**
 * Created by dattaram on 23/3/19.
 */
import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {fromUser} from "../state/user.reducer";
import UserState = fromUser.UserState;
import {UpdateLoginUser} from "../state/user.action";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  login: LoginModel;

  constructor( private store: Store<UserState>) {
    this.login = new LoginModel();
  }

  ngOnInit() {
  }

  loginHandle() {
    this.store.dispatch(new UpdateLoginUser(this.login.email));
  }

}

export class LoginModel {
  email: string;
  password: string;
  constructor() {

  }
}
