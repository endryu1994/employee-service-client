import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = '/api/v1/employee';
  private employee: Employee;

  constructor(private http: HttpClient) { }

  get(employeeId: number): Observable<Object> {
    return this.http.get(`${this.url}/${employeeId}`);
  }

  add(employee: Object): Observable<Object> {
    return this.http.post(`${this.url}/`, employee);
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.url}/`);
  }

  update(employeeId: number, employee: any): Observable<Object> {
    return this.http.put(`${this.url}/${employeeId}`, employee);
  }

  delete(employeeId: number): Observable<any> {
    return this.http.delete(`${this.url}/${employeeId}`, { responseType: 'text' });
  }

  deleteEmployeeProject(employeeId: number): Observable<any> {
    return this.http.put(`${this.url}/${employeeId}/deleteProject`, null);
  }

  setter(employee: Employee) {
    this.employee = employee;
  }

  getter(): Employee {
    return this.employee;
  }
}
