import { Component, OnInit } from '@angular/core';
import {Item, UtilsService} from '../utils.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {AjaxService} from '../ajax.service';

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
    private router : Router,
    private auth: AuthService,
    private ajax: AjaxService

  ) { }

  getParams(){
    this.idUtente = localStorage.getItem("id");
    this.nomeUtente = localStorage.getItem("name");
  }

  getCartArray(){
    this.ajax.getCart().subscribe((cartResponse:Item[])=>{
      this.cart = cartResponse;
      this.calculateCartTotal();
    },error => {
      console.log("error:",error.error.error);
      if(error.error.error =="invalid_token"){
        this.auth.logout();
        this.router.navigate(["/","login"]);
      }
    })
    //this.cart = JSON.parse(sessionStorage.getItem('cart'));
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
    if(this.auth.isLoggedOut()){
      this.router.navigate(['/','login']);
    }
  }

  ngOnInit(): void {
    this.isAuth();
    this.initForm();
    this.getParams();
    this.getCartArray();
  }

}
