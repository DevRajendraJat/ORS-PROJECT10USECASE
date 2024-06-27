import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent extends BaseCtl {
;
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.JOB, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.title);
    flag = flag && validator.isNotNullObject(form.dateofOpening);
    flag = flag && validator.isNotNullObject(form.experience);
    flag = flag && validator.isNotNullObject(form.status);


    return flag;
  }


  populateForm(form, data) {
    form.id = data.id;
    form.title = data.title;
    form.dateofOpening = data.dateofOpening;
    form.experience = data.experience;
    form.status = data.status;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
