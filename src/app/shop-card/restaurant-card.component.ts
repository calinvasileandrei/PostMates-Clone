import {Component, Input, OnInit} from '@angular/core';
import {Restaurant, Section} from '../utils.service';
import {AjaxService} from '../ajax.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {
  @Input() restaurantID: Restaurant;
  @Input() sectionId: number;
  restaurant: Restaurant;

  constructor(
    private ajax: AjaxService
  ) { }

  url = 'restaurants/';

  geItem = () => {
    this.ajax.get<Restaurant>(this.url + this.restaurantID).subscribe((response) => {
      this.restaurant = response;
      //console.log(this.restaurant);
    },
      (error) => {
      console.log(error);
      });
  }



  ngOnInit(): void {
    console.log('restaurant-card');
    this.geItem();
  }

}
