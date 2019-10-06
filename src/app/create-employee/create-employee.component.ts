import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private router: Router,
              private employeeService: EmployeeService) { }

  ngOnInit() {}

  save() {
    this.employeeService.add(this.employee)
      .subscribe(data => console.log(data),
          error => console.log(error));
    this.employee = new Employee();
  }

  onSubmit() {
    this.save();
    this.router.navigate(['employee_list']);
  }
}
