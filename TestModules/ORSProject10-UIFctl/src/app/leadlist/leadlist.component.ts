import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-leadlist',
  templateUrl: './leadlist.component.html',
  styleUrls: ['./leadlist.component.css']
})
export class LeadlistComponent extends BaseListCtl {


  isValidMobileInput: boolean = true
  isValidContacNameInput: boolean = true;

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.LEAD, locator, route);
  }

  validateInput(event: any, field: string) {
    const value = event.target.value;

    if (field === 'mobile') {
      this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
    }
    if (field === 'contacName') {
      const containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
      if (containsNonAlphabetic) {
        console.log('Please enter letters and spaces only.');
        this.isValidContacNameInput = false;
      } else {
        this.isValidContacNameInput = true;
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