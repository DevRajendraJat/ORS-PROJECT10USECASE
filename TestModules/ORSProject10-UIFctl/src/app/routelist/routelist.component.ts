import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-routelist',
  templateUrl: './routelist.component.html',
  styleUrls: ['./routelist.component.css']
})
export class RoutelistComponent extends BaseListCtl {
  
  isValidNameInput: boolean = true;
  isValidPaymentTermInput:boolean=true
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.ROUTE, locator, route);
  }

  validateInput(event: any, field: string) {
    const value = event.target.value;
    if (field === 'paymentTerm') {
      this.isValidPaymentTermInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
    }  
    if (field === 'name') {
      const containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
      if (containsNonAlphabetic) {
        console.log('Please enter letters and spaces only.');
        this.isValidNameInput = false;
      } else {
        this.isValidNameInput = true;
      }
    }
  }
}
