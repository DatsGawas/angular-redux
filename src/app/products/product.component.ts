/**
 * Created by dattaram on 23/3/19.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {fromProduct} from './state/product.state';
import {select, Store} from '@ngrx/store';
import {AddProduct, AddToCartProduct, ProductActions, ToogleProductDisplayView} from "./state/product.action";

@Component({
  selector: 'product-list',
  templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit {

  productList: any[];

  showProductDetails: boolean;

  displayViewType: string;

  constructor(
    private store: Store<fromProduct.State>,
    private _httpClient: HttpClient) {
  }

  ngOnInit() {
    /* GET PRODUCT DISPLAY VIEW FROM STORE */

    this.store.pipe(select(fromProduct.getProductDisplayView)).subscribe(
      productDisplayView => this.displayViewType = productDisplayView
    );

    /* GET PRODUCT FROM STORE */

    this.store.pipe(select(fromProduct.getProducts)).subscribe(
      productList => {
        if (productList && productList.length === 0) {
          this.getProductList();
        }
        this.productList = productList;
      }
    );
  }

  getProductList() {
    this._httpClient.get('assets/data/productlist.json').subscribe(
      (res: any) => {
        debugger;
        console.log('in service cal');
        this.store.dispatch(new AddProduct(res.data));
      }
    );
  }

  onViewSelectHandle(viewDetails: any) {
    this.store.dispatch(new ToogleProductDisplayView(viewDetails.id));
  }

  addToCart(selectedProduct: any) {
    this.store.dispatch(new AddToCartProduct(selectedProduct));
  }
}
