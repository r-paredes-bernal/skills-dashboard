import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../interfaces/Employee';


@Component({
  selector: 'app-table-employee',
  templateUrl: './table-employee.component.html',
  styleUrls: ['./table-employee.component.css']
})

export class TableEmployeeComponent implements OnInit {
  displayedColumns: string[] = ['eId', 'name', 'level', 'location'];
  dataSource;
  @Input() data: Employee;

  constructor(private employeeService: EmployeeService) {
    this.dataSource = this.data;
   }

  ngOnInit() {
    this.dataSource = this.data;
  }

  onClickNombre(val) {
    console.log(val);
  }
}
