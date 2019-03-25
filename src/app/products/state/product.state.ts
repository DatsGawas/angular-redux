/**
 * Created by dattaram on 23/3/19.
 */
import {RootAppState} from '../../state/app.state';
import {createFeatureSelector, createSelector} from '@ngrx/store';

/* PRODUCT STATE NAMESPACE */

export namespace fromProduct {

  /* EXTENDING ROOT APP STATE */

  export interface State extends RootAppState {
    products: ProductState;
  }

  /* PRODUCT STATE INTERFACE */

  export interface ProductState {
    productDisplayView: string;
    products: any;
    cartProduct: any[];
  }

  /* CREATE PRODUCT STATE  FEATURE SELECTOR */

  export const getProductState =  createFeatureSelector<fromProduct.ProductState>('products');


  /* CREATE PRODUCT STATE SELECTOR */

  export const getProductDisplayView = createSelector(
    getProductState,
    state => state.productDisplayView
  );

  export const getProducts = createSelector(
    getProductState,
    state => state.products
  );

  export const getCartProduct = createSelector(
    getProductState,
    state => state.cartProduct
  );
}


