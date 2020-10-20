import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

baseUrl:string ='http://localhost:49654/api/Schedules/'
url:string ='http://localhost:49654/api/schedulerpost/'

  constructor(private http:HttpClient) { }

  createScedule(schedule){
    return this.http.post(this.url,schedule)
  }
  getAll(){
    return this.http.get(this.baseUrl);
      }
}


