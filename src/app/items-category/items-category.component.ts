import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../utils.service';
import {AjaxService} from '../ajax.service';

@Component({
  selector: 'app-items-category',
  templateUrl: './items-category.component.html',
  styleUrls: ['./items-category.component.css']
})
export class ItemsCategoryComponent implements OnInit {
  category: Category;
  @Input() categoryID: string;
  constructor(
    private ajax: AjaxService
  ) { }
  url = 'categories/';
  getCategory = () => {
    this.ajax.get<Category>(this.url + this.categoryID).subscribe((responseCat) => {
      this.category = responseCat;
      //console.log("category:",this.category);
    });
  }

  ngOnInit(): void {
    this.getCategory();
  }

}
