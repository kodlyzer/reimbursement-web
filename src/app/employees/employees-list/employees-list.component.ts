import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/services/employee.service';

@Component({
  selector: 'kdir-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  employees: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }

}
