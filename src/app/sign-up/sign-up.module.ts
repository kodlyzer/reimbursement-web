import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { SignUpRoutingModule } from './sign-up-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    SignUpRoutingModule
  ],
  declarations: [
    SignUpComponent
  ]
})
export class SignUpModule { }
