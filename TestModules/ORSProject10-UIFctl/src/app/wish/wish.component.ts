import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})


export class WishComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.WISH, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.product);
    flag = flag && validator.isNotNullObject(form.date);
    flag = flag && validator.isNotNullObject(form.userName);
    flag = flag && validator.isNotNullObject(form.remark);

    return flag;
  }


  populateForm(form, data) {
    form.id = data.id;
    form.product = data.product;
    form.date = data.date;
    form.userName = data.userName;
    form.remark = data.remark;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
