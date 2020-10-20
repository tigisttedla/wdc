import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentService } from '../appointment.service';
import {Ptshowup} from '../Interfaces/Ptshowup'




@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

 
  Ptshowups:Ptshowup[]=[
    {value:'Yes',viewvalue:'Yes'},
    {value:'No',viewvalue:'No'},
    
  ]
  form:FormGroup;
  id:number;
  constructor(private fb:FormBuilder,
              private dialogref:MatDialogRef<UpdateAppointmentComponent>,
              @Inject(MAT_DIALOG_DATA){FirstName,MiddleName,LastName,Id,PatientId,SpecimenId,CollectionDate,CollectionSite,SpecimenType,RequestedBy,
                TestMethod,RequestedTest,Result,TestPerformedBy,ResultViewedBy,ResultDate,ReportAuthorizedBy},
              private service:AppointmentService) {
                this.id=Id;

                this.form=fb.group({
                  FirstName:[FirstName],
                   MiddleName:[MiddleName],
                   LastName:[LastName], 
                   PatientId:[PatientId],
                   SpecimenId:[SpecimenId],
                CollectionDate:[CollectionDate],
                 CollectionSite:[CollectionSite],
                  SpecimenType:[SpecimenType],
                  RequestedBy:[RequestedBy],
                 TestMethod:[TestMethod],
                RequestedTest:[RequestedTest],
                 Result:[Result],
               TestPerformedBy:[TestPerformedBy],
               ResultViewedBy:[ResultViewedBy],
                ResultDate:[ResultDate],
             ReportAuthorizedBy:[ReportAuthorizedBy]
                })
               }

  ngOnInit() {
  }
Save(){

  this.service.UpdateAppointment(this.id, this.form.value).subscribe((data)=>
  {
console.log('Data-',data);
  });

}

Close()
{
this.dialogref.close();
}
}
