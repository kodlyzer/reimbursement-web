import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports: [
      RouterModule.forRoot(
        [
            { 
                path: 'home', 
                component: DashboardComponent
            }
        ],
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
export class DashboardRoutingModule {}