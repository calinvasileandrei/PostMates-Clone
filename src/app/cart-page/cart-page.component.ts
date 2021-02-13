import { Component, OnInit } from '@angular/core';
import {Item, UtilsService} from '../utils.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  idUtente;
  nomeUtente;
  form;
  cartTotale;
  cart:Item[];
  constructor(
    private route : ActivatedRoute,
    public utils:UtilsService,
    private router : Router

  ) { }

  getParams(){
    this.idUtente = localStorage.getItem("id");
    this.nomeUtente = localStorage.getItem("name");
  }

  getCartArray(){
    this.cart = JSON.parse(sessionStorage.getItem('cart'));
  }

  calculateCartTotal(){

    this.cartTotale = this.cart.reduce((acc,i)=>{
      return acc + i.price;
    },0);

  }

  storeCart() {
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

    initForm(){
    this.form = new FormGroup({
      date: new FormControl("", [Validators.required]),
      time: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required, Validators.min(18)]),
      floor: new FormControl("", [Validators.required, Validators.email]),
      notes: new FormControl(),
    });
  }

  isAuth = ()=>{
    this.idUtente = localStorage.getItem('id');
    this.nomeUtente = localStorage.getItem('nome');
    console.log("id:"+this.idUtente);
    if(this.idUtente == null &&  this.nomeUtente ==null ){
      this.router.navigate(['/','login']);
    }
  }

  ngOnInit(): void {
    this.isAuth();
    this.initForm();
    this.getParams();
    this.getCartArray();
    this.calculateCartTotal();
  }

}
