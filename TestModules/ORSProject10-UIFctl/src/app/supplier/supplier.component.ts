import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.SUPPLIER, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.name);
    flag = flag && validator.isNotNullObject(form.category);
    flag = flag && validator.isNotNullObject(form.registrationDate);
    flag = flag && validator.isNotNullObject(form.paymentTerm);

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

  limitInputw(event: any, maxLength: Text) {
    const target = event.target;
    const value = target.value;
    if (value.length >= maxLength) {
      event.preventDefault();
    } else if (!/^[a-zA-Z]*$\d{0,15}$/.test(value + event.key)) {
      event.preventDefault();
    }
  }

  populateForm(form, data) {
    form.id = data.id;
    form.name = data.name;
    console.log(form.name + " inside populateForm method");

    form.category = data.category;
    form.registrationDate = data.registrationDate;
    form.paymentTerm = data.paymentTerm;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
