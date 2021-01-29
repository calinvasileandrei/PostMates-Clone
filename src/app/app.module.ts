import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TypeBarComponent } from './type-bar/type-bar.component';
import { ShopsSectionComponent } from './shops-section/shops-section.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { ItemComponent } from './item/item.component';
import { ItemsCategoryComponent } from './items-category/items-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductPageComponent,
    HeaderComponent,
    SearchBarComponent,
    TypeBarComponent,
    ShopsSectionComponent,
    ShopCardComponent,
    ItemComponent,
    ItemsCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
