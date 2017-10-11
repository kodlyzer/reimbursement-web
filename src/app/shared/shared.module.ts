
import { baseUrl } from './shared.config';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ToastyModule } from "ng2-toasty";

import { EmployeeService } from './services/employee.service';
import { ExpenseService } from './services/expense.service';
import { ApproverService } from './services/approver.service';
import { ExpCategoryService } from './services/expCategory.service';
import { MenuAccessService } from './services/menuAccess.service';
import { DocsService } from './services/document.service';

import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';
import { NewExpenseComponent } from './components/new-expense/new-expense.component';
import { FetchExpenseComponent } from './components/fetch-expense/fetch-expense.component';
import { MyExpensesComponent } from './components/my-expenses/my-expenses.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { EditExpenseComponent } from './components/edit-expense/edit-expense.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { UploadDocumentComponent } from './components/upload-documents/upload-document.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    HttpModule,
    FormsModule,
    ToastyModule.forRoot(),
    RouterModule.forRoot([])
  ],
  declarations: [
    FetchDataComponent,
    CounterComponent,
    EmployeeComponent,
    NewEmployeeComponent,
    SearchEmployeeComponent,
    NewExpenseComponent,
    FetchExpenseComponent,
    MyExpensesComponent,
    DetailViewComponent,
    EditExpenseComponent,
    EditEmployeeComponent,
    UploadDocumentComponent
  ],
  exports: [
    HttpModule,
    FormsModule,
    ToastyModule
  ],
  providers: [
<<<<<<< HEAD
    { provide: 'BASE_URL', useValue: 'http://localhost:7000/' },
=======
    { provide: 'BASE_URL', useValue: baseUrl },
>>>>>>> 4b1c3f8b40882f217cfa15e9f9c7f41a7521c363
    EmployeeService,
    ExpenseService,
    ApproverService,
    ExpCategoryService,
    MenuAccessService,
    DocsService
  ]
})
export class SharedModule { }
