import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item} from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(
    private http: HttpClient
  ) { }

  url = 'http://postmates.calinvasileandrei.ovh/';
  //url = 'http://localhost:3000/';

  get = <T> (param) => {
    return this.http.get<T>(this.url + param);
  }

  post = <T> (param,body) => {
    return this.http.post<T>(this.url + param,body);
  }

  addProductToCart = (product) =>{
    return this.http.post(this.url+"users/cart",{item:product});
  }

  removeProductToCart = (productid) =>{
    return this.http.delete(this.url+"users/cart/"+productid);
  }

  getCart = () => {
    return this.http.get(this.url+"users/cart");
  }



}
