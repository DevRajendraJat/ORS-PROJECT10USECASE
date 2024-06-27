import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})


export class LeadComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.LEAD, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.date);
    flag = flag && validator.isNotNullObject(form.contacName);
    flag = flag && validator.isNotNullObject(form.mobile);
    flag = flag && validator.isNotNullObject(form.status);


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
    form.date = data.date;
    form.contacName = data.contacName;
    form.mobile = data.mobile;
    form.status = data.status;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
