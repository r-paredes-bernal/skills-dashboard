import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }


  public getEmployees(): Observable<Employee> {
    const endpoint = 'http://localhost:8080/rest/employees/';
    return this.http.get<Employee>(endpoint);
  }
}
