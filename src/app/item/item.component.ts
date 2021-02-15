import {Component, Input, OnInit} from '@angular/core';
import {Item, UtilsService} from '../utils.service';
import {AjaxService} from '../ajax.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() categoryId: number;
  @Input() categoryTitle: string;
  @Input() itemId: string;
  item: Item;

  constructor(
      private ajax: AjaxService,
      private utils: UtilsService
  ) { }

  url = 'products/';

  getItem = () => {
    this.ajax.get<Item>(this.url+this.itemId).subscribe((responseItem)=>{
      this.item = responseItem;
      //console.log("item: ",this.item);
    })
  }


  ngOnInit(): void {
    this.getItem();
  }

}
