import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "./shared/shared.module";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {CartComponent} from "./cart/cart.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', loadChildren: '../app/user/user.module#UserModule'},
  {path: 'product', loadChildren: '../app/products/product.module#ProductModule'},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  declarations: [
    AppComponent, CartComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Shopping App',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
