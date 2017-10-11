import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { SubmitExpenseComponent } from './submit-expense/submit-expense.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [SubmitExpenseComponent]
})
export class ExpenseModule { }
