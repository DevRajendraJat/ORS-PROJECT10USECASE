import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.TRANSPORTATION, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;

    flag = flag && validator.isNotNullObject(form.description);
    flag = flag && validator.isNotNullObject(form.mode);
    flag = flag && validator.isNotNullObject(form.date);
    flag = flag && validator.isNotNullObject(form.cost);

    return flag;
  }

  limitInput(event: any, maxLength: number) {
    const target = event.target;
    const value = target.value;

    if (value.length >= maxLength || !/^\d*$/.test(event.key)) {
      event.preventDefault();
    }
  }

  populateForm(form, data) {
    form.id = data.id;
    form.description = data.description;
    form.mode = data.mode;
    form.date = data.date;
    form.cost = data.cost;
  }

  parseDate(dateString: string): Date {
    return dateString ? new Date(dateString) : null;
  }

}
