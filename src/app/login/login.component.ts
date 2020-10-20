import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginData= {
  UserName:'',
  Password:''
}


  constructor(private service:AuthService,private router:Router) { }

  
login(){
  //console.log(this.loginData)
  this.service.Login(this.loginData).subscribe((data:any)=>{
    console.log("data " ,data)
    localStorage.setItem('UserName', data.UserName);
    localStorage.setItem('token_value',data.token_value);
    this.router.navigate(['/viewa'])
  }, (error)=> alert(error.error.message
  ));
   
  
}
}
