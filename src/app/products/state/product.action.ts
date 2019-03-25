/*
/!**
 * Created by dattaram on 23/3/19.
 *!/
const  PRODUCT_ACTION = {
  TOOGLE_PRODUCT_DETAILS_VIEW : 'TOOGLE_PRODUCT_DETAILS_VIEW'
};
*/
import {Action} from "@ngrx/store";

/* ACTION TYPE DECLARATION */

export enum ProductActionType {
  ToogleProductDisplayView  = '[product] toggle product display view',
  AddToCartProduct = '[product] add product to cart ',
  AddProduct = '[product] add product'
}

/* CREATE ACTIONS FOR PRODUCT STORE */

export class ToogleProductDisplayView implements Action {
  readonly type: string = ProductActionType.ToogleProductDisplayView;
  constructor(public data: string) {
  }
}

export class AddToCartProduct implements Action {
  readonly type: string = ProductActionType.AddToCartProduct;
  constructor(public data: any) {
  }
}

export class AddProduct implements Action {
  readonly type: string = ProductActionType.AddProduct;
  constructor(public data: any[]) {
  }
}


/* UNION OF ALL ACTION */

export type ProductActions = ToogleProductDisplayView | AddToCartProduct | AddProduct;
