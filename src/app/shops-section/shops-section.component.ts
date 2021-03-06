import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Section, UtilsService} from '../utils.service';
import {AjaxService} from '../ajax.service';

@Component({
  selector: 'app-shops-section',
  templateUrl: './shops-section.component.html',
  styleUrls: ['./shops-section.component.css']
})
export class ShopsSectionComponent implements OnInit {
  @Input() section: Section;

  constructor(
    private utils: UtilsService,
  ) { }

  ngOnInit(): void {
    //console.log('sections:');
    //console.log(this.section);
  }

}
