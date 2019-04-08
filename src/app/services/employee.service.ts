import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }


  public getEmployees() {
    const endpoint = 'http://localhost:8080/rest/employees/';
    return this.http.get(endpoint);
  }
}
