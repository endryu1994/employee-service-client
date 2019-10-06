import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private router: Router,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.findAll();
  }

  deleteEmployee(employeeId: number) {
    this.employeeService.delete(employeeId)
      .subscribe(data => {
          console.log(data);
          this.reloadData();
          },
          error => console.log(error));
  }

  addEmployeeProject(employee: Employee) {
    this.employeeService.setter(employee);
    this.router.navigate(['employee-project']);
  }

  editEmployee(employee: Employee) {
    this.employeeService.setter(employee);
    this.router.navigate(['update-employee']);
  }

  deleteProject(employeeId: number) {
    this.employeeService.deleteEmployeeProject(employeeId)
      .subscribe(data => {
        this.reloadData();
        console.log(data);
      },
        error => console.log(error));
  }
}
