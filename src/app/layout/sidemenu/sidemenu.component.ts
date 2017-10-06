import { Component, OnInit } from '@angular/core';
import { MenuAccessService } from '../../shared/services/menuAccess.service';
import { EmployeeService } from '../../shared/services/employee.service';

@Component({
  selector: 'kdir-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  showhide: boolean;
  signedUp:boolean;
  constructor(
      private menuAccessService: MenuAccessService,
      private employeeService: EmployeeService) { }

  ngOnInit() {
      this.menuAccessService.checkAccess()
          .subscribe(a => {
              this.showhide = a;
              console.log("Access:- ", a);
          },err => {
              console.log('Error occured while fetching access!');
          });

      this.employeeService.checkLoginStatus()
          .subscribe(status => {
              this.signedUp = status;
          },err => {
              console.log("Error Occured, while fetching status!");
          });
  }
}
