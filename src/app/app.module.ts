import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { LaptopsComponent } from "./laptops/laptops.component";
import { TelevisionComponent } from "./television/television.component";
import { ArtsComponent } from "./arts/arts.component";
import { CategoriesComponent } from "./categories/categories.component";
import { PhonesComponent } from "./phones/phones.component";

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: CategoriesComponent },
      { path: "laptops", component: LaptopsComponent },
      { path: "television", component: TelevisionComponent },
      { path: "arts", component: ArtsComponent },
      { path: "phones", component: PhonesComponent },
      { path: "products", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    LaptopsComponent,
    TelevisionComponent,
    ArtsComponent,
    CategoriesComponent,
    PhonesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
