import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, 
         MdCheckboxModule, 
         MdCardModule, 
         MdFormFieldModule,
         MdInputModule, 
         MdNativeDateModule, 
         MdDatepickerModule,
         MdSelectModule,
         MatTableModule,
         MdPaginatorModule
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
    MdSelectModule,
    MatTableModule,
    MdPaginatorModule
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
    MdSelectModule,
    MatTableModule,
    MdPaginatorModule
  ],
  declarations: []
})
export class MaterialModule { }
