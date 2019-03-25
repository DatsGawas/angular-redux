import {fromProduct} from "../products/state/product.state";
import ProductState = fromProduct.ProductState;
import {fromUser} from "../user/state/user.reducer";
import UserState = fromUser.UserState;
/**
 * Created by dattaram on 23/3/19.
 */

export interface RootAppState {
  products: ProductState;
  user: UserState ;
}

