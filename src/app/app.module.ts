import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainContainerComponent } from './main-container/main-container.component';
import { ProductItemsComponent } from './main-container/product-items/product-items.component';
import { FilterBoxComponent } from './main-container/filter-box/filter-box.component';
import { SearchBoxComponent } from './main-container/product-items/search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { PagnatorComponent } from './main-container/product-items/pagnator/pagnator.component';
import { ProductsComponent } from './main-container/product-items/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    ProductItemsComponent,
    FilterBoxComponent,
    SearchBoxComponent,
    PagnatorComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
