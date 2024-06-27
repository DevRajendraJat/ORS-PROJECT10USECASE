import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.CLIENT, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.name);
    flag = flag && validator.isNotNullObject(form.address);
    flag = flag && validator.isNotNullObject(form.phone);
    flag = flag && validator.isNotNullObject(form.priority);


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
    form.name = data.name;
    form.address = data.address;
    form.phone = data.phone;
    form.priority = data.priority;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
