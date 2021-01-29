import {Component, Input, OnInit} from '@angular/core';
import {Shop, Section} from '../utils.service';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {
  @Input() item: Shop;
  @Input() sectionId: number;

  constructor() { }

  ngOnInit(): void {
  }

}
