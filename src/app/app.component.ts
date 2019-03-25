import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fromUser} from './user/state/user.reducer';
import UserState = fromUser.UserState;
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  userName = 'Login';

  constructor(private store: Store<UserState>, private _router: Router) {
  }

  ngOnInit(): void {
   debugger;
     this.store.pipe().subscribe(
       user => {
        if (user && user.hasOwnProperty('email')) {
          debugger;
          this.userName = user.email;
        }
       }
     );
  }

  productListClickHandle() {
    this._router.navigate(['product']);
  }

  loginClickHandle() {
    this._router.navigate(['login']);
  }

  cartClickHandle() {
    this._router.navigate(['cart']);
  }
}
