import { Injectable } from '@angular/core';
import { HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl:string='http://localhost:49654/api/Appointment/'
  constructor(private http:HttpClient) { }
  
  getAll(){
return this.http.get(this.baseUrl);
  }
  getAppointment(id)
  {
return this.http.get(this.baseUrl+'/'+id);
  }
  createAppointment(Appointment){
    return this.http.post(this.baseUrl,Appointment)
  }
  UpdateAppointment(id,Appointment){
    return this.http.put(this.baseUrl +'/'+ id,Appointment)
  }
}
