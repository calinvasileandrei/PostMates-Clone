import {Injectable} from '@angular/core';
import {AjaxService} from './ajax.service';

@Injectable({
  providedIn: 'root'
})


export class UtilsService {

    constructor(
      public ajax: AjaxService
    ) {
    }

    cart:Item[] =[];
    cartTotale:number=0;
    userLogged:boolean = false;

    removeItem = (item:Item) =>{
      var index = this.cart.indexOf(item);
      if (index !== -1) {
        this.cart.splice(index, 1);
        this.cartTotale -= item.price;
        this.ajax.removeProductToCart(item._id).subscribe();
      }
    }

    addItem = (item) =>{
      this.cart.push(item);
      this.cartTotale += item.price;
      console.log("add item")
      this.ajax.addProductToCart(item).subscribe((res)=>{
        console.log("item add res: ",res)
      });
    }

    getCartArray = () =>{
      this.ajax.getCart().subscribe((cartResponse:Item[])=>{
        this.cart = cartResponse;
        this.calculateCart();
      })
    }

    calculateCart = () =>{
      this.cartTotale = this.cart.reduce((acc,i)=>{
        return acc + i.price;
      },0);
    }

}


export interface Section {
  _id: string;
  title: string;
  subtitle: string;
  restaurants: string[]; // Shops
}

export interface Restaurant {
  _id: string;
  title: string;
  priceDelivery: number;
  delivery: string;
  badge: string;
  verified: boolean;
  image: string;
  position: string;
  categories: string[]; // Category[];
}


export interface Category{
  _id: string;
  title: string;
  restaurant: string;
  products: string[]; // Item[];
}

export interface Item{
  _id: string;
  title: string;
  restaurant: string;
  category: string;
  description: string;
  price: number;
}

export interface User{
  name:string,
  surname:string,
  age:number,
  phone:string,
  email:string,
  password:string,
}

export interface AuthUser{
  idToken:string,
  expiresIn:number,
  message: string
}
