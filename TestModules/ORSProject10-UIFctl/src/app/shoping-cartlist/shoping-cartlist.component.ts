import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-shoping-cartlist',
  templateUrl: './shoping-cartlist.component.html',
  styleUrls: ['./shoping-cartlist.component.css']
})
export class ShopingCartlistComponent extends BaseListCtl {

  isValidQuantityInput: boolean = true; // Initialize isValidQuantityInput to true
  isValidNameInput: boolean = true; // Initialize isValidAmountInput to true

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.SHOPPING, locator, route);
  }

  validateInput(event: any, field: string) {
    const value = event.target.value;
    if (field === 'quantity') {
      this.isValidQuantityInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
    }
     else if (field === 'name') {
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