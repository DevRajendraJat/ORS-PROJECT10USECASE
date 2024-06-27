import { Component, OnInit } from '@angular/core';

import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-followuplist',
  templateUrl: './followuplist.component.html',
  styleUrls: ['./followuplist.component.css']
})
export class FollowuplistComponent extends BaseListCtl {
  
 
  isValidFeesInput:boolean=true;
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.FOLLOWUP, locator, route);
  }


  validateInput(event: any, field: string) {
    const value = event.target.value;
    
     if (field === 'fees') {
      this.isValidFeesInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
    }
  }
}


