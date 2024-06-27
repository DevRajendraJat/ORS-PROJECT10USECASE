import { Component, OnInit } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.PRES, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.name);
    flag = flag && validator.isNotNullObject(form.decease);
    flag = flag && validator.isNotNullObject(form.date);
    flag = flag && validator.isNotNullObject(form.capacity);


    return flag;
  }


  populateForm(form, data) {
    form.id = data.id;
    form.name = data.name;
    form.decease = data.decease;
    form.date = data.date;
    form.capacity = data.capacity;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
