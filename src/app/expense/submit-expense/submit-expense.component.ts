import { Component, OnInit } from '@angular/core';
import { Expense } from '../../shared/models/expense';
import { ExpenseService } from '../../shared/services/expense.service';
import { ApproverService } from '../../shared/services/approver.service';
import { ExpCategoryService } from '../../shared/services/expCategory.service';
import { EmployeeService } from '../../shared/services/employee.service';
import { ToastyService } from 'ng2-toasty';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'kdir-submit-expense',
  templateUrl: './submit-expense.component.html',
  styleUrls: ['./submit-expense.component.scss']
})
export class SubmitExpenseComponent implements OnInit {

  expense: Expense = new Expense();
  approvers;
  expCategories;
  employees;
  constructor(private expenseService: ExpenseService,
      private approverService: ApproverService,
      private expCategoryService: ExpCategoryService,
      private employeeService: EmployeeService,
      private toastyService: ToastyService,
      private router: Router) { }

  ngOnInit() {
      this.expCategoryService.getExpCategories()
          .subscribe(exp => {
              this.expCategories = exp;
          });
      this.approverService.getApprovers()
          .subscribe(app => {
              this.approvers = app;
          });
      //Think on the logic of gett

  }

  onSubmit(form: NgForm) {
      // var nativeElement: HTMLInputElement = this.fileInput.nativeElement;
      var formData = this.expense;
      formData.expenseId = 0;
      //dummy data just to fill the object
      formData.employeeId = 1;
      formData.employeeName = "Dummy Empl";
      formData.approverId = this.expense.approverId;
      formData.approverName = this.expense.approverName;
      formData.expenseDate = this.expense.expenseDate;
      formData.submitDate = this.expense.submitDate;
      formData.approvedDate = this.expense.approvedDate;
      formData.amount = this.expense.amount;
      formData.totalAmount = this.expense.totalAmount;
      formData.expenseDetails = this.expense.expenseDetails;
      formData.ticketStatus = this.expense.ticketStatus;
      formData.expCategory = this.expense.expCategory;
      formData.reason = "";
      formData.rejectedFlag = "";
      formData.docName = "";//nativeElement.files[0].name;//this.expense.docName;
      console.log("Form Data:- ", formData);


      this.expenseService.submitExpense(formData)
          .subscribe(exp => {
              this.toastyService.success({
                  title: 'Success',
                  msg: 'New Expense Created!',
                  theme: 'bootstrap',
                  showClose: true,
                  timeout: 5000
              });
              this.router.navigate(['/my-expenses']);
          },
          err => {
              this.toastyService.error({
                  title: 'Error',
                  msg: 'An unexpected error occured while creating new Expense!',
                  theme: 'bootstrap',
                  showClose: true,
                  timeout: 5000
              });
          });
  }

}
