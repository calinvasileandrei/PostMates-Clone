import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../utils.service';

@Component({
  selector: 'app-items-category',
  templateUrl: './items-category.component.html',
  styleUrls: ['./items-category.component.css']
})
export class ItemsCategoryComponent implements OnInit {
  @Input() category: Category;
  constructor() { }

  ngOnInit(): void {
  }

}
