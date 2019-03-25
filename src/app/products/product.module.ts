/**
 * Created by dattaram on 23/3/19.
 */
import {NgModule} from '@angular/core';
import {ProductComponent} from "./product.component";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {productReducer} from "./state/product.reducer";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {path: '', component: ProductComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('products', productReducer)],
  exports: [],
  declarations: [ProductComponent],
  providers: [],
})
export class ProductModule {
}
