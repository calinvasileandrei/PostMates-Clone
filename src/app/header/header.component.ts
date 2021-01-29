import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() whiteTheme: boolean;
  constructor() { }

  selectTheme = () => {
    return this.whiteTheme ? 'post-bg-white' : 'post-bg-yellow';
  }

  selectButtonColor = () => {
    return this.whiteTheme ? 'post-c-white' : 'post-c-yellow';
  }

  ngOnInit(): void {
  }

}
