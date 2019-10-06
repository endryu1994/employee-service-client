import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";
import { UpdateProjectComponent } from "./update-project/update-project.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { CreateProjectComponent } from "./create-project/create-project.component";
import {AddEmployeeProjectComponent} from "./add-employee-project/add-employee-project.component";

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employee_list', component: EmployeeListComponent },
  { path: 'project_list', component: ProjectListComponent },
  { path: 'new_employee', component: CreateEmployeeComponent },
  { path: 'new_project', component: CreateProjectComponent },
  { path: 'update-employee', component: UpdateEmployeeComponent },
  { path: 'update-project', component: UpdateProjectComponent },
  { path: 'employee-project', component: AddEmployeeProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
