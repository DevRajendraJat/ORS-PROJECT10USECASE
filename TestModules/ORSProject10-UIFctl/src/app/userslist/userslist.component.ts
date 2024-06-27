
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent extends BaseListCtl {
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
  isValidMobileInput:boolean=true;
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.USERS, locator, route);
  }

  validateInput(event: any, field: string) {
    const value = event.target.value;

    if (field === 'mobile') {
      this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
    }

  }
}
