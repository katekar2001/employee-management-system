import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent {

  empData:any;

  constructor(private empService:EmployeeService,private router:Router){
    this.showAllData();
  }

  showAllData(){
    this.empService.getAllData().subscribe(data=>this.empData=data);
  }

  deleteData(id:any){
    this.empService.deleteDataById(id).subscribe(res=>console.log(res));
    this.showAllData();
  }

}
