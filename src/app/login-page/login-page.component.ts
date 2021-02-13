import { Component, OnInit } from '@angular/core';
import {AjaxService} from '../ajax.service';
import {UtilsService} from '../utils.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formLogin;
  user;
  id;

  constructor(
    private ajax : AjaxService,
    private utils : UtilsService,
    private router : Router
  ) { }


  login = ()=>{

    //Login
    this.ajax.auth('users/sign_in.json', {
      "user" : this.formLogin.value
    }).subscribe((response) => {
      console.log(response);
      console.log("Login effettuato");
      this.utils.userLogged = true;
      console.log(this.utils.userLogged);

      this.user = response;
      this.id = response['id'];

      localStorage.setItem("id", this.id);
      localStorage.setItem("name", this.user.name);
      console.log("navigation next");
      this.router.navigate(['/']);

    })


  }

  initForm(){
    this.formLogin = new FormGroup({
      email : new FormControl("", [Validators.required]),
      password : new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {

    this.initForm();
  }
}
