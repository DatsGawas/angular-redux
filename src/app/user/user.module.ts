/**
 * Created by dattaram on 23/3/19.
 */
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {userReducer} from './state/user.reducer';
import {StoreModule} from '@ngrx/store';

const routes: Routes = [
  {path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('user', userReducer),
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
})
export class UserModule {
}
