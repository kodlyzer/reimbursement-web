import { Component, OnInit, Inject } from '@angular/core';
import { Expense } from '../../shared/models/expense';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpenseService } from '../../shared/services/expense.service';
import { ToastyService } from 'ng2-toasty';
import { DocsService } from '../../shared/services/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'kdir-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.scss']
})
export class ExpenseDetailsComponent implements OnInit {
  expenses: Expense = new Expense();
  docs: any[] = [];
  pdfs: any[] = [];
  expense: Expense = new Expense();
  constructor(private router: Router,
    private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private toastyService: ToastyService,
    private docService: DocsService,
    private sanitizer: DomSanitizer, @Inject('BASE_URL') private originUrl: string) {

    route.params.subscribe(p => {
      this.expense.expenseId = +p['id'];
    });

  }

  ngOnInit() {
    this.docService.getDocs(this.expense.expenseId)
      .subscribe(doc => {
        for (var i = 0; i < doc[0].length; i++) {
          if (doc[0][i].docName.endsWith(".pdf")) {
            //PDFs Collection
            doc[0][i].docName = this.sanitizer.bypassSecurityTrustResourceUrl(this.originUrl + 'uploads/' + doc[0][i].docName);
            this.pdfs.push(doc[0][i]);

          } else {
            //Images Collection
            doc[0][i].docName = this.sanitizer.bypassSecurityTrustResourceUrl(this.originUrl + 'uploads/' + doc[0][i].docName);
            this.docs.push(doc[0][i]);

          }
        }

      }, err => {
        console.log("Error Occured while fetching docs!");
      });
    this.expenseService.getExpenseById(this.expense.expenseId)
      .subscribe(e => {
        //Since, I am sending the component back as querable data from server.
        //But, in case of ID, it will be only one.
        this.expenses = e[0];
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
    var formData = this.expense;
    formData.expenseId = this.expenses.expenseId;
    formData.employeeId = this.expenses.employeeId;
    formData.employeeName = this.expenses.employeeName;
    formData.expenseDate = this.expenses.expenseDate;
    formData.submitDate = this.expenses.submitDate;
    formData.approvedDate = this.expenses.approvedDate;
    formData.approverId = this.expenses.approverId;
    formData.approverName = this.expenses.approverName;
    formData.expCategory = this.expenses.expCategory;
    formData.amount = this.expenses.amount;
    formData.totalAmount = this.expenses.totalAmount;
    formData.expenseDetails = this.expenses.expenseDetails;
    formData.ticketStatus = this.expenses.ticketStatus;
    formData.reason = this.expenses.reason;

    this.expenseService.editExpense(formData)
      .subscribe(exp => {
        this.toastyService.success({
          title: 'Success',
          msg: 'Expense Edited Successfully',
          theme: 'bootstrap',
          showClose: true,
          timeout: 5000
        });
      },
      err => {
        this.toastyService.error({
          title: 'Error',
          msg: 'An unexpected error occured while editing Expense!',
          theme: 'bootstrap',
          showClose: true,
          timeout: 5000
        });
      });
  }
}
