import { Component, OnInit } from '@angular/core';
import {AjaxService} from '../ajax.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User, UtilsService} from '../utils.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  form:FormGroup;
  user:User;
  id;

  constructor(
    private ajax : AjaxService,
    private router : Router,
    private utils : UtilsService,
    private auth: AuthService
  ) { }

  initForm(){
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      surname: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required, Validators.min(18)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      passwordConfirm: new FormControl("", [Validators.required])
    });

  }


  printData(){
    console.log(this.form.value);
    let registerUser: RegisterForm = this.form.value;
    let res = this.auth.register(registerUser);
    console.log(res);

    this.router.navigate(['/','login']);

  }

  ngOnInit(): void {
    this.initForm();
  }

}

export interface RegisterForm{
  name:string;
  surname: string;
  phone: string;
  email: string
  age: number;
  password:string;
  passwordConfirm:string;
}
