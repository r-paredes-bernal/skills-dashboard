import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/Employee';

const EMPLOYEE_DATA: Employee[] = [
  {sysId: 1, eId: 'carlos.baez', name: 'Baez Carlos', level: 11, location: 'CD-MX', birthday: '00/00/00'},
  {sysId: 2, eId: 's.coronado.andrad', name: 'Coronado Andrade, S.', level: 12, location: 'MTY', birthday: '00/00/00'},
  {sysId: 3, eId: 'g.rodriguez.lozano', name: 'Rodriguez Lozano, G.', level: 11, location: 'CD-MX', birthday: '00/00/00'},
  {sysId: 4, eId: 'r.sanchez.rojas', name: 'Sanchez Rojas, R.', level: 10, location: 'MTY', birthday: '00/00/00'},
  {sysId: 5, eId: 'ivan.albor', name: 'Albor, Ivan', level: 9, location: 'USA', birthday: '00/00/00'},
];

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  displayedColumns: string[] = ['eId', 'name', 'level', 'location'];
  dataSource = EMPLOYEE_DATA;
  idInput;

  constructor() { }

  ngOnInit() {
  }

  doFilter( input ){
    let filteredData = [];
    if ( input ) {
      filteredData = this.dataSource.filter( ( employee )  => {
        return employee.eId.includes(input);
      });
    } else {
      // reset the table when input is empty
      filteredData = EMPLOYEE_DATA;
    }
    this.dataSource = filteredData;
  }

  onClickNombre(val) {
    console.log(val);
    console.log('Click nombre');
  }
}
