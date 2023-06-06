import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent {

  constructor(private empService:EmployeeService,private router:Router){}

  deleteEmpForm = new FormGroup({
    id:new FormControl('',[Validators.required])
  })

  deleteEmployee(){
    
  }
}
