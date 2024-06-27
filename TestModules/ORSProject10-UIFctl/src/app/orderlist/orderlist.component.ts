import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent extends BaseListCtl {

  isValidQuantityInput: boolean = true; // Initialize isValidQuantityInput to true
  isValidAmountInput: boolean = true; // Initialize isValidAmountInput to true

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.ORDER, locator, route);
  }

  validateInput(event: any, field: string) {
    const value = event.target.value;
    if (field === 'quantity') {
      this.isValidQuantityInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
    }
     else if (field === 'amount') {
      this.isValidAmountInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
    }
  }
}
