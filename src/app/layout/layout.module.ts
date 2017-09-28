import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [
    LayoutComponent, 
    SidenavComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
