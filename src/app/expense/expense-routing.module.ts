import { NgModule } from '@angular/core';
import { SubmitExpenseComponent } from './submit-expense/submit-expense.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports: [
      RouterModule.forRoot(
        [
            { 
                path: 'newexpense', 
                component: SubmitExpenseComponent
            }
        ]
        //{ enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
export class ExpenseRoutingModule {}