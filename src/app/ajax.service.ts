import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(
    private http: HttpClient
  ) { }

  url = 'http://postmates.calinvasileandrei.ovh/';

  auth_url =  "https://cloud.coovino.com/";

  get = <T> (param) => {
    return this.http.get<T>(this.url + param);
  }

  auth(param, obj){
    return this.http.post(this.auth_url + param, obj);
  }

}
