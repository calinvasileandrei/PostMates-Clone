import { Component, OnInit } from '@angular/core';
import {Section, UtilsService} from '../utils.service';
import {HttpClient} from '@angular/common/http';
import {AjaxService} from '../ajax.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  sections: Section[];

  url = 'sections';

  constructor(
    private utils: UtilsService,
    private ajax: AjaxService
  ) { }

  getRestaurants  = () => {
    this.ajax.get<Section[]>(this.url).subscribe((response) => {
      console.log(response);
      this.sections = response;
    });
  }

  ngOnInit(): void {
    this.getRestaurants();
  }

}
