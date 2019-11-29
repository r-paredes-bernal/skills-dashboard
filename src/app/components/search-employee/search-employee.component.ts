import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/Employee';
import { EmployeeService } from '../../services/employee.service';




@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  idInput;
  eId = '123';
  dataSource;
  originalDataSource;
/*
  EMPLOYEE_DATA: Employee[] = [
    {sysId: 1, eId: 'carlos.baez', name: 'Baez Carlos', level: 11, location: 'CD-MX', birthday: '00/00/00'},
    {sysId: 2, eId: 's.coronado.andrad', name: 'Coronado Andrade, S.', level: 12, location: 'MTY', birthday: '00/00/00'},
    {sysId: 3, eId: 'g.rodriguez.lozano', name: 'Rodriguez Lozano, G.', level: 11, location: 'CD-MX', birthday: '00/00/00'},
    {sysId: 4, eId: 'r.sanchez.rojas', name: 'Sanchez Rojas, R.', level: 10, location: 'MTY', birthday: '00/00/00'},
    {sysId: 5, eId: 'ivan.albor', name: 'Albor, Ivan', level: 9, location: 'USA', birthday: '00/00/00'},
  ];
*/
  constructor(private employeeService: EmployeeService) {
    this.employeeService.getEmployees()
    .subscribe(
      (data) => {
        this.dataSource = data;
        this.originalDataSource = data;
        console.log(this.dataSource);
        },
        (error) => {
          console.error('Error en getEmployees(): ' + JSON.stringify(error));
        }
      );
  }

  ngOnInit() {
  }

  doFilter( input ){
    let filteredData = [];
    input = input.trim().toUpperCase();
    if ( input ) {
      filteredData = this.dataSource.filter( ( employee )  => {
        return employee.eId.toUpperCase().includes(input);
      });
    } else {
      // reset the table when input is empty
      filteredData = this.originalDataSource;
    }
    this.dataSource = filteredData;
  }

}
