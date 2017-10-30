import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/models/employee';
import { EmployeeService } from '../shared/services/employee.service';
import { ApproverService } from '../shared/services/approver.service';
import { ToastyService } from 'ng2-toasty';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'kdir-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  approvers;
  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private approverService: ApproverService,
    private toastyService: ToastyService,
    private router: Router) { }

  ngOnInit() {
    this.approverService.getApprovers()
      .subscribe(app => {
        this.approvers = app;
      });
  }

  onSubmit(form: NgForm) {
    this.employee.signedUp = true;
    this.employeeService.submitEmployee(this.employee)
      .subscribe(e => {
        this.toastyService.success({
          title: 'Success',
          msg: 'New Employee Created!',
          theme: 'bootstrap',
          showClose: true,
          timeout: 5000
        });
        this.router.navigate(['/edit-employee']);
      },
      err => {
        this.toastyService.error({
          title: 'Error',
          msg: 'An unexpected error occured while creating new Employee!',
          theme: 'bootstrap',
          showClose: true,
          timeout: 5000
        });
      });
  }

}
