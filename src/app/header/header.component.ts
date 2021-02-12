import {Component, Input, OnInit} from '@angular/core';
import {UtilsService} from '../utils.service';
import {Router} from '@angular/router';

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
    public router: Router
  ) { }

  selectTheme = () => {
    return this.whiteTheme ? 'post-bg-white' : 'post-bg-yellow';
  }

  selectButtonColor = () => {
    return this.whiteTheme ? 'post-c-white' : 'post-c-yellow';
  }

  isAuth = ()=>{
    if(localStorage.getItem('id') != null ){
      this.logged = false;
      console.log("logged in");
    }
  }

  logout = () =>{
    this.utils.userLogged = false;
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/'])
  }


  ngOnInit(): void {
    this.isAuth();

  }

}
