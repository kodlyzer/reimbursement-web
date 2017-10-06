import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { ExpenseRoutingModule } from "./expense-routing.module";
import { SubmitExpenseComponent } from './submit-expense/submit-expense.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ExpenseRoutingModule,
    MaterialModule
  ],
  declarations: [SubmitExpenseComponent]
})
export class ExpenseModule { }
