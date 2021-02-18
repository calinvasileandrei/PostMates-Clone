import { Component, OnInit } from '@angular/core';
import {AjaxService} from '../ajax.service';
import {AuthUser, UtilsService} from '../utils.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent implements OnInit {
  formLogin:FormGroup ;
  user;
  id:string;
  errorLogin:boolean = false;

  constructor(
    private ajax : AjaxService,
    private utils : UtilsService,
    private router : Router,
    private auth: AuthService
  ) { }


  login = async ()=>{
    let formuser:LoginForm = this.formLogin.value;
    let status = await this.auth.login(formuser.email,formuser.password);
    if(status){
      this.router.navigate(['/']);
    }else{
      this.errorLogin = true;

    }
  }

  initForm(){
    this.formLogin = new FormGroup({
      //calinvasileandrei@gmail.com : postmates
      email : new FormControl("", [Validators.required]),
      password : new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {

    this.initForm();
  }
}

interface LoginForm{
  email:string;
  password: string;
}
