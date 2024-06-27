import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent extends BaseCtl {

  getKey = false;
  selected = null;
  userForm: FormGroup = null;
  uploadForm: FormGroup;

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.ROUTE, locator, route);
  }

  submit() {
    var _self = this;
    console.log('in submit');
    console.log(this.form);
    console.log(this.form.data);
    this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
      _self.form.message = '';
      _self.form.data.id = res.result.data;

      if (res.success) {
        _self.form.message = "Data is saved";
        _self.form.data.id = res.result.data;

        console.log(_self.form.data.id);
        console.log("----------Route Component Submit----------");

      } else {
        _self.form.error = true;
        if (res.result.inputerror) {
          _self.form.inputerror = res.result.inputerror;
        }
        _self.form.message = res.result.message;
      }
      _self.form.data.id = res.result.data;
      console.log('FORM', _self.form);
    });
  }

  submit1() {
    var _self = this;
    console.log(this.form + "submit running start");
    console.log(this.form.data + "form data going to be submit");
    this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
      _self.form.message = '';
      _self.form.inputerror = {};
      _self.form.data.id = res.result.data;

      if (res.success) {
        _self.form.message = "Data is saved";
        _self.form.data.id = res.result.data;

        console.log(_self.form.data.id);
        console.log("--------------------Route Component Submit1");

      } else {
        _self.form.error = true;
        _self.form.inputerror = res.result.inputerror;
        _self.form.message = res.result.message;
      }
      _self.form.data.id = res.result.data;
      console.log('FORM', _self.form);
    });
  }

  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.name);
    console.log(form.name);
    flag = flag && validator.isNotNullObject(form.startDate);
    console.log(form.startDate);
    flag = flag && validator.isNotNullObject(form.allowSpeed);
    console.log(form.allowSpeed);
    flag = flag && validator.isNotNullObject(form.vehicleId);
    console.log(form.vehicleId);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    console.log(form.id + 'populate form in RouteComponent');
    form.name = data.name;
    form.startDate = data.startDate;
    form.allowSpeed = data.allowSpeed;
    form.vehicleId = data.vehicleId;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

  test() {
    // Optional method for testing or future functionality
  }

}
