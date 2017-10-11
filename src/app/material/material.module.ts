import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, 
         MdCheckboxModule, 
         MdCardModule, 
         MdFormFieldModule,
         MdInputModule, 
         MdNativeDateModule, 
         MdDatepickerModule,
         MdSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdFormFieldModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdSelectModule
  ],
  exports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdFormFieldModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
