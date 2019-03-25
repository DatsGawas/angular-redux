/**
 * Created by dattaram on 23/3/19.
 */
import {NgModule} from '@angular/core';
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    HttpClientModule,
    AmexioWidgetModule,
    FormsModule
  ],
  exports: [ HttpClientModule,
    AmexioWidgetModule,
    FormsModule],
  declarations: [], providers: [],
})
export class SharedModule {
}
