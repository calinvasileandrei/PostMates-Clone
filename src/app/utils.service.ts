import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class UtilsService {

    constructor() {
    }

    cart:Item[] =[];
    cartTotale:number=0;
    userLogged:boolean = false;
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
