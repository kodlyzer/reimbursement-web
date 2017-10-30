import { Component, OnInit } from '@angular/core';
import { Expense } from '../../shared/models/expense';
import { ExpenseService } from '../../shared/services/expense.service';
import { ApproverService } from '../../shared/services/approver.service';
import { ExpCategoryService } from '../../shared/services/expCategory.service';
import { EmployeeService } from '../../shared/services/employee.service';
import { ToastyService } from 'ng2-toasty';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'kdir-submit-expense',
    templateUrl: './submit-expense.component.html',
    styleUrls: ['./submit-expense.component.scss']
})
export class SubmitExpenseComponent implements OnInit {
    heading: string;
    expenseBackup: any;
    isView: boolean;
    isEdit: boolean;
    expense: Expense = new Expense();
    approvers;
    expCategories;
    employees;
    constructor(private expenseService: ExpenseService,
        private approverService: ApproverService,
        private expCategoryService: ExpCategoryService,
        private employeeService: EmployeeService,
        private toastyService: ToastyService,
        private router: Router,
        private route: ActivatedRoute, ) {
        route.params.subscribe(p => {
            this.expense.expenseId = +p['id'];
        });
    }

    ngOnInit() {
        this.expCategoryService.getExpCategories()
            .subscribe(exp => {
                this.expCategories = exp;
            });
        this.approverService.getApprovers()
            .subscribe(app => {
                this.approvers = app;
            });

        if(this.expense.expenseId) { // View/Edit Mode
            this.heading = "Edit Expense";
            this.isEdit = true;
            this.getExpenseDetails()
        } else {
            this.heading = "New Expense";
        }

    }

    getExpenseDetails() {
        this.expenseService.getExpenseById(this.expense.expenseId)
        .subscribe(e => {
            this.expense = e[0];
                this.toastyService.success({
                    title: 'Success',
                    msg: 'Expense retieved successfully!',
                    theme: 'bootstrap',
                    showClose: true,
                    timeout: 5000
                });
            },
            err => {
                this.toastyService.error({
                    title: 'Error',
                    msg: 'Error Occured while Fetching Expenses!',
                    theme: 'bootstrap',
                    showClose: true,
                    timeout: 5000
                });
            });
    }

    onSubmit(form: NgForm) {
        if(this.isEdit) {
            this.saveEdits(this.expense)
        } else {
            this.addNewExpense(this.expense)
        }
    }

    saveEdits(expense) {
        this.onSaveCompletion(this.expenseService.editExpense(expense), 'Expense Edited Successfully');
    }

    addNewExpense(expense) {
        this.onSaveCompletion(this.expenseService.submitExpense(expense), 'New Expense Created!');
    }

    onSaveCompletion(apiObservable, msg) {
        apiObservable.subscribe(exp => {
            this.toastyService.success({
                title: 'Success',
                msg: msg,
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
