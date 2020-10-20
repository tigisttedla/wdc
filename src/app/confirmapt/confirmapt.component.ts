import { Component, OnInit, ViewChild,  } from '@angular/core';
import {EventRenderedArgs, ScheduleComponent, WeekService, WorkWeekService, MonthService, View } from '@syncfusion/ej2-angular-schedule';
import { ScheduleService } from '../schedule.service';
//import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { SchedulerElement } from '../Interfaces/SchedulerElement';




   
@Component({
  selector: 'app-confirmapt',
  providers: [WeekService, WorkWeekService, MonthService],
  templateUrl: './confirmapt.component.html'
})

export class ConfirmaptComponent implements OnInit  {
  
  constructor(private service:ScheduleService){}
  @ViewChild('scheduleObj', { static: true })
  public scheduleObj: ScheduleComponent;

    public selectedDate: Date = new Date(2020, 10, 15);
   
      public currentView: View = 'Week';
  
ngOnInit(){
  const scheduleObj = this.scheduleObj; 
   
  this.service.getAll().subscribe((data :SchedulerElement[] )=>{
    console.log('Data-',data)
   
   scheduleObj.eventSettings.dataSource = data;
   
   });

}
    
  oneventRendered(args: EventRenderedArgs): void {
      
console.log(args.data);

 this.service.createScedule(args.data).subscribe((data)=>{
      console.log('Data-',data)
     });
    
}



   
}


