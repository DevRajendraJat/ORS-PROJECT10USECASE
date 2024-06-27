import { Component, OnInit } from '@angular/core';

import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.css']
})
export class SupplierlistComponent extends BaseListCtl {
  myKey = "";

  public form = {
    error: false, // error
    message: null, // error or success message
    preload: [], // preload data
    data: { id: null }, // form data
    inputerror: {}, // form input error messages
    searchParams: {}, // search form
    searchMessage: null, // search result message
    list: [], // search list
    pageNo: 0
  };

  base64Data: any;
  retrieveResonse: any;
  message: string;
  isValidPaymentTermInput: boolean = true; // Property to track validity of paymentTerm input
  isValidNameInput: boolean = true;
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.SUPPLIER, locator, route);
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
  // validAlphabet(event: any, field: string) {
  //   const values = event.target.value;
  //   if (field === 'name') {
  //     this.isValidNameInput = /^[A-Za-z\s]+$/.test(values);
  //   }
  // }
  
}