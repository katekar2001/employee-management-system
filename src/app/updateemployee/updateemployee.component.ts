import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent {

  empId:any;

  constructor(private empService : EmployeeService, private activateRoute : ActivatedRoute,private router:Router){

    this.activateRoute.params.subscribe(
      (res)=>{
        console.log(res);
        this.empId=res['id']
      });

    this.getId();
  }

  updateEmpForm = new FormGroup({
    id:new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    emailId:new FormControl('')
  })

  getId(){
    this.empService.getDataById(this.empId).subscribe(
      (res:any)=>{
        console.log(res);
        this.updateEmpForm.setValue(res);
      })
  }

  updateEmployee(){
    this.empService.updateDataById(this.empId,this.updateEmpForm.value).subscribe();
    this.router.navigate(['showdata']);
  }
}
