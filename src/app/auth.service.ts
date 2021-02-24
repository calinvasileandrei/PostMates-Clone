import { Injectable } from '@angular/core';
import {AuthUser, User, UtilsService} from './utils.service';
import {HttpClient} from '@angular/common/http';
import * as moment from "moment";
import {RegisterForm} from './register-page/register-page.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //auth_url:string =  "http://localhost:3000/auth/";
  auth_url:string =  "https://postmates.calinvasileandrei.ovh/auth/";

  constructor(
    private http: HttpClient,
  ) {
  }


  register(user:RegisterForm) {
    return this.http.post<AuthUser>(this.auth_url+'register', {user}).subscribe();
  }

  login = async (email:string, password:string ) => {
    let status= false;
    let response;
    try{
      response = this.http.post<AuthUser>(this.auth_url+'login', {"email":email, "password":password}).toPromise()
    }catch (e){
      console.log(e);
    }


    await response.then((res)=>{
      status = this.setSession(res);
    })

    return status;
  }

  private  setSession = (authResult:AuthUser):boolean => {
    if(authResult.message != 'Invalid credentials'){
      console.log(authResult);
      const expiresAt = moment().add(authResult.expiresIn,'second');
      localStorage.setItem('idToken', authResult.idToken);
      localStorage.setItem("expiresAt", JSON.stringify(expiresAt.valueOf()) );
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem("idToken");
    localStorage.removeItem("expiresAt");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expiresAt");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
