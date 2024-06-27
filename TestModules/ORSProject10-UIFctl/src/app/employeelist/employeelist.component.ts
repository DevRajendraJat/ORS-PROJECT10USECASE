import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent extends BaseListCtl {

  isValidNameInput:boolean=true;
  isValidLastEmployerNameInput:boolean=true
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.EMPLOYEE, locator, route);
  }


  validateInput(event: any, field: string) {
    const value = event.target.value;
   
  if (field === 'name') {
    const containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
    if (containsNonAlphabetic) {
      console.log('Please enter letters and spaces only.');
      this.isValidNameInput = false;
    } else {
      this.isValidNameInput = true;
    }
  }

  if (field === 'lastEmployerName') {
    const containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
    if (containsNonAlphabetic) {
      console.log('Please enter letters and spaces only.');
      this.isValidLastEmployerNameInput = false;
    } else {
      this.isValidLastEmployerNameInput = true;
    }
  }
  }
}