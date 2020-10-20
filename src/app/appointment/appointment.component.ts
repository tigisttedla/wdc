import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { TestCenter } from '../Interfaces/TestCenter';
import { Destination } from '../Interfaces/Destination';
import { Nationality } from '../Interfaces/Nationality';
import {Reason} from '../Interfaces/Reason'
import { Sex } from '../Interfaces/Sex';
import {PaymentMethod} from '../Interfaces/Paymentmtd'
import { AppointmentService } from '../appointment.service';
import { MatDialog } from '@angular/material/dialog';
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

//sceduler
import {View } from '@syncfusion/ej2-angular-schedule';
    import { SchedulerElement } from '../Interfaces/SchedulerElement';
    import { ScheduleService } from '../schedule.service';
    import {EventRenderedArgs, ScheduleComponent, WeekService, WorkWeekService, MonthService, } from '@syncfusion/ej2-angular-schedule';
//pdf
import pdfMake from "pdfmake/build/pdfmake";  
import pdfFonts from "pdfmake/build/vfs_fonts";  
pdfMake.vfs = pdfFonts.pdfMake.vfs; 

@Component({
  selector: 'app-appointment',
  providers: [WeekService, WorkWeekService, MonthService],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  @ViewChild('scheduleObj', { static: true })
  public scheduleObj: ScheduleComponent;

    public selectedDate: Date = new Date(2020, 10, 15);
   
      public currentView: View = 'Week';
     //eventSettings: any;


  generatePDF() {
    let docDefinition = {
      
      content: [
        {
          text: 'Wudassie Diagnostic Center',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'Appointment Confirmation',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          text: 'Client Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text:'Name: '+ this.aptform.get('FirstName').value + " " + this.aptform.get('MiddleName').value + " " + this.aptform.get('LastName').value,
                bold:true
              },
              { text:'Citezen of: '+ this.aptform.get('Nationality').value },
              { text:'City: '+ this.aptform.get('City').value },
              { text:'Email Address: '+ this.aptform.get('EmailAddress').value },
              { text:'Mobile Number: '+this.aptform.get('MobileNumber').value }
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              { 
                text: `Confirmation No : ${((Math.random() *1000).toFixed(0))}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Appointment Detail',
          style: 'sectionHeader'
        },
        
            {text:'Test Date: '+ this.aptform.get('TestDate').value},
            {text:'Test Time: '+ this.aptform.get('TestTime').value},
            {text: 'Test Center: '+ this.aptform.get('TestCenter').value},

           
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
            ul: [
              'Please save this appointment comnfirmation on your phone ',
              'or print it on paper',
              'And show it at the test center',
            ],
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15,0, 15]          
        }
      }
    };

      pdfMake.createPdf(docDefinition).open();      

  }
  Reasons:Reason[]=[
    {value: 'travel', viewvalue: 'Travel'},
    {value: 'CheckUp', viewvalue: 'CheckUp'},
  ]
  TestCenters:TestCenter[]=[
    {value: 'Piassa', viewvalue: 'Piassa'},
    {value: 'Bole', viewvalue: 'Bole'},
  ]
  Sexs:Sex[]=[
    {value: 'Male', viewvalue: 'Male'},
    {value: 'Female', viewvalue: 'Female'},
  ]
  Nationalities:Nationality[]=[
    {value: 'Ethiopian', viewvalue: 'Ethiopian'},
    {value: 'Eriterian', viewvalue: 'Eriterian'},
    {value: 'Nigerian', viewvalue: 'Nigerian'},
    
  ]
  Destinations:Destination[]=[
    {value: 'Ethiopia', viewvalue: 'Ethiopia'},
    {value: 'Eriteria', viewvalue: 'Eriteria'},
    {value: 'Nigeria', viewvalue: 'Nigeria'},
  ]
  PaymentMethods:PaymentMethod[]=[
    {value:'Cash',viewvalue:'Cash'},
    {value:'Credit',viewvalue:'Credit'},
    
  ]
  aptform: FormGroup;
formSubmitted = false;
  constructor(private service:AppointmentService,private formBuilder: FormBuilder,private service1:ScheduleService) { }
  buildForm()
  {
    this.aptform = this.formBuilder.group(
      {
        FirstName:new FormControl('',Validators.required),
        MiddleName:new FormControl('',Validators.required),
        LastName:new FormControl('',Validators.required),
        Nationality:new FormControl(''),
        Region:new FormControl(''),
        City:new FormControl(''),
        SubCity:new FormControl(''),
        Woreda:new FormControl(''),
        Sex:new FormControl(''),
        BirthDate:new FormControl(''),
        EmailAddress:new FormControl('',Validators.email),
        MobileNumber:new FormControl(''),
        TestCenter:new FormControl(''),
        PaymentMethod:new FormControl(''),
        //{value: 'Checkup', disabled: true}
        TestReason:new FormControl('travel'),
        PassportNumber:new FormControl(''),
        PassportExpiaryDate:new FormControl(''),
        TravelDate:new FormControl(''),
        DestinationCountry:new FormControl(''),
        TicketNumber:new FormControl(''),
        TestDate:new FormControl(''),
        TestTime:new FormControl(''),
        Remark:new FormControl('')
      });

      this.aptform.get('TestReason').valueChanges.subscribe(value=>{
        if(value.TestReason=='CheckUp')
         {
           this.aptform.controls['PassportNumber'].disable()
          }


//         this.aptform.get('CheckUp').updateValueAndValidity();
// this.aptform.controls['PassportNumber'].disable();
      })
  
    // console.log(value)
    //  if(value.TestReason=='CheckUp')
    //  {
    //    this.aptform.controls['PassportNumber'].disable()
    //   }
   //}
  //  this.userForm.get('loginTypeId').valueChanges.subscribe(
  //   (loginTypeId: string) => {
  //     ...
  //     this.userForm.get('loginTypeId').updateValueAndValidity(); <-- Triggers valueChanges!
  // }
    
  //   this.aptform.controls['PassportNumber'].disable();
  //   //.disable();
  //   // this.aptform.controls['PassportExpiaryDate'].disable();
  //   // this.aptform.controls['TravelDate'].disable();
  //   // this.aptform.controls['DestinationCountry'].disable();
  //   // this.aptform.controls['TicketNumber'].disable();
  // )}
  }
 
 
    onSubmit(){
 
    console.log(this.aptform.value);
     
   this.service.createAppointment(this.aptform.value).subscribe((data)=>{
     console.log('Data-',data)
   });
  
  } 
 
ngOnInit(){
this.buildForm();

const scheduleObj = this.scheduleObj; 
   
this.service1.getAll().subscribe((data :SchedulerElement[] )=>{
  console.log('Data-',data)
 
 scheduleObj.eventSettings.dataSource = data;
 
 });

}
oneventRendered(args: EventRenderedArgs): void {
      
  console.log(args.data);
  
   this.service1.createScedule(args.data).subscribe((data)=>{
        console.log('Data-',data)
       });
      
  }
}


