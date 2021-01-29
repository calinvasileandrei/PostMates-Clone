import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../utils.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() categoryId: number;
  @Input() categoryTitle: string;
  @Input() item: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
