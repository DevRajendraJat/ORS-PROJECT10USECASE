import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent  extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.SHOPPING, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.quantity);
    flag = flag && validator.isNotNullObject(form.product);
    flag = flag && validator.isNotNullObject(form.date);
    flag = flag && validator.isNotNullObject(form.name);

    return flag;
  }

  limitInput(event: any, maxLength: number) {
    const target = event.target;
    const value = target.value;
    if (value.length >= maxLength) {
      event.preventDefault();
    } else if (!/^(1|9)\d{0,9}$/.test(value + event.key)) {
      event.preventDefault();
    }
  }

  populateForm(form, data) {
    form.id = data.id;
    form.quantity = data.quantity;
    form.product = data.product;
    form.date = data.date;
    form.name = data.name;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}

