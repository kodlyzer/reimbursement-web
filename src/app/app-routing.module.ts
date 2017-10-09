import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SubmitExpenseComponent } from "./expense/submit-expense/submit-expense.component";
import { CounterComponent } from "./shared/components/counter/counter.component";
import { FetchDataComponent } from "./shared/components/fetchdata/fetchdata.component";
import { EmployeeComponent } from "./shared/components/employee/employee.component";
import { NewEmployeeComponent } from "./shared/components/new-employee/new-employee.component";
import { SearchEmployeeComponent } from "./shared/components/search-employee/search-employee.component";
import { NewExpenseComponent } from "./shared/components/new-expense/new-expense.component";
import { FetchExpenseComponent } from "./shared/components/fetch-expense/fetch-expense.component";
import { MyExpensesComponent } from "./shared/components/my-expenses/my-expenses.component";
import { DetailViewComponent } from "./shared/components/detail-view/detail-view.component";
import { EditExpenseComponent } from "./shared/components/edit-expense/edit-expense.component";
import { EditEmployeeComponent } from "./shared/components/edit-employee/edit-employee.component";
import { UploadDocumentComponent } from "./shared/components/upload-documents/upload-document.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
    imports: [
        RouterModule.forRoot(
            [{
                path: '',
                component: MainComponent,
                children: [
                    { path: 'home', component: DashboardComponent }, 
                    { path: 'newexpense', component: SubmitExpenseComponent},
                    { path: 'counter', component: CounterComponent },
                    { path: 'fetch-data', component: FetchDataComponent },
                    { path: 'employee', component: EmployeeComponent },
                    { path: 'new-employee', component: NewEmployeeComponent },
                    { path: 'search-employee', component: SearchEmployeeComponent },
                    { path: 'new-expense', component: NewExpenseComponent },
                    { path: 'fetch-expense', component: FetchExpenseComponent },
                    { path: 'my-expenses', component: MyExpensesComponent },
                    { path: 'detail-view/:id', component: DetailViewComponent },
                    { path: 'edit-expense/:id', component: EditExpenseComponent },
                    { path: 'edit-employee', component: EditEmployeeComponent },
                    { path: 'upload-document/:id', component: UploadDocumentComponent }
                ]
            }, {
                path: 'signup',
                component: SignUpComponent
            }, { 
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            }]
           // { enableTracing: true } // <-- debugging purposes only
          )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}