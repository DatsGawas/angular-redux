import {RootAppState} from "../../state/app.state";
import {UserActionType} from "./user.action";
import {createFeatureSelector, createSelector} from "@ngrx/store";
/**
 * Created by dattaram on 25/3/19.
 */

const initialState: fromUser.UserState = {
  email: 'LOgin'
};



/* USER STATE NAMESPACE */

export namespace fromUser {

  /* EXTENDING ROOT APP STATE */

  export interface State extends RootAppState {
    user: UserState;
  }

  /* USER STATE INTERFACE */

  export interface UserState {
    email: string;
  }




  /* CREATE PRODUCT STATE  FEATURE SELECTOR */

  export const getUserState =  createFeatureSelector<fromUser.UserState>('user');


  /* CREATE PRODUCT STATE SELECTOR */

  export const getEmailId = createSelector(
    getUserState,
    state => state.email
  );

}



export function userReducer(state = initialState, action: any): fromUser.UserState {
  debugger;
  switch (action.type) {
    case UserActionType.loginUser:
      return {
        ...state,
        email: action.data
      };
    default:
      return state;
  }
  }
