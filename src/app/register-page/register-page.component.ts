import { Component, OnInit } from '@angular/core';
import {AjaxService} from '../ajax.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UtilsService} from '../utils.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  form;
  user;
  id;

  constructor(
    private ajax : AjaxService,
    private router : Router,
    private utils : UtilsService
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

    //Registrazione
    this.ajax.auth('users.json', {
      "user" : this.form.value
    }).subscribe((response) =>{

      console.log("Registrazione inviata");
      console.log(response);
      this.utils.userLogged = true;
      console.log(this.utils.userLogged);

      this.user = response;
      this.id = this.user.id;
      localStorage.setItem("id", this.id);
      localStorage.setItem("name", this.user.name);

      this.router.navigate(['/']);
    })


  }

  ngOnInit(): void {
    this.initForm();
  }

}
