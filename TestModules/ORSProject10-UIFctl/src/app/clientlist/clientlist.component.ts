import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent extends BaseListCtl {
  myKey = "";


  public form = {

    error: false, //error 
    message: null, //error or success message
    preload: [], // preload data
    data: { id: null }, //form data
    inputerror: {}, // form input error messages
    searchParams: {}, //search form
    searchMessage: null, //search result message
    list: [], // search list 
    pageNo: 0
  };



  base64Data: any;
  retrieveResonse: any;
  message: string;
  isValidNameInput: boolean = true;
  isValidAddressInput: boolean = true;
  isValidPhoneInput: boolean = true;
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.CLIENT, locator, route);
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

  if (field === 'Address') {
    const containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
    if (containsNonAlphabetic) {
      console.log('Please enter letters and spaces only.');
      this.isValidAddressInput = false;
    } else {
      this.isValidAddressInput = true;
    }
  }
  if (field === 'Phone') {
    this.isValidPhoneInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
  }
  }
}
