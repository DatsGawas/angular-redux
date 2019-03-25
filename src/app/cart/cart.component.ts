/**
 * Created by dattaram on 23/3/19.
 */
import {Component, OnInit} from '@angular/core';
import {RootAppState} from "../state/app.state";
import {select, Store} from "@ngrx/store";
import {fromProduct} from "../products/state/product.state";

@Component({
   selector: 'cart',
   templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {
  show = true;

  cartProduct: any[];
  constructor(private store: Store<RootAppState>) {
  }

  ngOnInit() {
    this.store.pipe(select(fromProduct.getCartProduct)).subscribe(
      cartProduct => this.cartProduct = cartProduct
    );
  }
}
