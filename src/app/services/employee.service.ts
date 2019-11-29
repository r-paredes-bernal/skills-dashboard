import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }


  public getEmployees() {
    const endpoint = 'http://localhost:8080/rest/employees/';
    return this.http.get(endpoint);
  }

  public getEmployeeById(sysId){
    const endpoint = 'http://localhost:8080/rest/employees/' + sysId;
    return this.http.get(endpoint);
  }


  public saveEmployee(employee:Employee){
    const body = {
      sysId: employee.sysId,
      eId: employee.eId,
      name: employee.name,
      level: employee.level,
      location: employee.location,
      birthday: employee.birthday
    };
    const endpoint = 'http://localhost:8080/rest/employees/';
    return this.http.post(endpoint, body);
  }
}
