import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent extends BaseListCtl {
  isValidUserNameInput: boolean = true;
  isValidRemarkInput: boolean = true;

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.WISH, locator, route);
  }

  validateInput(event: any, field: string) {
    const value = event.target.value;
    
    if (field === 'userName') {
      const containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
      this.isValidUserNameInput = !containsNonAlphabetic;
    }

    if (field === 'remark') {
      const containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
      this.isValidRemarkInput = !containsNonAlphabetic;
    }
  }
}
