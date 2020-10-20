import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService}from '../auth.service'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
//implements OnInit {

  registerForm:FormGroup;
  constructor(private fb:FormBuilder, private service:AuthService) {
this.registerForm=fb.group({
  UserName:['',Validators.required],
  Password:['',Validators.required],
  ConfirmPassword:['',Validators.required]
},{validator:matchingFields('Password','ConfirmPassword')})

}
  
   onSubmit()
   {
     delete this.registerForm.value.ConfirmPassword;
     this.service.Register(this.registerForm.value).subscribe((data)=>{
       console.log('Data',data);
     })
   }

  
  }
  function matchingFields(field1,field2) {
    return form =>{
      
    if(form.controls[field1].value!== form.controls[field2].value)
    return{matchingFields:true}
  }
  
}
