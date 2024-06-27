import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.USERS, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.name);
    flag = flag && validator.isNotNullObject(form.loginId);
    flag = flag && validator.isNotNullObject(form.password);
    flag = flag && validator.isNotNullObject(form.dateOfBirth);
    flag = flag && validator.isNotNullObject(form.mobile);

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
    console.log(form.quantity + " inside populateForm method");

    form.loginId = data.loginId;
    form.password = data.password;
    form.dateOfBirth = data.dateOfBirth;
    form.mobile=data.mobile;

    //let ndate = new Date(data.dob);

    //console.log(form.dob + 'date ------',ndate)

  }
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
