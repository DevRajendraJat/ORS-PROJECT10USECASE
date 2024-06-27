import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';
@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.css']
})
  export class FollowupComponent extends BaseCtl {
  
    constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
      super(locator.endpoints.FOLLOWUP, locator, route);
    }
  
    validateForm(form) {
      let flag = true;
      let validator = this.serviceLocator.dataValidator;
      flag = flag && validator.isNotNullObject(form.patient);
      flag = flag && validator.isNotNullObject(form.doctor);
      flag = flag && validator.isNotNullObject(form.visitDate);
      flag = flag && validator.isNotNullObject(form.fees);
      
  
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
      form.patient = data.patient;
      console.log(form.quantity + " inside populateForm method");
  
      form.doctor = data.doctor;
      form.visitDate = data.visitDate;
      form.fees = data.fees;
      
  
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
  
