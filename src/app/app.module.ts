import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//services
import {AppointmentService} from './appointment.service';
import { AppRouterModule } from './app-router.module';
//material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from "@angular/material/toolbar";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule }from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {AuthService} from './auth.service';
import {ScheduleService} from './schedule.service'
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
  //forms
  import { ReactiveFormsModule,FormsModule } from '@angular/forms';
 // import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import {MatRadioModule} from '@angular/material/radio';
import { ConfirmaptComponent } from './confirmapt/confirmapt.component';
//sceduler


import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

// 

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    HeaderComponent,
    FooterComponent,
    ViewappointmentComponent,
    UpdateAppointmentComponent,
    ConfirmaptComponent,
    RegisterComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,MatTableModule,MatDialogModule,MatRadioModule,MatSortModule,MatPaginatorModule,
    MatListModule,
    //scheduler
    ScheduleModule,
    ButtonModule,
    
    
  ],
  
  entryComponents:[UpdateAppointmentComponent,ConfirmaptComponent],
  providers: [AppointmentService,AuthService,MatDatepickerModule,ScheduleService,DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
