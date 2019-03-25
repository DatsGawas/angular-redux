/**
 * Created by dattaram on 25/3/19.
 */


import {Action} from "@ngrx/store";
export enum UserActionType {
  loginUser = '[user] login info'
}


/* UPDATE LOGIN USER INFO */

export class UpdateLoginUser implements Action {
  readonly type: string = UserActionType.loginUser;
  constructor(public data: string) {
  }
}


/* UNION OF ALL USER ACTION */

export type UserActions = UpdateLoginUser;
