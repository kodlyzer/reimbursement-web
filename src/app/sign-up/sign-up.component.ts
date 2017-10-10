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
    //TODO:- Once empoloyee submitted, hide submi button and show edit button, based on signedUp flag
    this.approverService.getApprovers()
      .subscribe(app => {
        this.approvers = app;
      });
  }

  onSubmit(form: NgForm) {
    var formData = this.employee;
    formData.employeeId = this.employee.employeeId;
    formData.userName = this.employee.userName;
    formData.employeeName = this.employee.employeeName;
    formData.gender = this.employee.gender;
    formData.designation = this.employee.designation;
    formData.skillSet = this.employee.skillSet;
    formData.dob = this.employee.dob;
    formData.email = this.employee.email;
    formData.mobile = this.employee.mobile;
    formData.alternateNumber = this.employee.alternateNumber;
    formData.addressLine1 = this.employee.addressLine1;
    formData.addressLine2 = this.employee.addressLine2;
    formData.addressLine3 = this.employee.addressLine3;
    formData.zipCode = this.employee.zipCode;
    formData.country = this.employee.country;
    formData.state = this.employee.state;
    formData.fatherName = this.employee.fatherName;
    formData.motherName = this.employee.motherName;
    formData.fatherDob = this.employee.fatherDob;
    formData.motherDob = this.employee.motherDob;
    formData.signedUp = true;
    formData.emergencyContactName = this.employee.emergencyContactName;
    formData.emergencyContactRelation = this.employee.emergencyContactRelation;
    formData.emergencyContactNumber = this.employee.emergencyContactNumber;
    formData.emergencyContactDOB = this.employee.emergencyContactDOB;
    formData.reportingManager = this.employee.reportingManager;

    this.employeeService.submitEmployee(formData)
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
