import {Component, Input, OnInit} from '@angular/core';
import {UtilsService} from '../utils.service';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() whiteTheme: boolean;
  @Input() buttons: boolean;
  idUtente;
  nomeUtente;
  logged=true;


  constructor(
    public utils: UtilsService,
    public router: Router,
    public auth: AuthService
  ) { }

  selectTheme = () => {
    return this.whiteTheme ? 'post-bg-white' : 'post-bg-yellow';
  }

  selectButtonColor = () => {
    return this.whiteTheme ? 'post-c-white' : 'post-c-yellow';
  }

  logout = () =>{
    this.auth.logout();
    this.router.navigate(['/'])
  }


  ngOnInit(): void {
  }

}
