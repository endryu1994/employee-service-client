import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  private employee: Employee;

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit() {
    this.employee = this.employeeService.getter();
  }

  onSubmit() {
    if (this.employee.id !== undefined) {
      this.employeeService.update(this.employee.id, this.employee)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['employee_list']);
        }, (error => {
          console.log(error);
        }));
    }
  }
}
