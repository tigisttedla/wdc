import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentService } from '../appointment.service';
import { AppointmentElement } from '../Interfaces/AppointmentElement';
import { UpdateAppointmentComponent } from '../update-appointment/update-appointment.component';
//pdf
import pdfMake from "pdfmake/build/pdfmake";  
import pdfFonts from "pdfmake/build/vfs_fonts";  
pdfMake.vfs = pdfFonts.pdfMake.vfs; 
@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit
 {
  //displayedColumns: string[]= ['FirstName','MiddleName','LastName','Sex','BirthDate','EmailAddress','Nationality','Region','City','Subcity','Woreda','MobileNumber','TestCenter','TestReason','PaymentMethod','PassportNumber','PassportExDate','TravelDate','TicketNumber','DestinationCountry','TestDate','TestTime','Remark']
  displayedColumns: string[]=[
    'Actions',
    'FirstName',
  'MiddleName',
  'LastName',
  'Sex',
  'BirthDate',
  'EmailAddress',
  'Nationality',
  'Region',
  'City',
  'Subcity',
  'Woreda',
  'MobileNumber',
  'TestCenter',
  'TestReason',
  'PaymentMethod',
  'PassportNumber',
  'Passportexdate',
  'TravelDate',
  'TicketNumber',
  'DestinationCountry',
  'TestDate',
  'TestTime',
  'Remark',
'PatientId',
'SpecimenId',
'CollectionDate',
'CollectionSite',
'SpecimenType',
'RequestedBy',
'TestMethod',
'RequestedTest',
'Result',
'TestPerformedBy',
'ResultViewedBy',
'ResultDate',
'ReportAuthorizedBy'
]
  dataSource;
  constructor(private service:AppointmentService,private dialog:MatDialog) { }
  
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) pagiantor:MatPaginator;
  applyFilter(filtervalue:string)
  {
this.dataSource.filter= filtervalue.trim().toLowerCase();
  }
  ngOnInit() {
    this.service.getAll().subscribe((data)=>
    {
      console.log('Result-',data);
      this.dataSource=new MatTableDataSource<AppointmentElement>(data as AppointmentElement []) 
      this.dataSource.pagiantor=this.pagiantor;
      
    })
  }
  PrintResult(appointment)
  {
    console.log(appointment);
    let docDefinition = {  
      content: [
        {
          text: 'Wudassie Diagnostic Center',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'SARS COV-2 Lab Result Report',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          text: 'Client Information',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text:'Name: '+ appointment.FirstName + " " + appointment.MiddleName + " " + appointment.LastName,
                bold:true
              },
              { text:'Patient ID: '+ appointment.PatientId},
              { text:'Gender: '+ appointment.sex},
              { text: 'Age: '+ appointment.BirthDate },
              

            ],
            [
              
                { text:'PassportNumber: '+ appointment.PassportNumber, alignment: 'right' },
              { text:'Citzen of: '+ appointment.Nationality, alignment: 'right' },
              { text:'Residence: '+ appointment.City, alignment: 'right' },
              { text:'Phone Number: '+ appointment.MobileNumber, alignment: 'right' },
              
          
              { 
                text: `Report Number : ${((Math.random() *1000).toFixed(0))}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Specimen Information',
          style: 'sectionHeader'
        },
        
        { text:'Specimen Id: '+ appointment.SpecimenId },
        { text:'Collection Date:'+ appointment.CollectionDate },
        { text:'Collection Site: '+ appointment.CollectionSite },
        { text:'Specimen Type: '+ appointment.SpecimenType },
        { text:'Requested By :'+ appointment.RequestedBy },

            
       
        {
          text: 'Test Result',
          style: 'sectionHeader'
        },
         
          { text:'Test Method: '+ appointment.TestMethod },
            
          { text:'RequestedTest: '+ appointment.RequestedTest }, 
          { text:'Result: '+ appointment.Result },        
         
        {
          text: 'Additional Information',
          style: 'sectionHeader'
        },
       
            { text:'Test Performed By:'+ appointment.TestPerformedBy },
            { text:'ResultViewedBy: '+ appointment.ResultViewedBy },
            { text:'ResultDate: '+ appointment.ResultDate },
        
        {
          text: 'Additional Information',
          style: 'sectionHeader'
        },
        { text:'Report Authorized By: '+ appointment.ReportAuthorizedBy },
        { text: 'Signature' },
        { text: 'Date' },
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
  updateApt(appointment)
  {
    console.log(appointment);
this.dialog.open(UpdateAppointmentComponent,{
  data:{
    Id:appointment.Id,
    FirstName:appointment.FirstName,
    MiddleName:appointment.MiddleName,
    LastName:appointment.LastName,
    PatientId:appointment.PatientId,
    SpecimenId:appointment.SpecimenId,
    CollectionDate:appointment.CollectionDate,
CollectionSite:appointment.CollectionSite,
SpecimenType:appointment.SpecimenType,
RequestedBy:appointment.RequestedBy,
TestMethod:appointment.TestMethod,
RequestedTest:appointment.RequestedTest,
Result:appointment.Result,
TestPerformedBy:appointment.TestPerformedBy,
ResultViewedBy:appointment.ResultViewedBy,
ResultDate:appointment.ResultDate,
ReportAuthorizedBy:appointment.ReportAuthorizedBy,

  }
})
  }
}
