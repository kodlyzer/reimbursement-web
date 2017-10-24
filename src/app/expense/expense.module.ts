import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { SubmitExpenseComponent } from './submit-expense/submit-expense.component';
import { MaterialModule } from '../material/material.module';
import { MyExpenseComponent } from './my-expense/my-expense.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [SubmitExpenseComponent, MyExpenseComponent, ExpenseDetailsComponent]
})
export class ExpenseModule { }
