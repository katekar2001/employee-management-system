import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL:string = "http://3.110.193.86:4444/";
  getAllEmp:string = "http://3.110.193.86:4444/employee/employees";
  getEmpById:string="http://3.110.193.86:4444/employee/id/";
  saveEmp:string = "http://3.110.193.86:4444/employee/"
  updateEmpById:string = "http://3.110.193.86:4444/employee/id/"
  deleteEmpById:string = "http://3.110.193.86:4444/employee/id/"

  constructor(private http:HttpClient) { }

  getAllData(){
    return this.http.get(this.getAllEmp);
  }

  getDataById(id:any){
    return this.http.get(`${this.getEmpById}${id}`);
  }

  saveData(data:any){
    return this.http.post(this.saveEmp,data);
  }

  updateDataById(id:any,data:any){
    return this.http.put(`${this.updateEmpById}${id}`,data)
  }

  deleteDataById(id:any){
    return this.http.delete(`${this.deleteEmpById}${id}`,{responseType:'text'});
  }
  
}
