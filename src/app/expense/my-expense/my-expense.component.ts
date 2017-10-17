import { Component, OnInit, ViewChild } from '@angular/core';
import { ExpenseService } from '../../shared/services/expense.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'kdir-my-expense',
  templateUrl: './my-expense.component.html',
  styleUrls: ['./my-expense.component.scss']
})
export class MyExpenseComponent implements OnInit {

  showHide: boolean;
  expenses;

  @ViewChild('expenseIdInput') expenseIdInput;

  constructor(private expenseService: ExpenseService, private toastyService: ToastyService) { }

  ngOnInit() {

    this.expenseService.myExpenses()
      .subscribe(exp => {
        this.expenses = exp;
        if (this.expenses.length > 0) {
          this.toastyService.success({
            title: 'Success',
            msg: 'Expenses Fetched!',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
          });
        } else {
          this.toastyService.warning({
            title: 'Info',
            msg: 'No Expenses Submitted So-Far!',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
          });
        }
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

  clearExpense() {
    this.showHide = false;
    this.expenseIdInput.nativeElement.value = "";
  }
}
