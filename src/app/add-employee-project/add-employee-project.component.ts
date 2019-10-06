import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";
import { ProjectService } from "../project.service";
import {Observable} from "rxjs";
import {Project} from "../project";

@Component({
  selector: 'app-add-employee-project',
  templateUrl: './add-employee-project.component.html',
  styleUrls: ['./add-employee-project.component.css']
})
export class AddEmployeeProjectComponent implements OnInit {

  employee: Employee;
  projects: Observable<Project[]>;
  projectId: number;

  constructor(private employeeService: EmployeeService,
              private projectService: ProjectService,
              private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.findAll();
    this.employee = this.employeeService.getter();
  }

  changeProjectItem(e) {
    this.projectService.getByName(e.target.value)
      .subscribe(data => {
        this.projectId = data.id;
      });
  }

  onSubmit() {
    if (this.projectId !== undefined && this.employee.id !== undefined) {
      this.projectService.addEmployeeToProject(this.employee.id, this.projectId)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['employee_list']);
        }, (error => {
          console.log(error);
        }));
    }
  }
}
