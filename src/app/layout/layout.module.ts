import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdSidenavModule} from '@angular/material';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [
    LayoutComponent, 
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent
  ]
})
export class LayoutModule { }
