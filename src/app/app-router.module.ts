import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';


//components
import {AppointmentComponent} from './appointment/appointment.component';
import { ConfirmaptComponent } from './confirmapt/confirmapt.component';
import{ViewappointmentComponent} from './viewappointment/viewappointment.component';
import{RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';


//route
const routes:Routes=[
    {path:'', component:AppointmentComponent},
    {path:'appointment', component:AppointmentComponent},
    {path:'viewa', component:ViewappointmentComponent},
    {path:'confirm',component:ConfirmaptComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouterModule{}