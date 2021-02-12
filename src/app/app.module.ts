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
import { RestaurantCardComponent } from './shop-card/restaurant-card.component';
import { ItemComponent } from './item/item.component';
import { ItemsCategoryComponent } from './items-category/items-category.component';
import {HttpClientModule} from '@angular/common/http';
import {AjaxService} from './ajax.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductPageComponent,
    HeaderComponent,
    SearchBarComponent,
    TypeBarComponent,
    ShopsSectionComponent,
    RestaurantCardComponent,
    ItemComponent,
    ItemsCategoryComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CartPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [
    AjaxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
