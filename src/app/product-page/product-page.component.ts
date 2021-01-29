import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Shop, Section, UtilsService} from '../utils.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  sectionId: number;
  itemId: number;
  shop: Shop;



  constructor(
    private route: ActivatedRoute,
    private utils: UtilsService
  ) { }

  retriveParams = () => {
    this.route.params.subscribe((param) => {
      this.sectionId = param.sectionid;
      this.itemId = param.id;
      this.retriveItem(this.sectionId, this.itemId);
    });
  }


  retriveItem = (sectionId, itemId) => {
    const currenSection: Section = this.utils.sections.find(sectionI => sectionI.id === +sectionId);
    this.shop = currenSection.shops.find(i => i.id === +itemId);
  }


  ngOnInit(): void {
    this.retriveParams();
  }

}
