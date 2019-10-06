import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from "./project";
import { EmployeeService } from "./employee.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url = '/api/v1/project';
  private project: Project;

  constructor(private http: HttpClient,
              private employeeService: EmployeeService) { }

  getByName(projectName: string): Observable<Project> {
    return this.http.get<Project>(`${this.url}/name/${projectName}`);
  }

  add(project: Object): Observable<Object> {
    return this.http.post(`${this.url}/`, project);
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.url}/`);
  }

  update(projectId: number, project: any): Observable<Object> {
    return this.http.put(`${this.url}/${projectId}`, project);
  }

  delete(projectId: number): Observable<any> {
    return this.http.delete(`${this.url}/${projectId}`, { responseType: 'text' });
  }

  addEmployeeToProject(employeeId: number, projectId: number): Observable<Object> {
    return this.http.put(`${this.url}/${projectId}/add/${employeeId}`, this.employeeService.get(employeeId));
  }

  setter(project: Project) {
    this.project = project;
  }

  getter(): Project {
    return this.project;
  }
}
