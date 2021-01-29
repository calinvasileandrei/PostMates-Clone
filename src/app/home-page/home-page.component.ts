import { Component, OnInit } from '@angular/core';
import {Section, UtilsService} from '../utils.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  sections: Section[];
  constructor(
    private utils: UtilsService
  ) { }

  retriveData = () => {
    this.sections = this.utils.sections;
  }

  ngOnInit(): void {
    this.retriveData();
  }

}
