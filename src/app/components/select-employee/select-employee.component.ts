import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-select-employee',
  templateUrl: './select-employee.component.html',
  styleUrls: ['./select-employee.component.css']
})
export class SelectEmployeeComponent implements OnInit {
  employee: Employee = {
    sysId: 0,
    eId: '',
    name: '',
    level: 0,
    location: '',
    birthday: ''
  };

  constructor(private employeeService: EmployeeService) {
    /*
    this.employeeService.getEmployeeById(1)
    .subscribe(
      (data) => {
        this.employee = data;
        },
        (error) => {
          console.error('Error en getEmployeeById(): ' + JSON.stringify(error));
        }
      );
      */
  }


  ngOnInit() {
  }

  onClickGuardar(){
    console.log(this.employee.eId);
    // llamar el Servicio saveEmployee y mostrar un mensaje en consola
    // mencionando si el guardado fue exitoso
    // 1 exitoso, 0 o -1 error
    // saveEmployee
  }
}
