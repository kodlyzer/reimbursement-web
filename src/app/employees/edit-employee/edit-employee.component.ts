import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../../shared/models/employee';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../shared/services/employee.service';
import { ApproverService } from '../../shared/services/approver.service';
import { ToastyService } from 'ng2-toasty';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'kdir-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  heading: string;
  empId: number;
  employee: Employee = new Employee();
  approvers;

  @ViewChild('empIdInput') empIdInput;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private approverService: ApproverService,
    private toastyService: ToastyService) {

    route.params.subscribe(p => {
      this.empId = +p['id'];
    });

  }

  ngOnInit() {
    this.approverService.getApprovers()
      .subscribe(app => {
        this.approvers = app;
      });

    if (this.empId) {
      this.heading = "Employee Details";
      this.getEmployeeById(this.empId)
    } else {
      this.heading = "Edit Your Details";
      this.getEmployeeByUsername();
    }
  }

  onSubmit(form: NgForm) {
    this.employee.signedUp = true;
    this.employeeService.editEmployee(this.employee)
      .subscribe(e => {
        this.toastyService.success({
          title: 'Success',
          msg: 'Info Edited Successfully!',
          theme: 'bootstrap',
          showClose: true,
          timeout: 5000
        });
      },
      err => {
        this.toastyService.error({
          title: 'Error',
          msg: 'An unexpected error occured while editing details!',
          theme: 'bootstrap',
          showClose: true,
          timeout: 5000
        });
      });
  }

  private getEmployeeByUsername() {
    this.onDetailsFetchComplete(this.employeeService.getEmployeeByUserName());
  }

  private getEmployeeById(id) {
    this.onDetailsFetchComplete(this.employeeService.getEmployee(id));
  }

  private onDetailsFetchComplete(empObservable) {
    empObservable
      .subscribe(e => {
        this.employee = e[0];
        this.toastyService.success({
          title: 'Success',
          msg: 'Employee Info Retrieved Successfully!',
          theme: 'bootstrap',
          showClose: true,
          timeout: 5000
        });
      }, err => {
        this.toastyService.error({
          title: 'Error',
          msg: 'Error Occured while Fetching Details!',
          theme: 'bootstrap',
          showClose: true,
          timeout: 5000
        });
      });
  }
}
