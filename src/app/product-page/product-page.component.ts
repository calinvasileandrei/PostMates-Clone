import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Item, Restaurant, Section, UtilsService} from '../utils.service';
import {AjaxService} from '../ajax.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  sectionId: string;
  restaurantId: string;
  restaurant: Restaurant;

  constructor(
    private route: ActivatedRoute,
    private utils: UtilsService,
    private ajax: AjaxService,
    private router:Router
  ) { }

  restaurantUrl = 'restaurants/';

  retriveParams = () => {
    this.route.params.subscribe((param) => {
      this.sectionId = param.sectionid;
      this.restaurantId = param.id;
      this.retriveRestaurant(this.sectionId, this.restaurantId);
    });
  }


  retriveRestaurant = (sectionId, restaurantId) => {
    this.ajax.get<Restaurant>(this.restaurantUrl + restaurantId).subscribe((responseRest) => {
      this.restaurant = responseRest;
      console.log(this.restaurant);
    });
  }

  gotTOCart=()=>{
    //save on session
    sessionStorage.setItem('cart', JSON.stringify(this.utils.cart));
    this.router.navigate(['/','cart']);
  }



  ngOnInit(): void {
    this.retriveParams();
  }

}
