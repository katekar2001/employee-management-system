import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

  constructor(private empService:EmployeeService,private router:Router){
  }

  addEmpForm = new FormGroup({
    emailId:new FormControl('',[Validators.required,Validators.maxLength(35)]),
    firstName:new FormControl('',[Validators.required,Validators.maxLength(15)]),
    lastName:new FormControl('',[Validators.required,Validators.maxLength(15)])
  })

  addEmployee(){
    this.empService.saveData(this.addEmpForm.value).subscribe(res=>console.log(res));
    alert("Employee added successfully");
    this.router.navigate(['showdata']);
  }

}
