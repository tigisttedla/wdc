import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl:string ='http://localhost:49654/auth/'
  constructor(private http:HttpClient) { }

  Register(user){
    return this.http.post(this.baseUrl+'Register',user)
  }
  Login(user){
    return this.http.post(this.baseUrl+'Login',user)
  }
  getUserName()
  {
return localStorage.getItem('UserName');
  }
  IsAuthenticated()
  {
    return !!localStorage.getItem('token_value');
  }
  logout(){
    localStorage.removeItem('UserName');
    localStorage.removeitem('token_value');
  }

}
