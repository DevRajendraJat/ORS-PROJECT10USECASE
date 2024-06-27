import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prescriptionlist',
  templateUrl: './prescriptionlist.component.html',
  styleUrls: ['./prescriptionlist.component.css']
})
export class PrescriptionlistComponent extends BaseListCtl {
  isValidCapacityInput:boolean=true
  isValidNameInput:boolean=true
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.PRES, locator, route);
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
    if (field === 'capacity') {
      const containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
      if (containsNonAlphabetic) {
        console.log('Please enter letters and spaces only.');
        this.isValidCapacityInput = false;
      } else {
        this.isValidCapacityInput = true;
      }
    }
  }
}
