import {fromProduct} from './product.state';
import ProductState = fromProduct.ProductState;
import {ProductActions, ProductActionType} from "./product.action";
/**
 * Created by dattaram on 23/3/19.
 */


/* INITIAL STATE OF PRODUCT STATE */

const initialState: fromProduct.ProductState = {
  productDisplayView : 'TV',
  products: [],
  cartProduct: [],
};


/* REDUCER FUNCTION PRODUCT LIST */

export function productReducer(state = initialState, action: ProductActions): fromProduct.ProductState {
  debugger;
  switch (action.type) {

    case ProductActionType.ToogleProductDisplayView:
      return {
        ...state,
        productDisplayView: action.data
      };

    case ProductActionType.AddToCartProduct:
      return {
        ...state,
        cartProduct: state.products.filter(prod => prod.selected)
      };


    case ProductActionType.AddProduct:
      return {
        ...state,
        products:  action.data
      };

    default:
      return state;
  }
}


